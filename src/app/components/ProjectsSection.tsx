import { Box, Container, Typography, Grid, Card, CardContent, Chip } from '@mui/material';
import { motion } from 'motion/react';
import CodeIcon from '@mui/icons-material/Code';
import BiotechIcon from '@mui/icons-material/Biotech';
import DescriptionIcon from '@mui/icons-material/Description';

const projects = [
  {
    title: 'Advanced Computer Vision Research',
    description:
      'Developed novel deep learning architectures for image classification and object detection. Implemented and optimized state-of-the-art models including ResNet, YOLO, and Vision Transformers.',
    methods: ['Deep Learning', 'PyTorch', 'Computer Vision', 'Transfer Learning'],
    outcomes:
      'Achieved 95% accuracy on custom dataset. Conducted comprehensive ablation studies and performance analysis.',
    icon: <BiotechIcon />,
  },
  {
    title: 'Natural Language Processing System',
    description:
      'Built an end-to-end NLP pipeline for sentiment analysis and text classification using transformer-based models. Implemented attention mechanisms and fine-tuned pre-trained language models.',
    methods: ['BERT', 'Transformers', 'Python', 'NLP', 'Hugging Face'],
    outcomes:
      'Deployed a production-ready system with 92% F1-score. Published findings in university research symposium.',
    icon: <DescriptionIcon />,
  },
  {
    title: 'Machine Learning Pipeline for Predictive Analytics',
    description:
      'Designed and implemented a comprehensive ML pipeline for predictive modeling. Utilized ensemble methods, feature engineering, and hyperparameter optimization techniques.',
    methods: ['Scikit-learn', 'XGBoost', 'Feature Engineering', 'Cross-validation'],
    outcomes:
      'Improved prediction accuracy by 23% compared to baseline models. Optimized inference time for real-time applications.',
    icon: <CodeIcon />,
  },
  {
    title: 'Reinforcement Learning for Game AI',
    description:
      'Implemented reinforcement learning algorithms including Q-learning and Deep Q-Networks (DQN) for autonomous game-playing agents. Explored policy gradient methods.',
    methods: ['Reinforcement Learning', 'OpenAI Gym', 'Neural Networks', 'Python'],
    outcomes:
      'Agent successfully learned optimal strategies, achieving expert-level performance after 10k episodes of training.',
    icon: <BiotechIcon />,
  },
];

export function ProjectsSection() {
  return (
    <Box id="projects" sx={{ py: 8, backgroundColor: '#ffffff', borderTop: '1px solid #e0e0e0' }}>
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
            Projects & Research
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mb: 4,
              color: '#5f6368',
              maxWidth: '800px',
            }}
          >
            A collection of research projects and academic work demonstrating expertise in machine
            learning, artificial intelligence, and computational problem-solving.
          </Typography>

          <Grid container spacing={3}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    elevation={0}
                    sx={{
                      height: '100%',
                      transition: 'all 0.2s',
                      border: '1px solid #dadce0',
                      '&:hover': {
                        boxShadow: '0 1px 3px 1px rgba(60,64,67,.15)',
                        borderColor: '#d2e3fc',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                        <Box
                          sx={{
                            color: '#1967d2',
                            mr: 1.5,
                            mt: 0.5,
                          }}
                        >
                          {project.icon}
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: '#202124', fontSize: '1.1rem' }}>
                          {project.title}
                        </Typography>
                      </Box>

                      <Typography
                        variant="body2"
                        sx={{ mb: 2, color: '#3c4043', lineHeight: 1.7 }}
                      >
                        {project.description}
                      </Typography>

                      <Typography variant="body2" sx={{ mb: 1, fontWeight: 600, color: '#5f6368', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                        Methods & Technologies
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                        {project.methods.map((method, idx) => (
                          <Chip
                            key={idx}
                            label={method}
                            size="small"
                            sx={{
                              backgroundColor: '#f1f3f4',
                              color: '#3c4043',
                              fontWeight: 400,
                              fontSize: '0.75rem',
                              height: '24px',
                            }}
                          />
                        ))}
                      </Box>

                      <Typography variant="body2" sx={{ color: '#3c4043', lineHeight: 1.7 }}>
                        <strong>Outcomes:</strong> {project.outcomes}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}