export default () => ({
  app: {
    port: parseInt(process.env.PORT || '3001', 10),
    baseUrl: process.env.APP_BASE_URL || 'http://localhost:3001',
  },
  database: {
    path: process.env.DB_PATH || 'data.sqlite',
  },
  email: {
    host: process.env.SMTP_HOST || '',
    port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587,
    secure: process.env.SMTP_SECURE === 'true',
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
    from: process.env.EMAIL_FROM || 'no-reply@example.com',
  },
});


