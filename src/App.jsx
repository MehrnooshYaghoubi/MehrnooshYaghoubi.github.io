import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Header from './sections/header';
import Hero from './sections/hero';
import Education from './sections/education';

// Import your other existing Material UI sections
import { ProjectsSection } from './app/components/ProjectsSection';
import { ExperienceSection } from './app/components/ExperienceSection';
import { SkillsSection } from './app/components/SkillsSection';
import { LanguagesSection } from './app/components/LanguagesSection';
import { PublicationsSection } from './app/components/PublicationsSection';
import { ContactSection } from './app/components/ContactSection';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1967d2',
    },
    secondary: {
      main: '#5f6368',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#202124',
      secondary: '#5f6368',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 600 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 4,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
        {/* New structure with CSS Modules and Localization */}
        <Header />
        <Hero />
        <Education />
        
        {/* Existing Material UI sections (to be converted) */}
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <LanguagesSection />
        <PublicationsSection />
        <ContactSection />
      </div>
    </ThemeProvider>
  );
}
