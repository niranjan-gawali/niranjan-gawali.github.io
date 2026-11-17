import type { siteContent } from '../../data/siteContent'
import { Container } from '../../components/ui/Container'
import { SectionHeading } from '../../components/ui/SectionHeading'
import styles from './CredentialsSection.module.css'

type CredentialsContent = typeof siteContent.credentials

export function CredentialsSection({ content }: { content: CredentialsContent }) {
  return (
    <section className={`section-divider ${styles.section}`} id={content.id}>
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} className={styles.sectionHeading} />
        <div className={styles.grid}>
          <div className={styles.certifications}>
            <p className={styles.groupLabel}>CERTIFICATIONS</p>
            {content.certifications.map((certification) => (
              <a className={styles.certification} href={certification.href} target="_blank" rel="noreferrer" key={certification.name}>
                <span><strong>{certification.name}</strong><small>{certification.date}</small></span>
                <span className={styles.external} aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
          <div className={styles.education}>
            <div>
              <p className={styles.groupLabel}>EDUCATION</p>
              <ul className={styles.educationList}>{content.education.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div>
              <p className={styles.groupLabel}>LANGUAGES</p>
              <ul>{content.languages.map((language) => <li key={language}>{language}</li>)}</ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
