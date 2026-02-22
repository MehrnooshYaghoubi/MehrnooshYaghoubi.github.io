import { Box, Container, Typography, Paper, Chip, Stack, Divider } from '@mui/material';
import { motion } from 'motion/react';
import ArticleIcon from '@mui/icons-material/Article';
import PendingIcon from '@mui/icons-material/Pending';
import EventIcon from '@mui/icons-material/Event';

const publications = [
  {
    title: 'Deep Learning Approaches for Multi-Modal Image Classification',
    authors: 'M. Yaghoubi Kalurazi, et al.',
    venue: 'Under Review - CVPR 2027',
    status: 'Under Review',
    description:
      'Novel architecture combining vision transformers with multi-modal fusion techniques for improved classification accuracy.',
    tags: ['Computer Vision', 'Deep Learning', 'Multi-Modal'],
  },
  {
    title: 'Attention Mechanisms in Natural Language Understanding',
    authors: 'M. Yaghoubi Kalurazi, Co-authors',
    venue: 'In Preparation for NeurIPS 2027',
    status: 'In Preparation',
    description:
      'Investigating novel attention mechanisms for improved contextual understanding in NLP tasks.',
    tags: ['NLP', 'Transformers', 'Attention'],
  },
];

const conferences = [
  {
    name: 'CVPR 2027',
    description: 'Computer Vision and Pattern Recognition - Target publication venue',
    date: 'June 2027',
  },
  {
    name: 'ICCV 2027',
    description: 'International Conference on Computer Vision - Target publication venue',
    date: 'October 2027',
  },
  {
    name: 'NeurIPS 2027',
    description:
      'Conference on Neural Information Processing Systems - Target publication venue',
    date: 'December 2027',
  },
];

export function PublicationsSection() {
  return (
    <Box id="publications" sx={{ py: 8, backgroundColor: '#fafafa', borderTop: '1px solid #e0e0e0' }}>
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
            Publications & Conferences
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mb: 4,
              color: '#5f6368',
              maxWidth: '800px',
            }}
          >
            Current research work and target publication venues at premier AI and computer vision
            conferences.
          </Typography>

          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: '#202124', display: 'flex', alignItems: 'center' }}
          >
            <ArticleIcon sx={{ mr: 1, color: '#1967d2', fontSize: 20 }} />
            Research Papers
          </Typography>

          <Stack spacing={2.5} sx={{ mb: 5 }}>
            {publications.map((pub, index) => (
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
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      mb: 1.5,
                      flexWrap: 'wrap',
                      gap: 2,
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#202124', flex: 1, fontSize: '1.05rem' }}>
                      {pub.title}
                    </Typography>
                    <Chip
                      icon={<PendingIcon sx={{ fontSize: 16 }} />}
                      label={pub.status}
                      size="small"
                      sx={{
                        backgroundColor: pub.status === 'Under Review' ? '#fef7e0' : '#e8f0fe',
                        color: pub.status === 'Under Review' ? '#b06000' : '#1967d2',
                        border: pub.status === 'Under Review' ? '1px solid #f9ab00' : '1px solid #d2e3fc',
                        fontWeight: 500,
                      }}
                    />
                  </Box>

                  <Typography variant="body2" sx={{ mb: 0.5, color: '#5f6368', fontStyle: 'italic' }}>
                    {pub.authors}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ mb: 2, color: '#1967d2', fontWeight: 600 }}
                  >
                    {pub.venue}
                  </Typography>

                  <Typography variant="body2" sx={{ mb: 2, color: '#3c4043', lineHeight: 1.7 }}>
                    {pub.description}
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {pub.tags.map((tag, idx) => (
                      <Chip
                        key={idx}
                        label={tag}
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
                </Paper>
              </motion.div>
            ))}
          </Stack>

          <Divider sx={{ mb: 4 }} />

          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: '#202124', display: 'flex', alignItems: 'center' }}
          >
            <EventIcon sx={{ mr: 1, color: '#1967d2', fontSize: 20 }} />
            Target Conferences
          </Typography>

          <Stack spacing={2}>
            {conferences.map((conf, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 2.5,
                    border: '1px solid #dadce0',
                    transition: 'all 0.2s',
                    backgroundColor: '#ffffff',
                    '&:hover': {
                      boxShadow: '0 1px 3px 1px rgba(60,64,67,.15)',
                      borderColor: '#d2e3fc',
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: 2,
                    }}
                  >
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#1967d2', mb: 0.5, fontSize: '1rem' }}>
                        {conf.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#5f6368' }}>
                        {conf.description}
                      </Typography>
                    </Box>
                    <Chip
                      label={conf.date}
                      size="small"
                      sx={{
                        backgroundColor: '#e8f0fe',
                        color: '#1967d2',
                        fontWeight: 500,
                        border: '1px solid #d2e3fc',
                      }}
                    />
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