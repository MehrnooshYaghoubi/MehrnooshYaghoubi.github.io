# Implementation Guide - Project Restructure

## Overview

This document provides a comprehensive guide to the restructured Mehrnoosh Yaghoubi CV website. The project has been reorganized to follow a clear, maintainable structure with localization support, CSS Modules, and organized data files.

## ✅ Completed Changes

### 1. Localization System ✓

**Created Files:**
- `/src/locale/LanguageContext.jsx` - Context provider for language management
- `/src/locale/en.json` - English translations
- `/src/locale/de.json` - German translations
- `/src/locale/fa.json` - Persian (Farsi) translations

**Features:**
- Three-language support (English, German, Persian)
- Context-based translation system
- Easy to extend with new languages
- Dynamic language switching

**Usage Example:**
```javascript
import { useLanguage } from '../locale/LanguageContext';

function MyComponent() {
  const { t, language, setLanguage } = useLanguage();
  
  return (
    <div>
      <h1>{t('hero.name')}</h1>
      <button onClick={() => setLanguage('de')}>Deutsch</button>
    </div>
  );
}
```

### 2. Data Separation ✓

**Created Files:**
- `/src/data/skills_en.json` - English skills data
- `/src/data/skills_de.json` - German skills data
- `/src/data/skills_fa.json` - Persian skills data

**Structure:**
```json
[
  {
    "category": "Programming Languages",
    "icon": "Code",
    "skills": [
      { "name": "Python", "level": 95 },
      { "name": "Java", "level": 85 }
    ]
  }
]
```

### 3. CSS Modules ✓

**Created Files:**
- `/src/sections/styles/header.module.css`
- `/src/sections/styles/hero.module.css`
- `/src/sections/styles/education.module.css`

**Benefits:**
- Scoped styling prevents conflicts
- Better organization
- Easier maintenance
- Type-safe with CSS Modules

**Usage Example:**
```javascript
import styles from './styles/header.module.css';

function Header() {
  return <header className={styles.header}>...</header>;
}
```

### 4. New Section Components ✓

**Created Files:**
- `/src/sections/header.jsx` - Navigation with language selector
- `/src/sections/hero.jsx` - Hero section with profile
- `/src/sections/education.jsx` - Education with searchable table

**Features:**
- Language-aware components
- CSS Module styling
- Clean separation of concerns

### 5. Entry Points ✓

**Created Files:**
- `/src/main.jsx` - React entry point with LanguageProvider
- `/src/App.jsx` - Main application component
- `/src/index.css` - Global styles and variables

### 6. Documentation ✓

**Created Files:**
- `/README.md` - Comprehensive project documentation
- `/IMPLEMENTATION_GUIDE.md` - This file

## 🔄 Migration Status

### Current State

The project now has a **hybrid structure**:

1. **New Structure** (with localization & CSS Modules):
   - Header (navigation)
   - Hero (about section)
   - Education (with course table)

2. **Existing Structure** (Material UI with inline styles):
   - Projects Section
   - Experience Section
   - Skills Section
   - Languages Section
   - Publications Section
   - Contact Section

### Why Hybrid?

The hybrid approach allows you to:
- **Keep the UI you love** - No visual changes
- **Test the new structure** - See if you like the organization
- **Gradual migration** - Convert sections one by one
- **Maintain functionality** - Everything still works

## 📋 Next Steps (Optional)

If you want to complete the full restructure, here's the remaining work:

### Phase 1: Convert Remaining Sections to CSS Modules

**Files to Create:**
1. `/src/sections/projects.jsx` + `styles/projects.module.css`
2. `/src/sections/experience.jsx` + `styles/experience.module.css`
3. `/src/sections/resume.jsx` + `styles/resume.module.css`
4. `/src/sections/languages.jsx` + `styles/languages.module.css`
5. `/src/sections/publications.jsx` + `styles/publications.module.css`
6. `/src/sections/footer.jsx` + `styles/footer.module.css`

### Phase 2: Extract Data Files

**Files to Create:**
1. `/src/data/projects_en.json`, `projects_de.json`, `projects_fa.json`
2. `/src/data/experience_en.json`, `experience_de.json`, `experience_fa.json`
3. `/src/data/publications_en.json`, `publications_de.json`, `publications_fa.json`
4. `/src/data/languages_en.json`, `languages_de.json`, `languages_fa.json`

### Phase 3: Add Public Assets

