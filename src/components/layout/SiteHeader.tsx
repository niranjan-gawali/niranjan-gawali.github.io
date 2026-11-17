import type { NavigationItem } from '../../data/siteContent'
import type { Theme } from '../../app/theme'
import { ThemeToggle } from './ThemeToggle'
import styles from './SiteHeader.module.css'

interface SiteHeaderProps {
  brand: { name: string; monogram: string }
  navigation: NavigationItem[]
  theme: Theme
  onToggleTheme: () => void
}

export function SiteHeader({ brand, navigation, theme, onToggleTheme }: SiteHeaderProps) {
  return (
    <header className={styles.header} id="top">
      <div className="container">
        <div className={styles.inner}>
          <a className={styles.brand} href="#top" aria-label={`${brand.name}, home`}>
            <span className={styles.mark}>{brand.monogram}</span>
            <span>{brand.name}</span>
          </a>
          <nav className={styles.navigation} aria-label="Main navigation">
            {navigation.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}
          </nav>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a className={styles.cta} href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </header>
  )
}
