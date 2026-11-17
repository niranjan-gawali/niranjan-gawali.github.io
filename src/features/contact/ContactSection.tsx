import type { siteContent } from '../../data/siteContent'
import { Container } from '../../components/ui/Container'
import styles from './ContactSection.module.css'

type ContactContent = typeof siteContent.contact

export function ContactSection({ content }: { content: ContactContent }) {
  return (
    <section className={styles.section} id={content.id}>
      <Container>
        <div className={styles.card}>
          <div>
            <p className={styles.eyebrow}>{content.eyebrow}</p>
            <h2>{content.title}</h2>
            <p className={styles.description}>{content.description}</p>
          </div>
          <div className={styles.contactDetails}>
            <a className={styles.email} href={`mailto:${content.email}`}>{content.email}<span aria-hidden="true">↗</span></a>
            <div className={styles.profiles}>
              {content.profiles.map((profile) => (
                <a href={profile.href} target="_blank" rel="noreferrer" key={profile.label}>{profile.label}<span aria-hidden="true">↗</span></a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
