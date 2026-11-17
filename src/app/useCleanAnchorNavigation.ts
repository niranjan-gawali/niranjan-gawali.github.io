import { useEffect } from 'react'

function clearUrlFragment() {
  if (!window.location.hash) return

  window.history.replaceState(
    window.history.state,
    '',
    `${window.location.pathname}${window.location.search}`,
  )
}

export function useCleanAnchorNavigation() {
  useEffect(() => {
    // Keep existing section links working while removing their fragment from the URL.
    if (window.location.hash) {
      try {
        document.getElementById(decodeURIComponent(window.location.hash.slice(1)))?.scrollIntoView()
      } catch {
        // Ignore malformed fragments and still normalize the URL below.
      }
    }
    clearUrlFragment()

    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) return

      const clickedElement = event.target
      if (!(clickedElement instanceof Element)) return

      const link = clickedElement.closest<HTMLAnchorElement>('a[href^="#"]')
      if (!link || (link.target && link.target !== '_self')) return

      let targetId: string
      try {
        targetId = decodeURIComponent(link.hash.slice(1))
      } catch {
        return
      }

      const target = document.getElementById(targetId)
      if (!target) return

      event.preventDefault()
      target.scrollIntoView()

      if (target.id === 'main-content') {
        target.focus({ preventScroll: true })
      }

      clearUrlFragment()
    }

    const handleHashChange = () => clearUrlFragment()

    document.addEventListener('click', handleClick)
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      document.removeEventListener('click', handleClick)
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])
}
