# Nguyen Van Anh | Backend Developer Portfolio

A modern, responsive portfolio website built with React and Vite, showcasing my skills as a Backend Developer specializing in JavaScript, Node.js, and Express.

## 🌟 Features

- **Modern Design**: Clean, professional interface with dark/light theme support
- **Responsive Layout**: Optimized for all device sizes and screen resolutions
- **Interactive Components**: Smooth animations and transitions using Tailwind CSS
- **Contact Form**: Integrated contact form with EmailJS for direct communication
- **Performance Optimized**: Built with Vite for fast development and optimized builds
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🚀 Tech Stack

### Frontend

- **React 19.1.1** - Modern React with latest features
- **Vite 7.1.2** - Fast build tool and development server
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **React Router DOM 7.8.0** - Client-side routing

### Additional Libraries

- **EmailJS** - Contact form integration
- **React Hot Toast** - Toast notifications
- **clsx & tailwind-merge** - Conditional class management

### Development Tools

- **ESLint 9.32.0** - Code linting with React hooks support
- **PostCSS & Autoprefixer** - CSS processing
- **Vite Dev Server** - Hot module replacement

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager
- Modern web browser

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd va-react-portfolio-web
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   # Create a .env file in the root directory
   # Add your EmailJS configuration
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## 🏃‍♂️ Running the Project

### Development Mode

```bash
npm run dev
# or
yarn dev
```

The application will start at `http://localhost:3000` with hot reload enabled.

### Production Build

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

### Linting

```bash
npm run lint
# or
yarn lint
```

## 📁 Project Structure

```
va-react-portfolio-web/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions
│   ├── styles/           # CSS styles and theme configuration
│   ├── assets/           # Images, icons, and other assets
│   ├── App.jsx           # Main App component
│   └── main.jsx          # Application entry point
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.js        # Vite configuration
└── README.md            # Project documentation
```

## 🎨 Customization

### Theme Configuration

The project uses CSS custom properties for theming. You can customize colors, spacing, and other design tokens in:

- `src/styles/` - CSS custom properties and theme variables
- `tailwind.config.js` - Tailwind CSS configuration

### Component Customization

- All React components are located in `src/components/`
- Components use Tailwind CSS for styling
- Custom hooks are available in `src/hooks/`

### Adding New Sections

1. Create new components in `src/components/`
2. Import and use them in `App.jsx`
3. Add routing if needed using React Router

## 📧 Contact Form Setup

To enable the contact form functionality:

1. **Create an EmailJS account** at [emailjs.com](https://www.emailjs.com/)
2. **Set up a service** (Gmail, Outlook, etc.)
3. **Create an email template**
4. **Add your credentials** to the `.env` file
5. **Update the contact form component** with your template variables

## 🚀 Deployment

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Vite configuration
3. Add environment variables in Vercel dashboard

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run build && npm run deploy`

## 🔧 Configuration Files

- **`vite.config.js`** - Vite configuration with path aliases
- **`tailwind.config.js`** - Tailwind CSS customization
- **`eslint.config.js`** - ESLint rules and configuration
- **`postcss.config.js`** - PostCSS plugins configuration

## 📱 Browser Support

This portfolio supports all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

If you'd like to contribute to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

**Nguyen Van Anh**

- Email: [anhnguyenvan280105@gmail.com](mailto:your-email@example.com)

---

⭐ If you like this project, please consider giving it a star on GitHub!

---

_Built with ❤️ using React and Vite_
