import { Box, Container, Typography, Chip, Stack, Avatar } from '@mui/material';
import { motion } from 'motion/react';
import SchoolIcon from '@mui/icons-material/School';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ArticleIcon from '@mui/icons-material/Article';

export function Hero() {
  return (
    <Box
      id="about"
      sx={{
        pt: 12,
        pb: 8,
        backgroundColor: '#ffffff',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, alignItems: 'flex-start' }}>
            {/* Profile Image */}
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, width: { xs: '100%', md: 'auto' } }}>
              <Avatar
                sx={{
                  width: 200,
                  height: 200,
                  border: '4px solid #e0e0e0',
                  fontSize: '3rem',
                  backgroundColor: '#f5f5f5',
                  color: '#757575',
                }}
              >
                MY
              </Avatar>
            </Box>

            {/* Content */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2rem', md: '2.75rem' },
                  fontWeight: 600,
                  mb: 1,
                  color: '#202124',
                }}
              >
                Mehrnoosh Yaghoubi Kalurazi
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  fontWeight: 400,
                  mb: 3,
                  color: '#5f6368',
                }}
              >
                Computer Science Researcher
              </Typography>

              <Stack direction="row" spacing={1.5} flexWrap="wrap" gap={1} sx={{ mb: 3 }}>
                <Chip
                  icon={<PsychologyIcon />}
                  label="Machine Learning"
                  size="medium"
                  sx={{
                    backgroundColor: '#e8f0fe',
                    color: '#1967d2',
                    fontWeight: 500,
                    border: '1px solid #d2e3fc',
                  }}
                />
                <Chip
                  icon={<SchoolIcon />}
                  label="Artificial Intelligence"
                  size="medium"
                  sx={{
                    backgroundColor: '#e8f0fe',
                    color: '#1967d2',
                    fontWeight: 500,
                    border: '1px solid #d2e3fc',
                  }}
                />
                <Chip
                  icon={<ArticleIcon />}
                  label="Natural Language Processing"
                  size="medium"
                  sx={{
                    backgroundColor: '#e8f0fe',
                    color: '#1967d2',
                    fontWeight: 500,
                    border: '1px solid #d2e3fc',
                  }}
                />
              </Stack>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  mb: 2,
                  color: '#3c4043',
                }}
              >
                Passionate computer science researcher specializing in{' '}
                <strong>Machine Learning</strong>, <strong>Artificial Intelligence</strong>, and{' '}
                <strong>Natural Language Processing</strong>. With a strong foundation in computational
                intelligence and advanced algorithms, I am dedicated to pushing the boundaries of AI
                research and contributing innovative solutions to real-world challenges.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#3c4043',
                }}
              >
                Currently pursuing opportunities for <strong>Master's and PhD programs</strong> where I can
                deepen my research expertise and collaborate with leading researchers in the field. My
                ambition is to publish groundbreaking work at top-tier conferences including{' '}
                <strong>CVPR</strong>, <strong>ICCV</strong>, and <strong>NeurIPS</strong>, contributing to
                the advancement of computer vision, machine learning, and AI systems.
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}