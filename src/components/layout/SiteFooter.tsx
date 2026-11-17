import styles from './SiteFooter.module.css'

interface SiteFooterProps {
  brand: { name: string; role: string }
}

export function SiteFooter({ brand }: SiteFooterProps) {
  return (
    <footer className={`container ${styles.footer}`}>
      <a className={styles.brand} href="#top">{brand.name}</a>
      <span>{brand.role} · © {new Date().getFullYear()}</span>
      <a className={styles.topLink} href="#top">BACK TO TOP <span aria-hidden="true">↑</span></a>
    </footer>
  )
}
