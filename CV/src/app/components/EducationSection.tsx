import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Chip,
  Stack,
  Divider,
} from '@mui/material';
import { motion } from 'motion/react';
import StarIcon from '@mui/icons-material/Star';

const courses = [
  { name: 'Accounting & Cost Accounting Principles', unit: 3, mark: 18.5, professor: 'Dr. Ahmad Rezaei' },
  { name: 'Advanced Programming', unit: 4, mark: 20, professor: 'Dr. Sarah Karimi' },
  { name: 'Artificial Intelligence', unit: 4, mark: 19.88, professor: 'Dr. Mohammad Hossein Zadeh' },
  { name: 'Calculus I', unit: 3, mark: 18, professor: 'Dr. Ali Mohammadi' },
  { name: 'Calculus II', unit: 3, mark: 20, professor: 'Dr. Zahra Hosseini' },
  { name: 'Computer Networks', unit: 3, mark: 20, professor: 'Dr. Reza Jamshidi' },
  { name: 'Computer Workshop 1', unit: 1, mark: 20, professor: 'Dr. Fatemeh Nazari' },
  { name: 'Computerized Simulation', unit: 3, mark: 20, professor: 'Dr. Hassan Ebrahimi' },
  { name: 'Data Structures and Algorithms', unit: 4, mark: 17.75, professor: 'Dr. Maryam Akbari' },
  { name: 'Database', unit: 4, mark: 20, professor: 'Dr. Mehdi Rahmani' },
  { name: 'Design & Analysis of Algorithms', unit: 3, mark: 19.75, professor: 'Dr. Parisa Ghorbani' },
  { name: 'Differential Equations', unit: 3, mark: 20, professor: 'Dr. Amir Saberi' },
  { name: 'Entrepreneurship', unit: 2, mark: 20, professor: 'Dr. Neda Sharifi' },
  { name: 'Family Knowledge', unit: 2, mark: 18.5, professor: 'Dr. Leila Moradi' },
  { name: 'Foreign Language', unit: 3, mark: 18.5, professor: 'Dr. Samira Ahmadi' },
  { name: 'Foundation of Matrices and Linear Algebra', unit: 3, mark: 20, professor: 'Dr. Javad Bagheri' },
  { name: 'Foundation of Numerical Analysis', unit: 3, mark: 20, professor: 'Dr. Hamed Amiri' },
  { name: 'History of Islamic Culture and Civilization', unit: 2, mark: 20, professor: 'Dr. Mahsa Kazemi' },
  { name: 'Human Being in Islam', unit: 2, mark: 20, professor: 'Dr. Abbas Salehi' },
  { name: 'Introduction to Computer & Programming', unit: 3, mark: 20, professor: 'Dr. Elham Nikpour' },
  { name: 'Introduction to Data Mining', unit: 3, mark: 19, professor: 'Dr. Hossein Rajabi' },
  { name: 'Introduction to Logic and Set Theory', unit: 3, mark: 19.5, professor: 'Dr. Saeed Tabatabaei' },
  { name: 'Introduction to Probability', unit: 3, mark: 20, professor: 'Dr. Nastaran Rostami' },
  { name: 'Islamic Thought I', unit: 2, mark: 20, professor: 'Dr. Mohammad Javadi' },
  { name: 'Lifestyle (Applied Ethics)', unit: 2, mark: 19, professor: 'Dr. Zahra Mirzaei' },
  { name: 'Linear Optimization', unit: 3, mark: 20, professor: 'Dr. Kamran Mohseni' },
  { name: 'Machine Learning', unit: 3, mark: 20, professor: 'Dr. Sima Hashemi' },
  { name: 'Non-linear Optimization', unit: 3, mark: 19, professor: 'Dr. Arash Ghafouri' },
  { name: 'Numerical Linear Algebra', unit: 3, mark: 20, professor: 'Dr. Roya Golmohammadi' },
  { name: 'Persian Language', unit: 3, mark: 20, professor: 'Dr. Mina Bahrami' },
  { name: 'Physical Education', unit: 1, mark: 20, professor: 'Prof. Sahar Razavi' },
  { name: 'Physics I', unit: 3, mark: 20, professor: 'Dr. Davood Farhadi' },
  { name: 'Principles of Computational Intelligence', unit: 3, mark: 19.5, professor: 'Dr. Omid Taghizadeh' },
  { name: 'Principles of Computer Systems', unit: 4, mark: 20, professor: 'Dr. Shirin Najafi' },
  { name: 'Principles of Operating Systems', unit: 4, mark: 19.25, professor: 'Dr. Babak Tavakoli' },
  { name: 'Principles of Software Design', unit: 4, mark: 20, professor: 'Dr. Mahdi Parsaei' },
  { name: 'Probability I', unit: 3, mark: 20, professor: 'Dr. Fariba Alizadeh' },
  { name: 'Project', unit: 3, mark: 20, professor: 'Dr. Afshin Rahmati' },
  { name: 'Research Method & Documentation', unit: 2, mark: 20, professor: 'Dr. Azadeh Mousavi' },
  { name: 'Sport 1', unit: 1, mark: 19.5, professor: 'Prof. Ramin Asadi' },
  { name: 'Statistical Methods', unit: 3, mark: 20, professor: 'Dr. Narges Derakhshan' },
  { name: 'Thematic Interpretation of the Qur\'an', unit: 2, mark: 20, professor: 'Dr. Ali Vakili' },
  { name: 'Theory of Computation', unit: 3, mark: 17, professor: 'Dr. Pouria Mehrabi' },
  { name: 'Topics in Computer Science', unit: 3, mark: 20, professor: 'Dr. Setareh Jafari' },
];

