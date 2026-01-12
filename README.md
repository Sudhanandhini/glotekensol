# Emuo - Construction Company Website

A professional, modern construction company website built with React, Vite, Tailwind CSS, and React Router. Features a complete multi-page layout with separate pages for Home, About, Services, Gallery, Careers, and Contact.

## 🌟 Features

### Pages
- **Home** - Hero section, services preview, about preview, stats, testimonials
- **About** - Company history, mission & vision, team members, why choose us
- **Services** - Complete service listings, service details, process workflow
- **Gallery** - Project portfolio with category filters and image modal
- **Careers** - Job listings, application form, benefits, contact information
- **Contact** - Contact form, location map, FAQ section

### Design Features
- ✨ Modern and professional design
- 📱 Fully responsive layout (mobile, tablet, desktop)
- 🎨 Consistent orange (#FF6B35) and navy blue (#001B3D) color scheme
- ⚡ Fast performance with Vite
- 🎭 Smooth animations and transitions
- 🧭 React Router for seamless navigation
- 📝 Multiple contact forms with validation
- 🖼️ Image gallery with category filtering
- 💼 Career application system
- 📍 Integrated Google Maps

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Lucide React** - Icon library

## 📦 Installation

1. **Extract the project folder**

2. **Navigate to project directory**
```bash
cd construction-website
```

3. **Install dependencies**
```bash
npm install
```

4. **Start the development server**
```bash
npm run dev
```

5. **Open your browser**
The app will automatically open at `http://localhost:3000`

## 🚀 Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` directory.

## 👁️ Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
construction-website/
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation header with mobile menu
│   │   └── Footer.jsx       # Footer with links and contact info
│   ├── pages/
│   │   ├── Home.jsx         # Home page
│   │   ├── About.jsx        # About us page
│   │   ├── Services.jsx     # Services page
│   │   ├── Gallery.jsx      # Gallery/Projects page
│   │   ├── Careers.jsx      # Careers/Jobs page
│   │   └── Contact.jsx      # Contact page
│   ├── assets/              # Static assets
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles with Tailwind
├── public/                  # Public assets
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── README.md                # Documentation
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change theme colors:

```javascript
colors: {
  primary: {
    DEFAULT: '#FF6B35',  // Orange - Main brand color
    dark: '#ff5722',     // Darker orange for hovers
  },
  secondary: {
    DEFAULT: '#001B3D',  // Navy blue - Secondary brand color
    light: '#002447',    // Lighter navy for variations
  }
}
```

### Content

All page content can be edited in their respective files:
- Home content: `src/pages/Home.jsx`
- About content: `src/pages/About.jsx`
- Services: `src/pages/Services.jsx`
- Gallery projects: `src/pages/Gallery.jsx`
- Job listings: `src/pages/Careers.jsx`
- Contact info: `src/pages/Contact.jsx`

### Navigation

Edit navigation links in `src/components/Header.jsx`

### Footer

Customize footer content in `src/components/Footer.jsx`

## 📄 Page Details

### Home Page
- Hero section with call-to-action
- Quick services preview cards
- About company section with stats
- Service preview grid
- Client testimonials
- Stats counter section

### About Page
- Company introduction
- Mission & vision statements
- Why choose us section
- Team members showcase
- Experience timeline
- Statistics

### Services Page
- Complete service grid (9 services)
- Service features and descriptions
- Process workflow (4 steps)
- Why choose our services
- Call-to-action

### Gallery Page
- Project portfolio grid
- Category filter (All, Residential, Commercial, Industrial, Renovation)
- Image modal for detailed view
- Project descriptions
- Statistics section

### Careers Page
- Job openings list
- Job application form with file upload
- Benefits showcase
- Contact information section
- Responsive form fields

### Contact Page
- Contact information cards (Phone, Email, Address, Hours)
- Contact form with validation
- Google Maps integration
- FAQ section
- Call-to-action

## 🎯 Key Components

### Header Component
- Responsive navigation
- Mobile hamburger menu
- Active link highlighting
- Sticky on scroll
- Social media links
- Contact information bar

### Footer Component
- Company information
- Quick links
- Services list
- Contact details
- Location map placeholder
- Social media icons

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)
- Large screens (1280px and up)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint (if configured)

## 🌐 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### cPanel
1. Run `npm run build`
2. Upload contents of `dist` folder to your hosting
3. Configure `.htaccess` for client-side routing

## 📝 Environment Variables

Create a `.env` file for environment-specific variables:

```env
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=your_email
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## 🤝 Support

For support, contact: your-email@example.com

## 📄 License

MIT License - feel free to use this project for your construction business!

## 🙏 Credits

- Images: Unsplash
- Icons: Lucide React
- Fonts: Google Fonts (Inter)

---

**Built with ❤️ for Construction Companies**
