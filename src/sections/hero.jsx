import { useLanguage } from '../locale/LanguageContext';
import styles from './styles/hero.module.css';
import SchoolIcon from '@mui/icons-material/School';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ArticleIcon from '@mui/icons-material/Article';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="about" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <div className={styles.avatar}>MY</div>
          </div>

          <div className={styles.textContent}>
            <h1 className={styles.name}>{t('hero.name')}</h1>
            <h2 className={styles.title}>{t('hero.title')}</h2>

            <div className={styles.chips}>
              <div className={styles.chip}>
                <PsychologyIcon style={{ fontSize: 20 }} />
                <span>{t('hero.specializations.ml')}</span>
              </div>
              <div className={styles.chip}>
                <SchoolIcon style={{ fontSize: 20 }} />
                <span>{t('hero.specializations.ai')}</span>
              </div>
              <div className={styles.chip}>
                <ArticleIcon style={{ fontSize: 20 }} />
                <span>{t('hero.specializations.nlp')}</span>
              </div>
            </div>

            <p className={styles.description}>{t('hero.description1')}</p>
            <p className={styles.description}>{t('hero.description2')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