**Directories to Create:**
```
/public
├── images/
│   ├── bg.png
│   ├── footer.png
│   ├── logo.svg
│   ├── profile.png (your actual photo)
│   ├── Star.svg
│   └── ...
├── fonts/
│   ├── Chivo_Mono/
│   ├── Kode_Mono/
│   ├── Montserrat/
│   └── Vazirmatn/
└── icons/
    ├── github.svg
    ├── linkedin.svg
    └── ...
```

### Phase 4: Configuration Files

**Files to Create:**
1. `/eslint.config.js` - ESLint rules
2. `/tailwind.config.js` - Tailwind configuration (if using Tailwind)
3. `/.gitignore` - Git ignore patterns
4. `/LICENSE` - MIT License

## 🎯 Benefits of New Structure

### 1. **Multilingual Support**
- Easy to add new languages
- Centralized translation management
- Professional internationalization

### 2. **Better Organization**
- Clear folder structure
- Separated concerns
- Easy to find files

### 3. **Maintainability**
- CSS Modules prevent style conflicts
- Data files separate from logic
- Clear component responsibilities

### 4. **Scalability**
- Easy to add new sections
- Reusable component patterns
- Professional development practices

### 5. **Performance**
- Optimized bundle sizes
- Tree-shaking friendly
- Lazy loading support

## 🚀 How to Use Current Structure

### 1. Development
```bash
npm run dev
```

### 2. Building
```bash
npm run build
```

### 3. Deployment
```bash
npm run deploy
```

### 4. Adding New Translation
1. Open `/src/locale/en.json` (or de.json, fa.json)
2. Add your new key:
```json
{
  "mySection": {
    "title": "My New Section",
    "subtitle": "Description here"
  }
}
```
3. Use in component:
```javascript
const { t } = useLanguage();
<h1>{t('mySection.title')}</h1>
```

### 5. Switching Languages
The language selector in the header allows users to switch between:
- English (en)
- Deutsch (de)
- فارسی (fa)

Language preference persists across page navigation.

## 🔍 File Structure Explanation

### `/src/locale/`
Contains all translation files and the LanguageContext for managing the current language state.

### `/src/sections/`
React components organized by website sections. Each section can have:
- Component file (`.jsx`)
- Style module (`.module.css`)
- Optional data imports

### `/src/sections/styles/`
CSS Module files for section styling. Scoped to avoid conflicts.

### `/src/data/`
JSON data files for dynamic content. Organized by content type and language.

### `/src/app/components/`
Original Material UI components (will be migrated gradually).

## 📝 Code Conventions

### 1. Naming
- Components: PascalCase (`Hero.jsx`)
- CSS Modules: kebab-case (`hero.module.css`)
- Data files: snake_case (`skills_en.json`)

### 2. Imports
```javascript
// React & hooks
import { useState } from 'react';

// Contexts
import { useLanguage } from '../locale/LanguageContext';

// Components
import Header from './header';

// Styles
import styles from './styles/header.module.css';

// Icons
import MenuIcon from '@mui/icons-material/Menu';
```

### 3. Components Structure
```javascript
export default function ComponentName() {
  // 1. Hooks
  const { t } = useLanguage();
  const [state, setState] = useState();

  // 2. Event handlers
  const handleClick = () => {};

  // 3. Render
  return (
    <section className={styles.section}>
      ...
    </section>
  );
}
```

## 🎨 Styling Guidelines

### CSS Variables
Use CSS variables defined in `/src/index.css`:
```css
var(--primary-color)
var(--text-primary)
var(--background-white)
```

### Responsive Design
```css
@media (max-width: 768px) {
  /* Tablet styles */
}

@media (max-width: 480px) {
  /* Mobile styles */
}
```

### BEM-like Naming in CSS Modules
```css
.section { }
.section__title { }
.section__content { }
.section--highlighted { }
```

## 🐛 Troubleshooting

### Issue: Translations not showing
**Solution**: Check that:
1. Translation key exists in all language files
2. Using correct dot notation: `t('section.key')`
3. LanguageProvider wraps App in main.jsx

### Issue: Styles not applying
**Solution**: Check that:
1. CSS Module imported correctly
2. Using `styles.className` not just `className`
3. No typos in class names

### Issue: Language not switching
**Solution**: Check that:
1. Language selector using `setLanguage`
2. Component using `useLanguage` hook
3. LanguageContext provided at root

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Material UI](https://mui.com)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Vite](https://vitejs.dev)

## 🤝 Contributing

To contribute to this project:
1. Follow the established file structure
2. Add translations for all three languages
3. Use CSS Modules for new styles
4. Document significant changes

---

**Last Updated**: February 2026
**Maintained by**: Mehrnoosh Yaghoubi Kalurazi
