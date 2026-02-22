import { Box, Container, Typography, Paper, Stack } from '@mui/material';
import { motion } from 'motion/react';
import WorkIcon from '@mui/icons-material/Work';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const experiences = [
  {
    title: 'Research Assistant',
    organization: 'University AI Lab',
    period: 'Sep 2024 - Present',
    description:
      'Conducting research on deep learning models for computer vision applications. Collaborating with PhD students and faculty on cutting-edge AI projects. Contributing to research papers and experimental design.',
    achievements: [
      'Implemented novel attention mechanisms for image segmentation',
      'Assisted in literature review for upcoming conference submissions',
      'Conducted experiments and analyzed results for ongoing research projects',
    ],
  },
  {
    title: 'Machine Learning Intern',
    organization: 'Tech Innovation Company',
    period: 'Jun 2024 - Aug 2024',
    description:
      'Developed and deployed machine learning models for production systems. Worked on data preprocessing, feature engineering, and model optimization.',
    achievements: [
      'Built predictive models that improved system efficiency by 20%',
      'Collaborated with cross-functional teams on ML pipeline development',
      'Presented findings to technical and non-technical stakeholders',
    ],
  },
  {
    title: 'Teaching Assistant - Machine Learning',
    organization: 'University Computer Science Department',
    period: 'Jan 2024 - May 2024',
    description:
      'Assisted in teaching undergraduate machine learning course. Held office hours, graded assignments, and mentored students on ML projects.',
    achievements: [
      'Guided 50+ students through machine learning concepts and projects',
      'Developed supplementary tutorial materials and coding examples',
      'Received outstanding TA evaluation from students',
    ],
  },
];

export function ExperienceSection() {
  return (
    <Box id="experience" sx={{ py: 8, backgroundColor: '#fafafa', borderTop: '1px solid #e0e0e0' }}>
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
            Experience
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mb: 4,
              color: '#5f6368',
              maxWidth: '800px',
            }}
          >
            Professional experience in research, development, and teaching roles focused on machine
            learning and artificial intelligence.
          </Typography>

          <Stack spacing={3}>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    border: '1px solid #dadce0',
                    transition: 'all 0.2s',
                    backgroundColor: '#ffffff',
                    '&:hover': {
                      boxShadow: '0 1px 3px 1px rgba(60,64,67,.15)',
                      borderColor: '#d2e3fc',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Box
                      sx={{
                        color: '#1967d2',
                        mr: 2,
                        mt: 0.5,
                      }}
                    >
                      <WorkIcon />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5, color: '#202124' }}>
                        {exp.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: '#5f6368', fontWeight: 500, mb: 0.5 }}
                      >
                        {exp.organization}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', color: '#5f6368', mb: 2 }}>
                        <CalendarTodayIcon sx={{ fontSize: 14, mr: 0.5 }} />
                        <Typography variant="body2">{exp.period}</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ mb: 2, color: '#3c4043', lineHeight: 1.7 }}>
                        {exp.description}
                      </Typography>

                      <Box component="ul" sx={{ pl: 2.5, m: 0 }}>
                        {exp.achievements.map((achievement, idx) => (
                          <Typography
                            key={idx}
                            component="li"
                            variant="body2"
                            sx={{ mb: 0.5, color: '#5f6368', lineHeight: 1.6 }}
                          >
                            {achievement}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            ))}
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}