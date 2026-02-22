import { Box, Container, Typography, Paper, Stack, IconButton, Link, Divider } from '@mui/material';
import { motion } from 'motion/react';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolIcon from '@mui/icons-material/School';

export function ContactSection() {
  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        backgroundColor: '#fafafa',
        borderTop: '1px solid #e0e0e0',
      }}
    >
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
            Contact
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mb: 4,
              color: '#5f6368',
              maxWidth: '800px',
            }}
          >
            I'm actively seeking opportunities for Master's and PhD programs in Machine Learning and
            AI. Feel free to reach out for collaborations, research discussions, or inquiries.
          </Typography>

          <Paper
            elevation={0}
            sx={{
              p: 4,
              border: '1px solid #dadce0',
              backgroundColor: '#ffffff',
              maxWidth: '700px',
            }}
          >
            <Stack spacing={3}>
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <EmailIcon sx={{ fontSize: 20, mr: 1, color: '#5f6368' }} />
                  <Typography variant="body2" sx={{ color: '#5f6368', fontWeight: 600 }}>
                    Email
                  </Typography>
                </Box>
                <Link
                  href="mailto:mehrnoosh.yaghoubi@email.com"
                  underline="hover"
                  sx={{
                    color: '#1967d2',
                    fontSize: '1rem',
                    fontWeight: 500,
                  }}
                >
                  mehrnoosh.yaghoubi@email.com
                </Link>
              </Box>

              <Divider />

              <Box>
                <Typography
                  variant="body2"
                  sx={{ mb: 2, color: '#5f6368', fontWeight: 600 }}
                >
                  Professional Profiles
                </Typography>

                <Stack direction="row" spacing={2}>
                  <IconButton
                    sx={{
                      border: '1px solid #dadce0',
                      color: '#5f6368',
                      '&:hover': {
                        backgroundColor: '#f8f9fa',
                        borderColor: '#1967d2',
                        color: '#1967d2',
                      },
                      transition: 'all 0.2s',
                    }}
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon />
                  </IconButton>

                  <IconButton
                    sx={{
                      border: '1px solid #dadce0',
                      color: '#5f6368',
                      '&:hover': {
                        backgroundColor: '#f8f9fa',
                        borderColor: '#1967d2',
                        color: '#1967d2',
                      },
                      transition: 'all 0.2s',
                    }}
                    aria-label="GitHub"
                  >
                    <GitHubIcon />
                  </IconButton>

                  <IconButton
                    sx={{
                      border: '1px solid #dadce0',
                      color: '#5f6368',
                      '&:hover': {
                        backgroundColor: '#f8f9fa',
                        borderColor: '#1967d2',
                        color: '#1967d2',
                      },
                      transition: 'all 0.2s',
                    }}
                    aria-label="Google Scholar"
                  >
                    <SchoolIcon />
                  </IconButton>
                </Stack>
              </Box>
            </Stack>
          </Paper>

          <Typography
            variant="body2"
            sx={{ textAlign: 'left', mt: 6, color: '#5f6368' }}
          >
            © 2026 Mehrnoosh Yaghoubi Kalurazi. All rights reserved.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}