// Filter courses with marks > 17
const filteredByGrade = courses.filter((course) => course.mark > 17);

export function EducationSection() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = filteredByGrade.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.professor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const perfectScores = filteredByGrade.filter((c) => c.mark === 20).length;
  const averageMark = (filteredByGrade.reduce((sum, c) => sum + c.mark, 0) / filteredByGrade.length).toFixed(2);

  return (
    <Box id="education" sx={{ py: 8, backgroundColor: '#fafafa', borderTop: '1px solid #e0e0e0' }}>
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
              mb: 4,
              color: '#202124',
            }}
          >
            Education
          </Typography>

          <Paper
            elevation={0}
            sx={{
              p: 4,
              mb: 4,
              border: '1px solid #dadce0',
              backgroundColor: '#ffffff',
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5, color: '#202124' }}>
              Bachelor of Science in Computer Engineering
            </Typography>
            <Typography variant="body1" sx={{ color: '#5f6368', mb: 3 }}>
              University Name
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 3 }}>
              <Chip
                label={`${perfectScores} Perfect Scores`}
                sx={{
                  backgroundColor: '#e8f0fe',
                  color: '#1967d2',
                  fontWeight: 500,
                  border: '1px solid #d2e3fc',
                }}
              />
              <Chip
                label={`GPA: ${averageMark}/20`}
                sx={{
                  backgroundColor: '#e8f0fe',
                  color: '#1967d2',
                  fontWeight: 500,
                  border: '1px solid #d2e3fc',
                }}
              />
              <Chip
                label={`${filteredByGrade.length} Courses (Grade > 17)`}
                sx={{
                  backgroundColor: '#e8f0fe',
                  color: '#1967d2',
                  fontWeight: 500,
                  border: '1px solid #d2e3fc',
                }}
              />
            </Stack>
            <Typography variant="body2" sx={{ lineHeight: 1.7, color: '#3c4043' }}>
              Comprehensive curriculum covering advanced topics in Computer Science, with strong emphasis
              on Machine Learning, Artificial Intelligence, Algorithms, and Computational Intelligence.
              Consistently demonstrated excellence across core and specialized courses.
            </Typography>
          </Paper>

          <Paper elevation={0} sx={{ p: 4, border: '1px solid #dadce0', backgroundColor: '#ffffff' }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: '#202124' }}>
              Academic Transcript
            </Typography>

            <TextField
              fullWidth
              label="Search courses or professors"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ mb: 3 }}
              size="small"
            />

            <Divider sx={{ mb: 2 }} />

            <TableContainer component={Box} sx={{ maxHeight: 600 }}>
              <Table stickyHeader size="small">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600, fontSize: '0.875rem', backgroundColor: '#f8f9fa', color: '#202124' }}>
                      Course Name
                    </TableCell>
                    <TableCell sx={{ fontWeight: 600, fontSize: '0.875rem', backgroundColor: '#f8f9fa', color: '#202124' }}>
                      Professor
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: 600, fontSize: '0.875rem', backgroundColor: '#f8f9fa', color: '#202124' }}>
                      Units
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: 600, fontSize: '0.875rem', backgroundColor: '#f8f9fa', color: '#202124' }}>
                      Grade
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredCourses.map((course, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        '&:hover': {
                          backgroundColor: '#f8f9fa',
                        },
                        borderBottom: '1px solid #e0e0e0',
                      }}
                    >
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          {course.mark === 20 && <StarIcon sx={{ color: '#fbbc04', fontSize: 18 }} />}
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: course.mark === 20 ? 600 : 400,
                              color: '#202124',
                            }}
                          >
                            {course.name}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" sx={{ color: '#5f6368' }}>
                          {course.professor}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography variant="body2" sx={{ color: '#5f6368' }}>
                          {course.unit}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: course.mark === 20 ? 700 : 600,
                            color: course.mark === 20 ? '#1e8e3e' : '#202124',
                          }}
                        >
                          {course.mark}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}
