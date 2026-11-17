import type { siteContent } from '../../data/siteContent'
import { Container } from '../../components/ui/Container'
import { SectionHeading } from '../../components/ui/SectionHeading'
import styles from './ProjectsSection.module.css'

type ProjectsContent = typeof siteContent.projects

export function ProjectsSection({ content }: { content: ProjectsContent }) {
  return (
    <>
      <section className={`section-divider ${styles.section}`} id={content.professional.id} aria-label={content.professional.title}>
        <Container>
          <SectionHeading eyebrow={content.professional.eyebrow} title={content.professional.title} description={content.professional.description} className={styles.mainHeading} />
          <div className={styles.grid}>
            {content.professional.entries.map((project, index) => (
              <article className={styles.card} key={project.name}>
                <div className={styles.cardTopline}><span>PROJECT / 0{index + 1}</span><span className={styles.cardMark} aria-hidden="true">◈</span></div>
                <p className={styles.domain}>{project.domain}</p>
                <h3>{project.name}</h3>
                <p className={styles.organization}>{project.organization}</p>
                <p className={styles.summary}>{project.description}</p>
                <p className={styles.contribution}>{project.contribution}</p>
                <ul className={styles.technologies} aria-label={`${project.name} technologies`}>
                  {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className={`section-divider ${styles.section}`} id={content.personal.id} aria-label={content.personal.title}>
        <Container>
          <SectionHeading eyebrow={content.personal.eyebrow} title={content.personal.title} className={styles.mainHeading} />
          <div className={styles.personal}>
            <div className={styles.subsectionHeading}>
              <h3>{content.personal.statusTitle}</h3>
              <span className={styles.status}><span />UPCOMING</span>
            </div>
            <p className={styles.personalDescription}>{content.personal.description}</p>
          </div>
        </Container>
      </section>
    </>
  )
}
