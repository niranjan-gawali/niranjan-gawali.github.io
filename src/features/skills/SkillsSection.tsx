import type { siteContent } from '../../data/siteContent'
import { Container } from '../../components/ui/Container'
import { SectionHeading } from '../../components/ui/SectionHeading'
import styles from './SkillsSection.module.css'

type SkillsContent = typeof siteContent.skills

export function SkillsSection({ content }: { content: SkillsContent }) {
  return (
    <section className={`section-divider ${styles.section}`} id={content.id}>
      <Container>
        <div className={styles.headingRow}>
          <SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} />
          <span className={styles.aside}>CORE COMPETENCIES</span>
        </div>
        <div className={styles.grid}>
          {content.groups.map((group) => (
            <article className={styles.group} key={group.name}>
              <h3>{group.name}</h3>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
