![alt-text](https://github.com/isasumer/beije-custom-package/blob/master/demo-beije-gif.gif)

# Beije Custom Packet

A full-stack application for creating and managing custom menstrual product subscription packages. Built with modern web technologies, this platform provides an intuitive interface for users to personalize their monthly deliveries.

## 📋 Overview

Beije Custom Packet is a comprehensive subscription service platform that allows users to:
- Create personalized menstrual product packages
- Select from a variety of pads, tampons, panty liners, and supportive products
- Manage subscription preferences
- Register and verify accounts via email

## 🏗️ Architecture

This is a monorepo containing two main applications:

```
beije-custom-packet/
├── frontend/          # Next.js 15 React application
├── backend/           # NestJS REST API
└── README.md          # This file
```

### Frontend
- **Framework**: Next.js 15.5.4 with React 19
- **UI Library**: Material-UI v7
- **State Management**: Redux Toolkit
- **Styling**: SCSS Modules + Emotion
- **Language Support**: English & Turkish

### Backend
- **Framework**: NestJS 10
- **Database**: SQLite with TypeORM
- **Email Service**: Nodemailer
- **API Type**: RESTful API with validation

## 🚀 Quick Start

### Prerequisites

- Node.js 20.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd beije-custom-packet
```

2. Install dependencies for both frontend and backend:
```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### Environment Setup

#### Backend Environment Variables

Create `backend/.env`:
```env
PORT=8080
APP_BASE_URL=http://localhost:8080
DB_PATH=data.sqlite

# SMTP Configuration
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@example.com
SMTP_PASS=your-password
EMAIL_FROM=no-reply@beije.com
```

#### Frontend Environment Variables

Create `frontend/.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:8080
```

### Running the Application

#### Development Mode

**Backend:**
```bash
cd backend
npm run start:dev
```
Backend runs on: `http://localhost:8080`

**Frontend:**
```bash
cd frontend
npm run dev
```
Frontend runs on: `http://localhost:3000`

#### Production Mode

**Backend:**
```bash
cd backend
npm run build
npm run start:prod
```

**Frontend:**
```bash
cd frontend
npm run build
npm start
```

## 📦 Project Structure

### Frontend Structure
```
frontend/
├── app/                    # Next.js app directory (routes)
├── components/             # React components
│   ├── layout/            # Layout components (Navbar, Footer, etc.)
│   └── UI/                # Reusable UI components
├── lib/                   # Redux store and slices
├── i8n/                   # Internationalization
├── entities/              # TypeScript types
├── styles/                # Global styles and SCSS variables
├── hooks/                 # Custom React hooks
├── assets/                # Icons and images
└── public/                # Static files
```

### Backend Structure
```
backend/
├── src/
│   ├── main.ts            # Application entry point
│   ├── app.module.ts      # Root module
│   ├── user/              # User module (registration, verification)
│   ├── email/             # Email service module
│   └── config/            # Configuration
├── test/                  # Unit tests
└── data.sqlite            # SQLite database
```

## 🎯 Key Features

### Custom Package Builder
- Interactive product selection interface
- Real-time basket updates
- Quantity management for each product type
- Subscription frequency options

### Product Categories

**Menstrual Products:**
- Pads (Standard, Super, Super+)
- Panty Liners (Standard, Super, Thong)
- Tampons (Mini, Standard, Super)

**Supportive Products:**
- beije Cycle Essentials (32 capsules)
- beije Cranberry Essentials (30 capsules)
- Heating Patches (1-pack, 2-pack, 4-pack)

### User Management
- User registration with validation
- Email verification workflow
- Account status checking

## 🔌 API Endpoints

### User Registration
```http
POST /user/register
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "SecurePassword123"
}
```

### Email Verification
```http
GET /user/verify-email/:username/:verificationToken
```

### Check Verification Status
```http
GET /user/check-verification/:username
```

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm test                # Run tests once
npm run test:watch      # Run tests in watch mode
```

### Frontend
```bash
cd frontend
npm run lint            # Run ESLint
```

## 🛠️ Technology Stack

### Frontend Technologies
- **Next.js 15.5.4**: React framework with App Router
- **React 19**: UI library
- **Material-UI v7**: Component library
- **Redux Toolkit**: State management
- **SCSS Modules**: Scoped styling
- **TypeScript**: Type safety

### Backend Technologies
- **NestJS 10**: Progressive Node.js framework
- **TypeORM**: ORM for database operations
- **SQLite**: Lightweight database
- **class-validator**: DTO validation
- **nodemailer**: Email sending
- **Jest**: Testing framework

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌍 Internationalization

Currently supports:
- 🇺🇸 English
- 🇹🇷 Turkish

Languages can be easily extended by adding new translation files in `frontend/i8n/`.

## 🔐 Security Features

- Input validation on both client and server
- Email verification for user registration
- CORS configuration
- Environment variable management
- TypeScript for type safety

## 📚 Documentation

Detailed documentation is available in each subdirectory:
- [Frontend Documentation](./frontend/README.md)
- [Backend Documentation](./backend/README.md)

## 🚀 Deployment

### Frontend Deployment (Vercel)
```bash
cd frontend
vercel deploy
```

### Backend Deployment
1. Build the application
2. Set production environment variables
3. Use PM2 or similar process manager
4. Configure reverse proxy (nginx)

## 🤝 Contributing

1. Follow the established code structure
2. Write meaningful commit messages
3. Add tests for new features
4. Update documentation when needed
5. Follow TypeScript best practices

## 📄 License

This project is proprietary software for Beije. All rights reserved.

## 👥 Team

Developed and maintained by the Beije development team.

## 🆘 Support

For technical issues or questions:
- Check the documentation in frontend/backend README files
- Contact the development team
- Create an issue in the project repository

## 🗺️ Roadmap

Future enhancements may include:
- [ ] User authentication with JWT
- [ ] Payment integration
- [ ] Order history
- [ ] Subscription management dashboard
- [ ] Admin panel
- [ ] Product recommendations
- [ ] Mobile app
- [ ] Social login integration

## 📝 Changelog

See individual README files for specific version changes.

---

**Built with ❤️ for Beije - Empowering menstrual health**

🌐 Website: [beije.com](https://beije.com)

