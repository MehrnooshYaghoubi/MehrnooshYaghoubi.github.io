import { Box, Container, Typography, Grid, Paper, LinearProgress } from '@mui/material';
import { motion } from 'motion/react';
import LanguageIcon from '@mui/icons-material/Language';

const languages = [
  { name: 'Persian (Farsi)', level: 100, proficiency: 'Native' },
  { name: 'English', level: 90, proficiency: 'Fluent' },
  { name: 'German', level: 70, proficiency: 'Intermediate' },
];

export function LanguagesSection() {
  return (
    <Box id="languages" sx={{ py: 8, backgroundColor: '#fafafa', borderTop: '1px solid #e0e0e0' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              mb: 2,
              color: '#202124',
            }}
          >
            Languages
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mb: 4,
              color: '#5f6368',
              maxWidth: '800px',
            }}
          >
            Multilingual proficiency enabling effective communication and collaboration in international
            research environments.
          </Typography>

          <Grid container spacing={3}>
            {languages.map((language, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: '100%',
                      border: '1px solid #dadce0',
                      transition: 'all 0.2s',
                      backgroundColor: '#ffffff',
                      '&:hover': {
                        boxShadow: '0 1px 3px 1px rgba(60,64,67,.15)',
                        borderColor: '#d2e3fc',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box
                        sx={{
                          color: '#1967d2',
                          mr: 1.5,
                        }}
                      >
                        <LanguageIcon />
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#202124', fontSize: '1.1rem' }}>
                        {language.name}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{
                        mb: 2,
                        color: '#5f6368',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        fontSize: '0.8rem',
                      }}
                    >
                      {language.proficiency}
                    </Typography>

                    <Box>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          mb: 0.5,
                        }}
                      >
                        <Typography variant="body2" sx={{ fontWeight: 500, color: '#202124' }}>
                          Proficiency
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 500, color: '#5f6368' }}>
                          {language.level}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={language.level}
                        sx={{
                          height: 8,
                          borderRadius: 3,
                          backgroundColor: '#e0e0e0',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 3,
                            backgroundColor: '#1967d2',
                          },
                        }}
                      />
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
