# Beije Custom Packet - Backend

A NestJS-based REST API for user registration and email verification.

## 🚀 Tech Stack

- **Framework**: NestJS 10.0
- **Language**: TypeScript 5.4+
- **Database**: SQLite with TypeORM 0.3
- **Email**: Nodemailer 6.9
- **Validation**: class-validator & class-transformer
- **Testing**: Jest 29.7
- **Runtime**: Node.js 20.x+

## 📋 Features

- 👤 **User Registration**: Secure user registration with validation
- ✉️ **Email Verification**: Automated email verification workflow
- 🔐 **Token-based Verification**: Unique verification tokens for email confirmation
- 📊 **SQLite Database**: Lightweight database with TypeORM
- ✅ **Input Validation**: DTO validation using class-validator
- 🌐 **CORS Enabled**: Cross-origin resource sharing support
- 🧪 **Unit Testing**: Jest test configuration

## 📁 Project Structure

```
backend/
├── src/
│   ├── main.ts                 # Application entry point
│   ├── app.module.ts           # Root application module
│   ├── config/
│   │   └── configuration.ts    # Configuration management
│   ├── user/
│   │   ├── user.module.ts      # User module
│   │   ├── user.controller.ts  # User endpoints
│   │   ├── user.service.ts     # User business logic
│   │   ├── entities/
│   │   │   └── user.entity.ts  # User database entity
│   │   └── dto/
│   │       └── register.dto.ts # Registration data transfer object
│   └── email/
│       ├── email.module.ts     # Email module
│       └── email.service.ts    # Email service
├── test/
│   └── user.service.spec.ts    # User service unit tests
├── dist/                        # Compiled JavaScript output
├── data.sqlite                  # SQLite database file
├── tsconfig.json                # TypeScript configuration
├── jest.config.ts               # Jest testing configuration
└── package.json                 # Dependencies and scripts
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn package manager

### Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

### Environment Variables

Create a `.env` file in the backend directory:

```env
# Application
PORT=8080
APP_BASE_URL=http://localhost:8080

# Database
DB_PATH=data.sqlite

# SMTP Email Configuration
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@example.com
SMTP_PASS=your-email-password
EMAIL_FROM=no-reply@beije.com

# For Gmail SMTP example:
# SMTP_HOST=smtp.gmail.com
# SMTP_PORT=587
# SMTP_SECURE=false
# SMTP_USER=your-gmail@gmail.com
# SMTP_PASS=your-app-specific-password
```

### Development

Run in development mode with hot reload:

```bash
npm run start:dev
```

The API will be available at `http://localhost:8080`

### Production

Build the application:

```bash
npm run build
```

Run the production build:

```bash
npm run start:prod
```

### Testing

Run unit tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

## 📡 API Endpoints

### Base URL
```
http://localhost:8080
```

### User Registration

**POST** `/user/register`

Register a new user and send verification email.

**Request Body:**
```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "SecurePassword123"
}
```

**Response:**
```json
{
  "message": "registration success, check your email for verification link"
}
```

**Validation Rules:**
- Email must be valid format
- Password must meet security requirements
- Username is required

---

### Email Verification

**GET** `/user/verify-email/:username/:verificationToken`

Verify user's email address using the verification token sent via email.

**Parameters:**
- `username`: User's username
- `verificationToken`: Unique verification token from email

**Response:**
```json
{
  "message": "email verified successfully"
}
```

---

### Check Verification Status

**GET** `/user/check-verification/:username`

Check if a user's email has been verified.

**Parameters:**
- `username`: User's username

**Response:**
```json
{
  "message": "user is verified"
}
```
or
```json
{
  "message": "user is not verified"
}
```

## 🗄️ Database Schema

### User Entity

```typescript
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  isVerified: boolean;

  @Column({ nullable: true })
  verificationToken: string;

  @CreateDateColumn()
  createdAt: Date;
}
```

## 🔧 Configuration

### Application Configuration

Configuration is managed through `@nestjs/config` module. All environment variables are loaded and validated from the `.env` file.

**Configuration Structure:**
```typescript
{
  app: {
    port: number,
    baseUrl: string
  },
  database: {
    path: string
  },
  email: {
    host: string,
    port: number,
    secure: boolean,
    user: string,
    pass: string,
    from: string
  }
}
```

### Global Pipes

The application uses a global validation pipe for automatic DTO validation:

```typescript
app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true
  })
);
```

### CORS Configuration

CORS is enabled for all origins in development:

```typescript
app.enableCors({
  origin: true,
  credentials: true
});
```

**Note:** For production, configure specific allowed origins.

## ✉️ Email Service

The email service uses nodemailer to send verification emails.

### Email Verification Flow

1. User registers with email and password
2. System generates unique verification token
3. Verification email is sent with verification link
4. User clicks link to verify email
5. System marks user as verified in database

### Email Template

Verification emails contain:
- Personalized greeting
- Verification link with token
- Instructions for verification
- Expiration notice (if applicable)

## 🧪 Testing

### Unit Tests

Unit tests are located in the `test/` directory and use Jest with NestJS testing utilities.

**Example Test:**
```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../src/user/user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
```

## 📝 Scripts

- `npm start`: Run application with ts-node
- `npm run start:dev`: Run in development mode with hot reload
- `npm run build`: Compile TypeScript to JavaScript
- `npm run start:prod`: Run compiled production build
- `npm test`: Run Jest tests
- `npm run test:watch`: Run tests in watch mode

## 🔒 Security Considerations

### Current Implementation

- Email/password validation
- Token-based email verification
- Input sanitization via DTOs

### Recommended Enhancements

For production deployment, consider adding:

1. **Password Hashing**: Use bcrypt or argon2 for password hashing
2. **JWT Authentication**: Implement JWT for secure API access
3. **Rate Limiting**: Prevent brute force attacks
4. **HTTPS**: Use SSL/TLS certificates
5. **Environment-specific CORS**: Restrict origins in production
6. **Token Expiration**: Add expiration to verification tokens
7. **Database Encryption**: Encrypt sensitive data at rest
8. **Input Sanitization**: Additional SQL injection protection
9. **Logging**: Implement comprehensive logging
10. **Error Handling**: Custom error messages (don't expose system details)

## 🚀 Deployment

### Prerequisites

- Node.js 20.x runtime
- SQLite support
- SMTP server access

### Steps

1. Set environment variables for production
2. Build the application: `npm run build`
3. Start the application: `npm run start:prod`
4. Configure reverse proxy (nginx/Apache)
5. Set up process manager (PM2/systemd)

### PM2 Example

```bash
pm2 start dist/main.js --name beije-backend
pm2 save
pm2 startup
```

### Docker (Optional)

Create a `Dockerfile`:
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY dist ./dist
COPY data.sqlite ./
CMD ["node", "dist/main.js"]
```

## 🐛 Troubleshooting

### Database Issues

If database connection fails:
1. Check `DB_PATH` in `.env`
2. Ensure write permissions for SQLite file
3. Verify TypeORM configuration

### Email Not Sending

If verification emails aren't sent:
1. Verify SMTP credentials in `.env`
2. Check SMTP server allows connections
3. Review email service logs
4. Test with a different email provider

### Port Already in Use

If port 8080 is occupied:
```bash
# Change PORT in .env file
PORT=3001
```

## 🤝 Contributing

1. Follow NestJS best practices
2. Write unit tests for new features
3. Use DTOs for data validation
4. Document API endpoints
5. Follow TypeScript strict mode

## 📄 License

This project is proprietary software for Beije.

## 🆘 Support

For issues or questions, please contact the development team or create an issue in the project repository.

---

**Built with ❤️ for Beije**
