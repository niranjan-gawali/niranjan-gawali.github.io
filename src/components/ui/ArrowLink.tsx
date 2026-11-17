import type { AnchorHTMLAttributes, PropsWithChildren } from 'react'
import styles from './ArrowLink.module.css'

interface ArrowLinkProps extends PropsWithChildren, AnchorHTMLAttributes<HTMLAnchorElement> {
  tone?: 'primary' | 'secondary' | 'text'
  arrow?: 'up-right' | 'down'
}

export function ArrowLink({ children, tone = 'text', arrow = 'up-right', className = '', ...props }: ArrowLinkProps) {
  return (
    <a className={`${styles.link} ${styles[tone]} ${className}`.trim()} {...props}>
      <span>{children}</span>
      <span className={styles.arrow} aria-hidden="true">{arrow === 'down' ? '↓' : '↗'}</span>
    </a>
  )
}
