import { useEffect, useState } from 'react'
import { AboutSection } from '../features/about/AboutSection'
import { ContactSection } from '../features/contact/ContactSection'
import { CredentialsSection } from '../features/credentials/CredentialsSection'
import { ExperienceSection } from '../features/experience/ExperienceSection'
import { HeroSection } from '../features/hero/HeroSection'
import { ProjectsSection } from '../features/projects/ProjectsSection'
import { SkillsSection } from '../features/skills/SkillsSection'
import { SiteFooter } from '../components/layout/SiteFooter'
import { SiteHeader } from '../components/layout/SiteHeader'
import { siteContent } from '../data/siteContent'
import { THEME_STORAGE_KEY, type Theme } from './theme'
import { useCleanAnchorNavigation } from './useCleanAnchorNavigation'

export default function App() {
  useCleanAnchorNavigation()

  const [theme, setTheme] = useState<Theme>(() => {
    const documentTheme = document.documentElement.dataset.theme
    if (documentTheme === 'dark' || documentTheme === 'light') return documentTheme
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
    if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#111821' : '#fbf9f6')
  }, [theme])

  const toggleTheme = () => setTheme((current) => current === 'light' ? 'dark' : 'light')

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader brand={siteContent.brand} navigation={siteContent.navigation} theme={theme} onToggleTheme={toggleTheme} />
      <main id="main-content" tabIndex={-1}>
        <HeroSection content={siteContent.hero} />
        <AboutSection content={siteContent.about} />
        <ExperienceSection content={siteContent.experience} />
        <SkillsSection content={siteContent.skills} />
        <ProjectsSection content={siteContent.projects} />
        <CredentialsSection content={siteContent.credentials} />
        <ContactSection content={siteContent.contact} />
      </main>
      <SiteFooter brand={siteContent.brand} />
    </>
  )
}
