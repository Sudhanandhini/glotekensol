# 🚀 Quick Start Guide - Emuo Construction Website

## ⚡ Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
cd construction-website
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open Browser
Visit: http://localhost:3000

---

## 📄 Pages Available

✅ **Home** - http://localhost:3000/
✅ **About** - http://localhost:3000/about
✅ **Services** - http://localhost:3000/services
✅ **Gallery** - http://localhost:3000/gallery
✅ **Careers** - http://localhost:3000/careers
✅ **Contact** - http://localhost:3000/contact

---

## 🎨 Theme Colors

- **Orange**: #FF6B35 (Primary)
- **Navy Blue**: #001B3D (Secondary)

---

## 📁 Key Files to Edit

### Content
- `src/pages/Home.jsx` - Home page content
- `src/pages/About.jsx` - About page content
- `src/pages/Services.jsx` - Services listing
- `src/pages/Gallery.jsx` - Project gallery
- `src/pages/Careers.jsx` - Job listings
- `src/pages/Contact.jsx` - Contact form

### Layout
- `src/components/Header.jsx` - Navigation menu
- `src/components/Footer.jsx` - Footer section

### Styling
- `tailwind.config.js` - Theme colors
- `src/index.css` - Global styles

---

## 🔧 Common Tasks

### Change Logo/Company Name
Edit `src/components/Header.jsx` and `src/components/Footer.jsx`

### Update Contact Information
Edit `src/components/Header.jsx` (top bar) and `src/pages/Contact.jsx`

### Add New Service
Edit `src/pages/Services.jsx` - add to services array

### Add New Job Opening
Edit `src/pages/Careers.jsx` - add to jobOpenings array

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    DEFAULT: '#FF6B35',  // Your primary color
  },
  secondary: {
    DEFAULT: '#001B3D',  // Your secondary color
  }
}
```

---

## 🚀 Build for Production

```bash
npm run build
```

Files will be in `dist` folder - ready to upload to your hosting!

---

## 📱 Fully Responsive

✅ Mobile (320px+)
✅ Tablet (768px+)
✅ Desktop (1024px+)
✅ Large screens (1280px+)

---

## 🎯 Features Included

✅ Multi-page website with routing
✅ Responsive navigation with mobile menu
✅ Contact forms with validation
✅ Image gallery with filters
✅ Career application form with file upload
✅ Google Maps integration
✅ FAQ section
✅ Testimonials
✅ Stats counters
✅ Social media links
✅ Smooth animations

---

## 💡 Tips

1. **Images**: Replace Unsplash URLs with your own images
2. **Text**: Update all placeholder text with your company information
3. **Forms**: Connect forms to your backend API or email service
4. **Maps**: Update Google Maps embed with your location
5. **SEO**: Update meta tags in `index.html`

---

## 📞 Need Help?

Check the full README.md for detailed documentation!

---

**Happy Building! 🏗️**
