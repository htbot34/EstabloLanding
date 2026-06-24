import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '#how-it-works', label: 'How it works' },
  { href: '#compliance', label: 'Compliance' },
  { href: '#trust', label: 'Trust' },
] as const

const PILOT_HREF = '#request-a-pilot'

export function Nav() {
  const [open, setOpen] = useState(false)

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-paper-edge bg-page/90 backdrop-blur">
      <nav className="container-x flex h-14 items-center justify-between" aria-label="Primary">
        <a
          href="#top"
          className="font-sans text-lg font-semibold tracking-tight text-evergreen"
        >
          Establo
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-body transition-colors hover:text-evergreen"
            >
              {link.label}
            </a>
          ))}
          <a href={PILOT_HREF} className="btn-primary">
            Request a pilot
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-paper-edge text-evergreen sm:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open ? (
        <div id="mobile-menu" className="border-t border-paper-edge bg-page sm:hidden">
          <div className="container-x flex flex-col gap-1 py-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-2.5 text-base text-body hover:bg-paper"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={PILOT_HREF}
              className="btn-primary mt-1 w-full"
              onClick={() => setOpen(false)}
            >
              Request a pilot
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
