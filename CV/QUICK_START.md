# 🎯 QUICK START GUIDE - Your Restructured Website

## 🚀 Get Started in 3 Steps

### Step 1: Install & Run
```bash
npm install
npm run dev
```
✅ Open http://localhost:5173

### Step 2: Test Languages
- Click language selector in header
- Switch between: **English** | **Deutsch** | **فارسی**
- Watch all text translate instantly!

### Step 3: Explore Sections
- ✨ **About** - Profile with image placeholder
- 📚 **Education** - Searchable course table (with professors!)
- 🔬 **Projects** - Research work
- 💼 **Experience** - Professional timeline
- 💻 **Skills** - Technical proficiencies
- 🗣️ **Languages** - Persian, English, German
- 📝 **Publications** - Papers and conferences
- 📧 **Contact** - Professional profiles

---

## 📁 Where Everything Lives

### 🌍 Translations
```
/src/locale/
├── en.json  ← Edit English text here
├── de.json  ← Edit German text here
└── fa.json  ← Edit Persian text here
```

### 📊 Data Files
```
/src/data/
├── skills_en.json  ← English skills
├── skills_de.json  ← German skills
└── skills_fa.json  ← Persian skills
```

### ⚛️ Components
```
/src/sections/
├── header.jsx     ← Navigation bar
├── hero.jsx       ← About section
└── education.jsx  ← Course table
```

### 🎨 Styles
```
/src/sections/styles/
├── header.module.css
├── hero.module.css
└── education.module.css
```

---

## 🎨 Customize in 5 Minutes

### 1️⃣ Change Your Name
```json
// /src/locale/en.json
{
  "hero": {
    "name": "Your Name Here"
  }
}
```

### 2️⃣ Update Skills
```json
// /src/data/skills_en.json
{
  "skills": [
    { "name": "Python", "level": 95 }
  ]
}
```

### 3️⃣ Add Your Photo
```jsx
// /src/sections/hero.jsx
// Replace:
<div className={styles.avatar}>MY</div>

// With:
<img src="/images/profile.png" alt="Your Name" className={styles.avatar} />
```

### 4️⃣ Change Colors
```css
/* /src/index.css */
:root {
  --primary-color: #1967d2;  /* Change this! */
}
```

### 5️⃣ Edit Courses
```jsx
// /src/sections/education.jsx
// Find the courses array and update:
const courses = [
  { name: 'Course Name', unit: 3, mark: 20, professor: 'Dr. Name' }
];
```

---

## 🌐 Language Switching

### How It Works
1. User clicks language dropdown in header
2. `LanguageContext` updates current language
3. All components re-render with new translations
4. Data files switch (skills_en → skills_de, etc.)

### Add New Language
```javascript
// 1. Create /src/locale/es.json (Spanish)
{
  "nav": { "about": "Acerca de" }
}

// 2. Import in LanguageContext.jsx
import es from './es.json';
const translations = { en, de, fa, es };

// 3. Add to selector in header.jsx
<option value="es">Español</option>
```

---

## 📝 Common Tasks

### Update a Translation
```json
// /src/locale/en.json
{
  "education": {
    "title": "My Education"  ← Change this
  }
}
```

### Add a New Skill
```json
// /src/data/skills_en.json
{
  "category": "Programming Languages",
  "skills": [
    { "name": "Rust", "level": 75 }  ← Add this
  ]
}
```

### Modify a Style
```css
/* /src/sections/styles/hero.module.css */
.name {
  font-size: 3rem;  ← Change this
  color: #ff0000;   ← Add this
}
```

### Add a Course
```jsx
// /src/sections/education.jsx
const courses = [
  // Add your new course here:
  { 
    name: 'Advanced AI', 
    unit: 4, 
    mark: 19.5, 
    professor: 'Dr. Smith' 
  },
  // ... existing courses
];
```

---

## 🔍 File Quick Reference

| What You Want | File to Edit |
|---------------|--------------|
| Change text | `/src/locale/*.json` |
| Update skills | `/src/data/skills_*.json` |
| Add courses | `/src/sections/education.jsx` |
| Change colors | `/src/index.css` |
| Modify layout | `/src/sections/styles/*.module.css` |
| Add section | Create new file in `/src/sections/` |
| Update photo | Replace avatar in `/src/sections/hero.jsx` |

