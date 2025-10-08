import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import nodemailer, { Transporter } from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: Transporter | null = null;
  private readonly fromAddress: string;

  constructor(private readonly configService: ConfigService) {
    const host = this.configService.get<string>('email.host');
    const user = this.configService.get<string>('email.user');
    const pass = this.configService.get<string>('email.pass');
    const port = this.configService.get<number>('email.port');
    const secure = this.configService.get<boolean>('email.secure');

    this.fromAddress = this.configService.get<string>('email.from') || 'no-reply@example.com';

    if (host && user && pass) {
      this.transporter = nodemailer.createTransport({ host, port, secure, auth: { user, pass } });
    }
  }

  async sendVerificationEmail(
    toEmail: string,
    username: string,
    token: string,
    verificationUrlBase: string
  ): Promise<void> {
    const verifyUrl = `${verificationUrlBase}/user/verify-email/${encodeURIComponent(
      username
    )}/${encodeURIComponent(token)}`;

    const subject = 'Verify your email address';
    const text = `Hi ${username},\n\nPlease verify your email by clicking the link below:\n${verifyUrl}\n\nIf you did not request this, you can ignore this email.`;
    const html = `<p>Hi <strong>${username}</strong>,</p><p>Please verify your email by clicking the link below:</p><p><a href="${verifyUrl}">${verifyUrl}</a></p><p>If you did not request this, you can ignore this email.</p>`;

    if (!this.transporter) {
      // Fallback for local/dev environments without SMTP: log to console
      // eslint-disable-next-line no-console
      console.log(`[EmailService] SMTP not configured. Intended email to ${toEmail}: ${verifyUrl}`);
      return;
    }

    await this.transporter.sendMail({ from: this.fromAddress, to: toEmail, subject, text, html });
  }
}


