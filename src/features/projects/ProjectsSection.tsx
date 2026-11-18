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
          <SectionHeading eyebrow={content.personal.eyebrow} title={content.personal.title} description={content.personal.description} className={styles.mainHeading} />
          <div className={styles.personalGrid}>
            {content.personal.entries.map((project) => (
              <a className={styles.personalCard} href={project.href} key={project.name}>
                <div className={styles.personalCardTopline}>
                  <span>{project.category}</span>
                  <span className={styles.status}><span />{project.status}</span>
                </div>
                <div className={styles.personalCardBody}>
                  <div>
                    <h3>{project.name}</h3>
                    <p className={styles.personalDescription}>{project.description}</p>
                  </div>
                  <span className={styles.projectAction}>Explore project <span aria-hidden="true">↗</span></span>
                </div>
                <ul className={styles.technologies} aria-label={`${project.name} technologies`}>
                  {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </a>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
