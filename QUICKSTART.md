# Quick Start Guide - Phil Builds Stuff

## 🚀 Getting Started in 3 Steps

### Step 1: Install Dependencies
```bash
cd philbuildsstuff
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

Your site will be live at: http://localhost:3000

### Step 3: Build for Production
```bash
npm run build
```

The production build will be in the `dist/` folder.

## 📝 Next Steps

1. **Customize Content**
   - Update resume information in `src/pages/Resume.tsx`
   - Modify hero text in `src/components/Hero.tsx`
   - Change contact email in `src/components/Footer.tsx`

2. **Update Branding**
   - Replace placeholder logo in `public/vite.svg`
   - Adjust colors in `tailwind.config.js`

3. **Deploy to AWS Amplify**
   - See full deployment instructions in README.md
   - Connect your GitHub repo to Amplify
   - It will auto-deploy on every push!

## 🎨 Customization Tips

- **Colors**: Edit `tailwind.config.js` primary color values
- **Fonts**: Change Google Fonts import in `index.html`
- **Layout**: All pages are in `src/pages/`
- **Components**: Reusable UI in `src/components/`

## 📦 What's Included

✅ Vite + React + TypeScript
✅ Tailwind CSS for styling
✅ React Router for navigation
✅ ESLint + Prettier for code quality
✅ AWS Amplify deployment config
✅ Responsive design (mobile-friendly)
✅ Dark mode by default
✅ Production-ready structure

## 🆘 Troubleshooting

**Port already in use?**
```bash
npm run dev -- --port 3001
```

**Dependencies not installing?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**
```bash
npm run lint
npm run format
```

## 📚 Learn More

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [AWS Amplify Hosting](https://docs.amplify.aws)

---

Happy Building! 🛠️
