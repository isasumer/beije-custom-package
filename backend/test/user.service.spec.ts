
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserService } from '../src/user/user.service';
import { User } from '../src/user/entities/user.entity';
import { EmailService } from '../src/email/email.service';
import { ConfigService } from '@nestjs/config';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { jest } from '@jest/globals';
import { describe, beforeEach, it, expect } from '@jest/globals'; 
import { Repository, ObjectLiteral } from 'typeorm';

type MockRepository<T extends ObjectLiteral = any> = Partial<Record<keyof Repository<T>, jest.Mock>> & {
  findOne: jest.Mock<(options?: any) => Promise<T | null>>;
  create: jest.Mock<(data: any) => T>;
  save: jest.Mock<(entity: any) => Promise<T>>;
};

const createUserRepositoryMock = (): MockRepository<User> => ({
  findOne: jest.fn(),
  create: jest.fn(),
  save: jest.fn(),
});

describe('UserService', () => {
  let service: UserService;
  let repo: MockRepository<User>;
  let emailService: EmailService;
  let configService: ConfigService;

  beforeEach(async () => {
    repo = createUserRepositoryMock();
    emailService = { sendVerificationEmail: jest.fn().mockResolvedValue(undefined as never) } as any;
    configService = {
      get: jest.fn((key: string) => (key === 'app.baseUrl' ? 'http://localhost:3001' : undefined)),
    } as any;

    const moduleRef = await Test.createTestingModule({
      providers: [
        UserService,
        { provide: getRepositoryToken(User), useValue: repo },
        { provide: EmailService, useValue: emailService },
        { provide: ConfigService, useValue: configService },
      ],
    }).compile();

    service = moduleRef.get(UserService);
  });

  describe('register', () => {
    it('creates a new user and sends verification email', async () => {
      repo.findOne.mockResolvedValue(null);
      repo.create.mockImplementation((data: any) => ({ id: 1, createdAt: new Date(), ...data } as User));
      repo.save.mockImplementation(async (user: any) => user);

      await service.register({ username: 'john_doe', email: 'john@example.com' });

      expect(repo.findOne).toHaveBeenCalledWith({ where: { username: 'john_doe' } });
      expect(repo.create).toHaveBeenCalledWith(
        expect.objectContaining({ username: 'john_doe', email: 'john@example.com', isVerified: false })
      );
      expect(repo.save).toHaveBeenCalled();
      expect(emailService.sendVerificationEmail).toHaveBeenCalledWith(
        'john@example.com',
        'john_doe',
        expect.any(String),
        'http://localhost:3001'
      );
    });

    it('throws if username exists', async () => {
      repo.findOne.mockResolvedValue({ id: 1, username: 'existing', email: 'a@b.com' } as User);
      await expect(service.register({ username: 'existing', email: 'a@b.com' })).rejects.toBeInstanceOf(
        BadRequestException
      );
    });
  });

  describe('verifyEmail', () => {
    it('verifies user when token matches', async () => {
      const user = { id: 1, username: 'john', verificationToken: 'abc', isVerified: false } as User;
      repo.findOne.mockResolvedValue(user);
      repo.save.mockResolvedValue({ ...user, isVerified: true });

      await service.verifyEmail('john', 'abc');
      expect(repo.findOne).toHaveBeenCalledWith({ where: { username: 'john' } });
      expect(repo.save).toHaveBeenCalledWith(expect.objectContaining({ isVerified: true }));
    });

    it('throws if user not found', async () => {
      repo.findOne.mockResolvedValue(null);
      await expect(service.verifyEmail('unknown', 't')).rejects.toBeInstanceOf(NotFoundException);
    });

    it('throws if token does not match', async () => {
      repo.findOne.mockResolvedValue({ username: 'john', verificationToken: 'abc' } as User);
      await expect(service.verifyEmail('john', 'wrong')).rejects.toBeInstanceOf(BadRequestException);
    });
  });

  describe('checkVerification', () => {
    it('returns true if verified', async () => {
      repo.findOne.mockResolvedValue({ isVerified: true } as User);
      await expect(service.checkVerification('john')).resolves.toBe(true);
    });

    it('returns false if not verified', async () => {
      repo.findOne.mockResolvedValue({ isVerified: false } as User);
      await expect(service.checkVerification('john')).resolves.toBe(false);
    });

    it('throws if user not found', async () => {
      repo.findOne.mockResolvedValue(null);
      await expect(service.checkVerification('unknown')).rejects.toBeInstanceOf(NotFoundException);
    });
  });
});


