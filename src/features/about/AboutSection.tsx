import type { siteContent } from '../../data/siteContent'
import { Container } from '../../components/ui/Container'
import { SectionHeading } from '../../components/ui/SectionHeading'
import styles from './AboutSection.module.css'

type AboutContent = typeof siteContent.about

export function AboutSection({ content }: { content: AboutContent }) {
  return (
    <section className={`section-divider ${styles.section}`} id={content.id}>
      <Container className={styles.grid}>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} />
        <div className={styles.content}>
          <p className={styles.lede}>{content.body}</p>
          <div className={styles.stat}>
            <span className={styles.number}>{content.experienceStat}</span>
            <span className={styles.statCopy}><strong>{content.experienceStatLabel}</strong><small>{content.experienceStatDetail}</small></span>
            <span className={styles.mark} aria-hidden="true">✳</span>
          </div>
        </div>
      </Container>
    </section>
  )
}
