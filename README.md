# Mehrnoosh Yaghoubi Kalurazi - Academic Portfolio

A modern, professional academic CV website built with React, Material UI, and multilingual support. This portfolio showcases academic achievements, research projects, and professional experience with a clean, Google Scholar-inspired design.

## 🚀 Live Demo

Visit the live site: [MehrnooshYaghoubi.github.io](https://MehrnooshYaghoubi.github.io)

## ✨ Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Multilingual Support**: Complete translations in English, German, and Persian (Farsi)
- **Interactive Components**: Smooth scrolling navigation, searchable course table, and hover effects
- **Professional UI**: Clean, academic design inspired by Google Scholar
- **Performance Optimized**: Fast loading times and smooth animations
- **Accessibility**: Semantic HTML and ARIA labels for better accessibility

## 🛠️ Technologies Used

### Frontend Framework
- **React 18** - Modern UI library for building interactive user interfaces
- **React DOM** - React rendering for web applications

### Styling
- **Material UI (MUI) v6** - Comprehensive React component library
- **CSS Modules** - Scoped and modular CSS styling
- **Emotion** - CSS-in-JS library for Material UI styling

### Animation
- **Motion (Framer Motion)** - Production-ready animation library for React

### Icons
- **@mui/icons-material** - Material Design icon components
- **Lucide React** - Beautiful, customizable icon set

### Build Tool
- **Vite** - Next-generation frontend build tool for faster development

### Code Quality
- **ESLint** - JavaScript linting with React-specific rules
- **React Hooks Plugin** - ESLint plugin for React Hooks best practices
- **React Refresh Plugin** - Fast Refresh for instant feedback during development

### Deployment
- **gh-pages** - Deploy React app to GitHub Pages

## 📁 Project Structure

```
MehrnooshYaghoubi.github.io/
├── public/                     # Public assets
│   ├── images/                # Image assets
│   │   ├── bg.png
│   │   ├── footer.png
│   │   ├── logo.svg
│   │   ├── profile.png
│   │   ├── Star.svg
│   │   ├── title.png
│   │   ├── Vector.png
│   │   └── vite.svg
│   ├── fonts/                 # Variable fonts
│   │   ├── Chivo_Mono/
│   │   ├── Kode_Mono/
│   │   ├── Montserrat/
│   │   └── Vazirmatn/
│   └── icons/                 # Social media and tech icons
│
├── src/
│   ├── sections/              # React section components
│   │   ├── header.jsx        # Navigation header with language selector
│   │   ├── hero.jsx          # Hero section with profile
│   │   ├── education.jsx     # Education and courses table
│   │   ├── projects.jsx      # Projects and research
│   │   ├── experience.jsx    # Professional experience
│   │   ├── resume.jsx        # Skills display
│   │   ├── languages.jsx     # Language proficiencies
│   │   ├── publications.jsx  # Publications and conferences
│   │   ├── footer.jsx        # Contact and social links
│   │   └── styles/           # CSS Modules for sections
│   │       ├── header.module.css
│   │       ├── hero.module.css
│   │       ├── education.module.css
│   │       └── ...
│   │
│   ├── locale/               # Internationalization (i18n)
│   │   ├── LanguageContext.jsx
│   │   ├── en.json          # English translations
│   │   ├── de.json          # German translations
│   │   └── fa.json          # Persian (Farsi) translations
│   │
│   ├── data/                # JSON data files
│   │   ├── skills_en.json
│   │   ├── skills_de.json
│   │   └── skills_fa.json
│   │
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles and font declarations
│
├── index.html               # HTML entry point
├── package.json            # Project metadata and dependencies
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint configuration
├── tailwind.config.js      # Tailwind CSS configuration (if used)
├── .gitignore             # Git ignore rules
├── LICENSE                # MIT License
└── README.md              # Project documentation (this file)
```

## 🎨 Design Philosophy

The website follows a professional academic design inspired by Google Scholar and official university websites:

- **Clean Typography**: Uses Roboto font family for maximum readability
- **Neutral Color Palette**: Google-inspired colors (#1967d2 blue, #5f6368 gray, #202124 dark)
- **Subtle Interactions**: Hover effects and smooth transitions
- **Content-First**: Emphasis on academic achievements and research
- **Visual Hierarchy**: Clear section separations with consistent spacing

## 🌍 Multilingual Support

The website supports three languages:

1. **English (en)** - Default language
2. **German (de)** - Deutsch
3. **Persian (fa)** - فارسی

Language selection is available in the header navigation and persists across sections.

## 📊 Key Sections

### 1. About Me (Hero)
- Profile image placeholder
- Name and title
- Research specializations
- Academic goals and publication targets

### 2. Education
- Degree information
- GPA and statistics
- Searchable course table (49 courses, filtered to show grades > 17)
- Professor names for each course
- Visual highlights for perfect scores (20/20)

### 3. Projects & Research
- Research project cards
- Methods and technologies used
- Project outcomes

### 4. Experience
- Professional timeline
- Research and teaching roles
- Key achievements

### 5. Technical Skills
- Programming languages (Python, Java, C++, etc.)
- ML/AI frameworks (TensorFlow, PyTorch, etc.)
- Data tools and databases
- Development tools

### 6. Languages
- Persian (Native)
- English (Fluent)
- German (Intermediate)

### 7. Publications & Conferences
- Research papers (status: under review, in progress)
- Target conferences (CVPR, ICCV, NeurIPS)

### 8. Contact
- Email address
- Professional profile links (LinkedIn, GitHub, Google Scholar)

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/pnpm/yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MehrnooshYaghoubi/MehrnooshYaghoubi.github.io.git
cd MehrnooshYaghoubi.github.io
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
# or
yarn install
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

Create a production build:
```bash
npm run build
```

### Deploy

Deploy to GitHub Pages:
```bash
npm run deploy
```

## 📝 Customization

### Adding/Modifying Translations

Edit the JSON files in `/src/locale/`:
- `en.json` for English
- `de.json` for German
- `fa.json` for Persian

### Updating Skills

Modify the JSON files in `/src/data/`:
- `skills_en.json`
- `skills_de.json`
- `skills_fa.json`

### Styling Changes

Each section has its own CSS module in `/src/sections/styles/`. Modify the appropriate `.module.css` file to change styles.

### Adding New Sections

1. Create a new component in `/src/sections/`
2. Create corresponding CSS module in `/src/sections/styles/`
3. Add translations to locale JSON files
4. Import and use in `App.jsx`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Mehrnoosh Yaghoubi Kalurazi**
- Email: mehrnoosh.yaghoubi@email.com
- GitHub: [@MehrnooshYaghoubi](https://github.com/MehrnooshYaghoubi)

## 🙏 Acknowledgments

- Material UI for the comprehensive component library
- Motion (Framer Motion) for smooth animations
- The React community for excellent tools and resources
- Google Scholar for design inspiration

---

© 2026 Mehrnoosh Yaghoubi Kalurazi. All rights reserved.
