import { useState } from 'react';
import { useLanguage } from '../locale/LanguageContext';
import styles from './styles/education.module.css';
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
  { name: 'Topics in Computer Science', unit: 3, mark: 20, professor: 'Dr. Setareh Jafari' },
];

const filteredByGrade = courses.filter((course) => course.mark > 17);

export default function Education() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = filteredByGrade.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.professor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const perfectScores = filteredByGrade.filter((c) => c.mark === 20).length;
  const averageMark = (
    filteredByGrade.reduce((sum, c) => sum + c.mark, 0) / filteredByGrade.length
  ).toFixed(2);

  return (
    <section id="education" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('education.title')}</h2>

        <div className={styles.degreeCard}>
          <h3 className={styles.degreeTitle}>{t('education.degree')}</h3>
          <p className={styles.university}>{t('education.university')}</p>

          <div className={styles.stats}>
            <div className={styles.statChip}>
              {perfectScores} {t('education.perfectScores')}
            </div>
            <div className={styles.statChip}>
              {t('education.gpa')}: {averageMark}/20
            </div>
            <div className={styles.statChip}>
              {filteredByGrade.length} {t('education.coursesAbove')}
            </div>
          </div>

          <p className={styles.description}>{t('education.subtitle')}</p>
        </div>

        <div className={styles.transcriptCard}>
          <h3 className={styles.transcriptTitle}>{t('education.transcript')}</h3>

          <input
            type="text"
            className={styles.searchInput}
            placeholder={t('education.search')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className={styles.divider} />

          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead className={styles.tableHead}>
                <tr>
                  <th className={styles.tableHeadCell}>{t('education.courseName')}</th>
                  <th className={styles.tableHeadCell}>{t('education.professor')}</th>
                  <th className={`${styles.tableHeadCell} ${styles.center}`}>
                    {t('education.units')}
                  </th>
                  <th className={`${styles.tableHeadCell} ${styles.center}`}>
                    {t('education.grade')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredCourses.map((course, index) => (
                  <tr key={index} className={styles.tableRow}>
                    <td className={styles.tableCell}>
                      <div
                        className={`${styles.courseName} ${
                          course.mark === 20 ? styles.perfect : ''
                        }`}
                      >
                        {course.mark === 20 && <StarIcon className={styles.star} />}
                        <span>{course.name}</span>
                      </div>
                    </td>
                    <td className={styles.tableCell}>{course.professor}</td>
                    <td className={`${styles.tableCell} ${styles.center}`}>{course.unit}</td>
                    <td className={`${styles.tableCell} ${styles.center}`}>
                      <span
                        className={`${styles.grade} ${course.mark === 20 ? styles.perfect : ''}`}
                      >
                        {course.mark}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
