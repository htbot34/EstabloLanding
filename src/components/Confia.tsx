import type { ReactNode } from 'react'
import { Ban, FileLock, Stamp, UserCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Chip, SectionHeading } from './ui'

const POINTS: { icon: LucideIcon; title: string; body: ReactNode }[] = [
  {
    icon: Ban,
    title: 'No invented answers.',
    body: 'If it isn’t in your SOPs, it doesn’t guess. It routes the question to a supervisor.',
  },
  {
    icon: UserCheck,
    title: 'Workers opt in themselves.',
    body: (
      <>
        They text <Chip tone="consent" className="mx-0.5 align-middle">ALTA</Chip> to start and{' '}
        <Chip tone="consent" className="mx-0.5 align-middle">BAJA</Chip> to stop. The dashboard
        can’t override a worker’s <Chip tone="consent" className="mx-0.5 align-middle">BAJA</Chip>.
      </>
    ),
  },
  {
    icon: FileLock,
    title: 'A plain-Spanish privacy notice on first contact.',
    body: 'Workers know exactly what’s recorded before anything is.',
  },
  {
    icon: Stamp,
    title: 'A human signs off.',
    body: 'Supervisors confirm completions, so nothing rides on the bot alone.',
  },
]

const CONSENT_CODES: { code: string; gloss: string }[] = [
  { code: 'ALTA', gloss: 'start' },
  { code: 'BAJA', gloss: 'stop' },
  { code: 'ACEPTO', gloss: 'sign the agreement' },
]

export function Confia() {
  return (
    <section id="trust" className="scroll-mt-20 py-16 sm:py-24">
      <div className="container-x">
        <SectionHeading
          es="Confía"
          en="Trust"
          title="Putting an AI in front of your crew, carefully."
        />

        <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {POINTS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex gap-4 border-t border-paper-edge pt-6">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-evergreen/[0.08] text-evergreen">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-paper-ink">{title}</h3>
                <p className="mt-1.5 leading-relaxed text-muted">{body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Consent vocabulary rendered as the mono codes workers actually text */}
        <div className="mt-10 rounded-lg border border-paper-edge bg-white p-5 sm:p-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            Worker consent
          </p>
          <ul className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
            {CONSENT_CODES.map(({ code, gloss }) => (
              <li key={code} className="flex items-center gap-2.5">
                <Chip tone="consent">{code}</Chip>
                <span className="text-sm text-muted">{gloss}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
