import styles from './BlueprintIllustration.module.css'

export function BlueprintIllustration() {
  return (
    <div className={styles.blueprint} aria-hidden="true">
      <div className={styles.topline}><span>SOFTWARE ENGINEERING</span><span className={styles.dot} /><span>OVERVIEW</span></div>
      <svg className={styles.art} viewBox="0 0 420 270" fill="none">
        <path d="M63 135h78m0 0 50-72m-50 72 50 72m0-144h77m-77 144h77m0-144 55 72-55 72m0-144v144" />
        <rect x="38" y="112" width="50" height="46" rx="8" />
        <rect x="166" y="40" width="50" height="46" rx="8" />
        <rect x="166" y="112" width="50" height="46" rx="8" />
        <rect x="166" y="184" width="50" height="46" rx="8" />
        <rect x="295" y="112" width="50" height="46" rx="8" />
        <circle cx="63" cy="135" r="4" /><circle cx="191" cy="63" r="4" />
        <circle cx="191" cy="135" r="4" /><circle cx="191" cy="207" r="4" />
        <circle cx="320" cy="135" r="4" />
      </svg>
      <div className={styles.caption}><span>IDEAS</span><i /><span>SOFTWARE</span><i /><span>PEOPLE</span></div>
    </div>
  )
}
