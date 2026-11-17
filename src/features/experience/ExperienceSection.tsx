import type { siteContent } from '../../data/siteContent'
import { Container } from '../../components/ui/Container'
import { SectionHeading } from '../../components/ui/SectionHeading'
import styles from './ExperienceSection.module.css'

type ExperienceContent = typeof siteContent.experience

export function ExperienceSection({ content }: { content: ExperienceContent }) {
  return (
    <section className={`section-divider ${styles.section}`} id={content.id}>
      <Container>
        <div className={styles.headingRow}>
          <SectionHeading eyebrow={content.eyebrow} title={content.title} />
          <p className={styles.aside}>{content.description}</p>
        </div>
        <ol className={styles.timeline}>
          {content.entries.map((entry, index) => (
            <li className={styles.entry} key={`${entry.company}-${entry.dates}`}>
              <span className={styles.node} aria-hidden="true" />
              <div className={styles.entryContent}>
                <div className={styles.entryTopline}>
                  <p className={styles.dates}>{entry.dates}</p>
                  <span>{entry.location}</span>
                </div>
                <h3>{entry.role}</h3>
                <p className={styles.company}>{entry.company}</p>
                <p className={styles.description}>{entry.summary}</p>
              </div>
              <span className={styles.index} aria-hidden="true">0{index + 1}</span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
