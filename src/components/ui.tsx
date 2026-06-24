import type { ReactNode } from 'react'

/**
 * Bilingual verb eyebrow used to label sections. The Spanish-first navigational
 * texture that replaces numbered section markers. Spanish leads (evergreen),
 * English glosses (muted), joined by a short ledger rule.
 */
export function SectionLabel({ es, en }: { es: string; en: string }) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em]">
      <span lang="es" className="font-medium text-evergreen">
        {es}
      </span>
      <span aria-hidden="true" className="h-px w-6 bg-evergreen/40" />
      <span lang="en" className="text-muted">
        {en}
      </span>
    </p>
  )
}

/** Section heading: bilingual verb eyebrow above an intro line. */
export function SectionHeading({
  es,
  en,
  title,
}: {
  es: string
  en: string
  title: string
}) {
  return (
    <div className="max-w-2xl">
      <SectionLabel es={es} en={en} />
      <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-paper-ink sm:text-[2rem]">
        {title}
      </h2>
    </div>
  )
}

type ChipTone = 'evergreen' | 'paper' | 'consent'

const chipTones: Record<ChipTone, string> = {
  evergreen: 'border-evergreen/25 bg-evergreen/[0.07] text-evergreen',
  paper: 'border-paper-edge bg-paper text-paper-ink',
  consent: 'border-evergreen/30 bg-white text-evergreen',
}

/** Mono chip for FARM CE tags and the ALTA / BAJA / ACEPTO consent codes. */
export function Chip({
  children,
  tone = 'evergreen',
  className = '',
}: {
  children: ReactNode
  tone?: ChipTone
  className?: string
}) {
  return <span className={`chip ${chipTones[tone]} ${className}`}>{children}</span>
}

// A fixed, hand-tuned bar pattern so the "waveform" reads as a voice note without
// being randomly jittery. Heights are on a 0–24 scale.
const WAVEFORM_BARS = [
  5, 9, 14, 8, 17, 22, 13, 19, 10, 15, 7, 12, 18, 24, 16, 9, 13, 20, 11, 6, 14, 8, 12, 5,
]

/** Static, decorative voice-note waveform. Inherits color via currentColor. */
export function Waveform({ className = '' }: { className?: string }) {
  const barWidth = 3
  const gap = 2
  const step = barWidth + gap
  const width = WAVEFORM_BARS.length * step - gap
  return (
    <svg
      className={className}
      width={width}
      height={24}
      viewBox={`0 0 ${width} 24`}
      fill="none"
      role="img"
      aria-label="Voice note waveform"
    >
      {WAVEFORM_BARS.map((h, i) => (
        <rect
          key={i}
          x={i * step}
          y={(24 - h) / 2}
          width={barWidth}
          height={h}
          rx={1.5}
          fill="currentColor"
        />
      ))}
    </svg>
  )
}
