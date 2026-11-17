import type { siteContent } from '../../data/siteContent'
import { BlueprintIllustration } from '../../components/illustrations/BlueprintIllustration'
import { ArrowLink } from '../../components/ui/ArrowLink'
import { Container } from '../../components/ui/Container'
import styles from './HeroSection.module.css'

type HeroContent = typeof siteContent.hero

export function HeroSection({ content }: { content: HeroContent }) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Container className={styles.layout}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}><span />{content.eyebrow}</p>
          <h1 id="hero-title">{content.title.before} <em>{content.title.emphasis}</em> {content.title.after}</h1>
          <p className={styles.intro}>{content.description}</p>
          <div className={styles.actions}>
            <ArrowLink href={content.primaryAction.href} tone="primary">{content.primaryAction.label}</ArrowLink>
            <ArrowLink href={content.secondaryAction.href} tone="secondary" arrow="down">{content.secondaryAction.label}</ArrowLink>
          </div>
        </div>
        <BlueprintIllustration />
      </Container>
    </section>
  )
}
