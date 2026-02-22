import { useState } from 'react';
import { useLanguage } from '../locale/LanguageContext';
import styles from './styles/header.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: t('nav.about'), id: 'about' },
    { label: t('nav.education'), id: 'education' },
    { label: t('nav.projects'), id: 'projects' },
    { label: t('nav.experience'), id: 'experience' },
    { label: t('nav.skills'), id: 'skills' },
    { label: t('nav.languages'), id: 'languages' },
    { label: t('nav.publications'), id: 'publications' },
    { label: t('nav.contact'), id: 'contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileOpen(false);
    }
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.toolbar}>
          <div className={styles.logo} onClick={() => scrollToSection('about')}>
            {t('hero.name')}
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <nav className={styles.nav}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={styles.navButton}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <select
              className={styles.languageSelector}
              value={language}
              onChange={handleLanguageChange}
            >
              <option value="en">English</option>
              <option value="de">Deutsch</option>
              <option value="fa">فارسی</option>
            </select>

            <button
              className={styles.menuButton}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="menu"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`${styles.overlay} ${mobileOpen ? styles.open : ''}`}
        onClick={() => setMobileOpen(false)}
      />
      <div className={`${styles.drawer} ${mobileOpen ? styles.open : ''}`}>
        <div className={styles.drawerHeader}>
          <button className={styles.closeButton} onClick={() => setMobileOpen(false)}>
            <CloseIcon />
          </button>
        </div>
        <nav>
          <ul className={styles.drawerNav}>
            {navItems.map((item) => (
              <li
                key={item.id}
                className={styles.drawerNavItem}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Spacer */}
      <div style={{ height: '64px' }} />
    </>
  );
}
