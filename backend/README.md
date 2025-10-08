## Email Verification API (NestJS)

This service provides email verification for user registration.

### Tech Stack
- NestJS
- TypeORM + SQLite (file-based DB)
- Nodemailer (SMTP)
- class-validator / class-transformer

### Setup
1. Navigate to `backend/` and install dependencies:
   ```bash
   cd backend && npm install
   ```
2. Configure environment (use your SMTP or keep logging to console for dev):
   - Create a `.env` file in `backend/` with:
     ```
     PORT=3001
     APP_BASE_URL=http://localhost:3001
     DB_PATH=data.sqlite
     SMTP_HOST=smtp.gmail.com
     SMTP_PORT=587
     SMTP_SECURE=false
     SMTP_USER=your_gmail@gmail.com
     SMTP_PASS=your_app_password
     EMAIL_FROM="Beije <no-reply@beije.com>"
     ```
   - If SMTP is not set, the app will log the verification link to the console.
3. Run in development:
   ```bash
   npm run start:dev
   ```
   Or build and run:
   ```bash
   npm run build && npm run start:prod
   ```

### API
- POST `/user/register`
  - Body: `{ "username": string, "email": string }`
  - Action: creates `{ username, email, verificationToken, isVerified=false }`, emails token link

- GET `/user/verify-email/:username/:verificationToken`
  - Verifies token, sets `isVerified=true`

- GET `/user/check-verification/:username`
  - Returns `user is verified` or `user is not verified`

### Modules
- `UserModule`
  - `UserController`: defines the 3 endpoints
  - `UserService`: registration, token verification, verification check
  - `User` entity: username, email, verificationToken, isVerified

- `EmailModule`
  - `EmailService`: sends verification email via SMTP or logs link if not configured

- `Config`
  - Centralized config via `@nestjs/config` and `src/config/configuration.ts`

### Notes
- DB is SQLite stored at `DB_PATH` (default `data.sqlite`).
- Token is random alphanumeric.
- If SMTP is not configured, the verification URL is logged to the console for testing.

### Optional (Bonus)
- Add tests (e2e or unit) with Jest.
- Publish to GitHub as public repository.
- If you used ChatGPT/Copilot, log usage and link a gist/video.


