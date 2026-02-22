import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { EducationSection } from './components/EducationSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { LanguagesSection } from './components/LanguagesSection';
import { PublicationsSection } from './components/PublicationsSection';
import { ContactSection } from './components/ContactSection';

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
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
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
      <Box sx={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
        <Navigation />
        <Hero />
        <EducationSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <LanguagesSection />
        <PublicationsSection />
        <ContactSection />
      </Box>
    </ThemeProvider>
  );
}