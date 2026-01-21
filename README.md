# Phil Builds Things

A production-ready personal brand website showcasing software engineering, AI systems, and maker projects. Built with modern web technologies and optimized for AWS Amplify deployment.

## 🚀 Tech Stack

- **Framework**: Vite + React
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Hosting**: AWS Amplify (static frontend)
- **Code Quality**: ESLint, Prettier

## 📁 Project Structure

```
philbuildsthings/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Card.tsx
│   │   └── PlaceholderImage.tsx
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── Resume.tsx
│   │   └── Projects.tsx
│   ├── App.tsx         # Main app component with routing
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles with Tailwind directives
├── index.html          # HTML entry point
├── package.json
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── README.md
```

## 🛠️ Local Development

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/philwilt/philbuildsthings.git
cd philbuildsthings
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🚢 Deployment to AWS Amplify

### Prerequisites

- AWS Account
- GitHub repository with this code
- AWS Amplify access

### Deployment Steps

1. **Connect to AWS Amplify**
   - Log in to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Click "New app" → "Host web app"
   - Connect your GitHub repository

2. **Configure Build Settings**
   
   Amplify should auto-detect Vite, but verify these settings:

   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: dist
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

3. **Environment Variables** (if needed)
   - Go to "Environment variables" in Amplify console
   - Add any required variables

4. **Deploy**
   - Click "Save and deploy"
   - Amplify will build and deploy your app
   - Your site will be live at: `https://[app-id].amplifyapp.com`

5. **Custom Domain** (Optional)
   - In Amplify console, go to "Domain management"
   - Add your custom domain (e.g., philbuildsthings.com)
   - Follow DNS configuration steps

### Continuous Deployment

Once connected, Amplify automatically deploys:
- **Main branch** → Production environment
- **Pull requests** → Preview environments (can be configured)

## 🎨 Customization

### Updating Content

- **Home Page**: Edit `src/pages/Home.tsx`
- **Resume**: Edit `src/pages/Resume.tsx`
- **Navigation**: Edit `src/components/Navbar.tsx`
- **Footer**: Edit `src/components/Footer.tsx`

### Styling

- **Colors**: Modify `tailwind.config.js` to change color scheme
- **Fonts**: Update Google Fonts link in `index.html`
- **Global Styles**: Edit `src/index.css`

### Adding New Pages

1. Create new component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/components/Navbar.tsx`

## 📝 Content Guidelines

This site follows the structure and quality of [phil-takes-photos](https://github.com/philwilt/phil-takes-photos) but focuses on:

- Software engineering projects
- AI and agentic systems
- Maker lab work (CNC, laser, 3D printing)
- Technical architecture

## 🔗 Related Projects

- [Phil Takes Photos](https://philtakesphotos.com) - Creative photography and visual storytelling

## 📄 License

Copyright © 2025 Phil Wilt. All rights reserved.

## 🤝 Contributing

This is a personal portfolio site. If you find bugs or have suggestions, feel free to open an issue.

## 📧 Contact

- GitHub: [@philwilt](https://github.com/philwilt)
- Email: phil@example.com
- Portfolio: [philbuildsthings.com](https://philbuildsthings.com)

---

Built with ❤️ using Vite, React, and Tailwind CSS
