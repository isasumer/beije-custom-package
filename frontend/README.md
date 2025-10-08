# Beije Custom Packet - Frontend

A modern Next.js application for creating custom menstrual product packages with an intuitive user interface.

## 🚀 Tech Stack

- **Framework**: Next.js 15.5.4 with Turbopack
- **React**: 19.1.0
- **UI Library**: Material-UI (MUI) v7
- **State Management**: Redux Toolkit 2.9.0
- **Styling**: SCSS Modules + Emotion (MUI)
- **Language**: TypeScript 5
- **Linting**: ESLint with Next.js config

## 📋 Features

- 🎨 **Custom Package Builder**: Create personalized menstrual product subscriptions
- 🌐 **Internationalization**: Multi-language support (EN/TR)
- 📱 **Responsive Design**: Mobile-first approach with adaptive layouts
- 🛒 **Product Selection**: Interactive product selection with quantity management
- 🎯 **Redux State Management**: Centralized state for custom packet selections
- 🎨 **Modern UI**: Material-UI components with custom SCSS styling
- ♿ **Accessibility**: Built with accessibility best practices

## 📁 Project Structure

```
frontend/
├── app/                      # Next.js app directory
│   ├── custom-packet/        # Custom packet builder page
│   ├── layout.tsx            # Root layout component
│   ├── theme.ts              # MUI theme configuration
│   └── StoreProvider.tsx     # Redux store provider
├── components/
│   ├── layout/               # Layout components
│   │   ├── Footer/           # Footer with newsletter subscription
│   │   ├── Navbar/           # Navigation bar with menu items
│   │   ├── PackageSelection/ # Product selection interface
│   │   ├── SpecialPackage/   # Custom package basket
│   │   └── ThemeWrapper/     # MUI theme wrapper
│   └── UI/                   # Reusable UI components
│       └── Accordion/        # Custom accordion component
├── lib/                      # Redux store configuration
│   ├── store.ts              # Store setup
│   ├── CustomPacketSlice.ts  # Custom packet state slice
│   ├── entities.ts           # TypeScript entities
│   ├── hooks.ts              # Redux hooks
│   └── selectors.ts          # Redux selectors
├── i8n/                      # Internationalization
│   ├── en.ts                 # English translations
│   ├── tr.ts                 # Turkish translations
│   └── index.ts              # i18n exports
├── entities/                 # TypeScript type definitions
├── hooks/                    # Custom React hooks
├── styles/                   # Global styles and mixins
├── assets/                   # SVG icons and assets
└── public/                   # Static files

```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn package manager

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the frontend directory:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8080

# Add other environment variables as needed
```

### Development

Run the development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 📦 Available Products

### Menstrual Products
- **Pads**: Standard, Super, Super+
- **Panty Liners**: Standard, Super, Thong
- **Tampons**: Mini, Standard, Super

### Supportive Products
- **beije Cycle Essentials**: Supplement capsules (32 capsules per bottle)
- **beije Cranberry Essentials**: Vegan supplement capsules (30 capsules)
- **Heating Patch**: Available in 1-pack, 2-pack, and 4-pack

## 🎯 Key Components

### PackageSelection
Interactive product selection interface with:
- Tabbed navigation for product categories
- Accordion-style product details
- Quantity selection controls
- Product descriptions and recommendations

### SpecialPackage/Basket
Shopping cart functionality:
- Display selected products
- Quantity management
- Remove items
- Total calculation
- Subscription frequency indicator

### Navbar
Responsive navigation with:
- Product categories dropdown
- Quick links
- Mobile menu support
- Logo and branding

### Footer
- Newsletter subscription
- Quick links section
- Social media links
- Legal information links
- Payment methods display

## 🔧 Redux Store Structure

### CustomPacketSlice
Manages the state for custom package selections:

```typescript
interface ProductSelection {
  mainProductId: string;
  productId: string;
  quantity: number;
  // ... other fields
}

interface CustomPacketState {
  selections: ProductSelection[];
}
```

**Actions:**
- `addProductSelection`: Add or update product quantity
- `removeProductSelection`: Remove product from selection

## 🌍 Internationalization

The application supports multiple languages through the `i8n` directory:

```typescript
// Usage example
import { enMessages } from '@/i8n';

const text = enMessages["001"]; // "Products"
```

## 🎨 Styling

### SCSS Modules
Component-specific styles using SCSS modules:
```tsx
import styles from './styles.module.scss';

<div className={styles.container}>...</div>
```

### Global Styles
- `styles/_variables.scss`: SCSS variables
- `styles/mixins.scss`: Reusable SCSS mixins
- `app/globals.css`: Global CSS styles

### MUI Theme
Custom Material-UI theme configuration in `app/theme.ts`

## 📝 Scripts

- `npm run dev`: Start development server with Turbopack
- `npm run build`: Build for production
- `npm start`: Start production server
- `npm run lint`: Run ESLint

## 🔍 Code Quality

### ESLint
Configured with Next.js recommended rules:
```bash
npm run lint
```

### TypeScript
Strict type checking enabled for better code quality and developer experience.

## 🚀 Deployment

The application can be deployed to various platforms:

### Vercel (Recommended)
```bash
vercel deploy
```

### Other Platforms
After building, deploy the `.next` folder with a Node.js environment.

## 📱 Responsive Breakpoints

The application uses custom hooks and SCSS mixins for responsive design:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

1. Follow the existing code structure and naming conventions
2. Use TypeScript for type safety
3. Write clean, self-documenting code
4. Use SCSS modules for component styling
5. Ensure responsive design for all new components

## 📄 License

This project is proprietary software for Beije.

## 🆘 Support

For issues or questions, please contact the development team or create an issue in the project repository.

---

**Built with ❤️ for Beije**
