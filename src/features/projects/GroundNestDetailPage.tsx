import { useEffect, useState } from 'react'
import { ThemeToggle } from '../../components/layout/ThemeToggle'
import { Container } from '../../components/ui/Container'
import { groundNestProject } from '../../data/groundNestProject'
import { THEME_STORAGE_KEY, type Theme } from '../../app/theme'
import { useCleanAnchorNavigation } from '../../app/useCleanAnchorNavigation'
import styles from './GroundNestDetailPage.module.css'

function getInitialTheme(): Theme {
  const documentTheme = document.documentElement.dataset.theme
  if (documentTheme === 'dark' || documentTheme === 'light') return documentTheme

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
  if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function GroundNestDetailPage() {
  useCleanAnchorNavigation()
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#111821' : '#fbf9f6')
  }, [theme])

  const toggleTheme = () => setTheme((current) => current === 'light' ? 'dark' : 'light')

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className={styles.header} id="top">
        <Container>
          <div className={styles.headerInner}>
            <a className={styles.brand} href="/" aria-label="Niranjan Gawali, portfolio home">
              <span className={styles.mark}>NG</span>
              <span>Niranjan Gawali</span>
            </a>
            <nav className={styles.headerActions} aria-label="Project navigation">
              <a href="/#personal-projects">Back to portfolio</a>
              <ThemeToggle theme={theme} onToggle={toggleTheme} />
            </nav>
          </div>
        </Container>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className={styles.hero}>
          <Container>
            <a className={styles.backLink} href="/#personal-projects"><span aria-hidden="true">←</span> Personal projects</a>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <p className={styles.eyebrow}><span />{groundNestProject.category}</p>
                <h1>{groundNestProject.name}</h1>
                <p className={styles.summary}>{groundNestProject.summary}</p>
                <div className={styles.status}><span />{groundNestProject.status}</div>
              </div>
              <div className={styles.heroVisual} aria-hidden="true">
                <div className={styles.visualOrb}>
                  <span className={styles.orbRing} />
                  <span className={styles.orbCore}>G</span>
                  <span className={styles.orbNode} />
                </div>
                <span className={styles.visualCaption}>LOCAL MODELS · YOUR DOCUMENTS</span>
              </div>
            </div>
          </Container>
        </section>

        <section className={`section-divider ${styles.section}`}>
          <Container>
            <div className={styles.introGrid}>
              <div>
                <p className={styles.sectionEyebrow}>OVERVIEW</p>
                <h2>Local AI, grounded in your own knowledge.</h2>
              </div>
              <div className={styles.bodyCopy}>
                <p>{groundNestProject.overview}</p>
                <p>{groundNestProject.knowledge}</p>
              </div>
            </div>
          </Container>
        </section>

        <section className={`section-divider ${styles.section}`}>
          <Container>
            <div className={styles.sectionHeading}>
              <p className={styles.sectionEyebrow}>CAPABILITIES</p>
              <h2>Built for private, document-aware conversations.</h2>
            </div>
            <ul className={styles.featureGrid}>
              {groundNestProject.features.map((feature, index) => (
                <li className={styles.feature} key={feature}>
                  <span className={styles.featureNumber}>0{index + 1}</span>
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <section className={`section-divider ${styles.section}`}>
          <Container>
            <div className={styles.detailGrid}>
              <div className={styles.contributionCard}>
                <p className={styles.sectionEyebrow}>MY CONTRIBUTION</p>
                <h2>From the first screen to the desktop build.</h2>
                <p>{groundNestProject.contribution}</p>
              </div>
              <div className={styles.technologyPanel}>
                <p className={styles.sectionEyebrow}>TECHNOLOGY</p>
                <h2>Tools behind the product</h2>
                <ul className={styles.technologyList}>
                  {groundNestProject.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
                <p className={styles.buildDescription}>{groundNestProject.buildDescription}</p>
              </div>
            </div>
          </Container>
        </section>

        <section className={`section-divider ${styles.section}`} id="downloads">
          <Container>
            <div className={styles.sectionHeading}>
              <p className={styles.sectionEyebrow}>VERSION 1 · PREVIEW BUILDS</p>
              <h2>Choose your platform.</h2>
              <p className={styles.sectionDescription}>{groundNestProject.downloads.some((download) => download.href)
                ? 'Choose a V1 preview build for your operating system and processor.'
                : 'Download links will appear here when the V1 preview releases are ready.'}</p>
            </div>
            <div className={styles.downloadGrid}>
              {groundNestProject.downloads.map((download) => (
                <article className={styles.downloadCard} key={download.platform}>
                  <div className={styles.platformIcon} aria-hidden="true">{download.platform === 'macOS' ? '⌘' : download.platform === 'Windows' ? '⊞' : '◉'}</div>
                  <h3>{download.platform}</h3>
                  <p>{download.architecture}</p>
                  {download.href ? (
                    <a className={styles.downloadLink} href={download.href} aria-label={`Download GroundNest V1 for ${download.platform} ${download.architecture}`}>Download V1 <span aria-hidden="true">↓</span></a>
                  ) : (
                    <span className={styles.downloadPending}>V1 link coming soon</span>
                  )}
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className={styles.statusSection}>
          <Container>
            <div className={styles.statusPanel}>
              <div>
                <p className={styles.sectionEyebrow}>CURRENT STATUS</p>
                <h2>Preview in progress</h2>
                <p>{groundNestProject.statusDescription}</p>
              </div>
              <aside className={styles.privacyNote}>
                <span aria-hidden="true">⌂</span>
                <p>{groundNestProject.privacy}</p>
              </aside>
            </div>
          </Container>
        </section>
      </main>

      <footer className={`container ${styles.footer}`}>
        <a href="/">Niranjan Gawali</a>
        <span>GroundNest · {new Date().getFullYear()}</span>
        <a href="#top">BACK TO TOP <span aria-hidden="true">↑</span></a>
      </footer>
    </>
  )
}
