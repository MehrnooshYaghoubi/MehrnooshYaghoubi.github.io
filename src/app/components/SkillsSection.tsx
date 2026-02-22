import { Box, Container, Typography, Grid, Paper, LinearProgress, Divider } from '@mui/material';
import { motion } from 'motion/react';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BuildIcon from '@mui/icons-material/Build';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <CodeIcon />,
    skills: [
      { name: 'Python', level: 95 },
      { name: 'C/C++', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'R', level: 75 },
      { name: 'MATLAB', level: 80 },
    ],
  },
  {
    title: 'ML/AI Frameworks',
    icon: <PsychologyIcon />,
    skills: [
      { name: 'PyTorch', level: 90 },
      { name: 'TensorFlow', level: 85 },
      { name: 'Scikit-learn', level: 95 },
      { name: 'Keras', level: 85 },
      { name: 'Hugging Face', level: 80 },
    ],
  },
  {
    title: 'Data & Databases',
    icon: <StorageIcon />,
    skills: [
      { name: 'SQL', level: 85 },
      { name: 'MongoDB', level: 75 },
      { name: 'Pandas', level: 90 },
      { name: 'NumPy', level: 95 },
      { name: 'Data Visualization', level: 85 },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: <BuildIcon />,
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'Jupyter', level: 95 },
      { name: 'Linux', level: 85 },
      { name: 'Cloud Computing', level: 70 },
    ],
  },
];

export function SkillsSection() {
  return (
    <Box id="skills" sx={{ py: 8, backgroundColor: '#ffffff', borderTop: '1px solid #e0e0e0' }}>
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
            Technical Skills
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mb: 4,
              color: '#5f6368',
              maxWidth: '800px',
            }}
          >
            Comprehensive technical proficiency across programming languages, machine learning
            frameworks, and modern development tools.
          </Typography>

          <Grid container spacing={3}>
            {skillCategories.map((category, index) => (
              <Grid item xs={12} md={6} key={index}>
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
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box
                        sx={{
                          color: '#1967d2',
                          mr: 1.5,
                        }}
                      >
                        {category.icon}
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#202124', fontSize: '1.1rem' }}>
                        {category.title}
                      </Typography>
                    </Box>

                    <Divider sx={{ mb: 2 }} />

                    {category.skills.map((skill, idx) => (
                      <Box key={idx} sx={{ mb: 2.5 }}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            mb: 0.5,
                          }}
                        >
                          <Typography variant="body2" sx={{ fontWeight: 500, color: '#202124' }}>
                            {skill.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ fontWeight: 500, color: '#5f6368' }}
                          >
                            {skill.level}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: 6,
                            borderRadius: 3,
                            backgroundColor: '#e0e0e0',
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 3,
                              backgroundColor: '#1967d2',
                            },
                          }}
                        />
                      </Box>
                    ))}
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