---

## 🎓 Features You Have

### ✅ Multilingual (3 Languages)
- 🇬🇧 English
- 🇩🇪 German
- 🇮🇷 Persian

### ✅ 8 Complete Sections
1. About Me
2. Education (with 41 courses > 17)
3. Projects & Research
4. Experience
5. Technical Skills
6. **Languages (NEW!)**
7. Publications
8. Contact

### ✅ Special Features
- 🔍 Searchable course table
- 👨‍🏫 Professor names for each course
- ⭐ Visual highlights for perfect scores
- 📊 Skill progress bars
- 📱 Fully responsive
- 🎨 Professional Google Scholar style
- 🖼️ Profile image ready

---

## 📚 Documentation

### For Beginners
👉 Start here: **README.md**

### For Developers
👉 Read this: **IMPLEMENTATION_GUIDE.md**

### For Overview
👉 Check out: **PROJECT_SUMMARY.md**

### For Status
👉 See this: **RESTRUCTURE_STATUS.md**

### For Quick Tasks
👉 You're here: **QUICK_START.md** ✨

---

## 🚨 Troubleshooting

### Website Won't Start?
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
npm run dev
```

### Translations Not Showing?
- Check file exists in `/src/locale/`
- Check key spelling matches exactly
- Make sure using `t('section.key')` format

### Styles Not Applying?
- Check CSS module imported: `import styles from './styles/file.module.css'`
- Check using `className={styles.className}`
- Check for typos in class names

### Language Not Switching?
- Check LanguageProvider wraps App in `main.jsx`
- Check language selector in header has correct options
- Try refreshing the page

---

## 🎯 Next Actions

### Immediate (Today!)
- [ ] Run `npm run dev` and explore
- [ ] Test language switching
- [ ] Search the course table
- [ ] Check mobile responsiveness

### This Week
- [ ] Add your profile photo
- [ ] Update contact email
- [ ] Customize any text
- [ ] Review all sections

### Before Deployment
- [ ] Test all 3 languages
- [ ] Check all links work
- [ ] Verify courses are correct
- [ ] Test on mobile device
- [ ] Get feedback from friend

### Deploy!
```bash
npm run build
npm run deploy
```

---

## 💡 Pro Tips

### 1. Test in Multiple Browsers
- Chrome
- Firefox
- Safari
- Edge

### 2. Use Browser DevTools
- Right-click → Inspect
- Toggle device toolbar for mobile view
- Check console for errors

### 3. Keep Backups
```bash
git add .
git commit -m "My changes"
git push
```

### 4. Preview Before Deploy
```bash
npm run build
npm run preview
```

### 5. Share for Feedback
- Send to friends/colleagues
- Ask for language accuracy
- Check on different devices

---

## 🎨 Design Tips

### Color Scheme
Current: Google Scholar style
- Primary: `#1967d2` (blue)
- Text: `#202124` (dark gray)
- Secondary: `#5f6368` (gray)

Want different? Edit `/src/index.css`

### Typography
Current: Roboto
Want different? Edit `/src/index.css`

### Spacing
Current: Consistent 8px grid
Want different? Edit CSS module files

---

## 🌟 Best Practices

### ✅ DO
- Test after every change
- Keep translations consistent
- Use CSS variables for colors
- Commit changes regularly
- Write clear commit messages

### ❌ DON'T
- Edit multiple files at once
- Change structure without backup
- Skip testing languages
- Forget to build before deploy
- Delete original files

---

## 📊 Performance

Your website is:
- ⚡ Fast (Vite build)
- 📦 Small (optimized bundles)
- 🎨 Smooth (CSS animations)
- 📱 Responsive (mobile-first)
- ♿ Accessible (semantic HTML)

---

## 🎉 You're Ready!

Everything you need is here:
- ✅ Professional structure
- ✅ Three languages
- ✅ Beautiful design
- ✅ Easy to maintain
- ✅ Well documented

**Go make it yours!** 💪

---

## 📞 Commands Cheatsheet

```bash
# Start development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy

# Install dependencies
npm install

# Check for errors
npm run lint
```

---

**Made with ❤️ for Mehrnoosh Yaghoubi Kalurazi**

🚀 **Happy coding!** ✨
