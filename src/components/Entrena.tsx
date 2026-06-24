import { GraduationCap, MessagesSquare } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SectionHeading } from './ui'
import { VoiceBubble } from './Phone'

const BLOCKS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: GraduationCap,
    title: 'Spanish onboarding curriculum',
    body: 'New hires get a 2–3 week curriculum, one short question at a time, with comprehension checks that grade automatically.',
  },
  {
    icon: MessagesSquare,
    title: 'Real-time Q&A',
    body: 'Workers text or send a voice note and get an answer grounded in your SOPs, with the source cited. In seconds, in Spanish.',
  },
]

export function Entrena() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-16 sm:py-24">
      <div className="container-x">
        <SectionHeading
          es="Entrena"
          en="Train"
          title="Onboarding that doesn’t pull a manager off the floor."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {BLOCKS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-lg border border-paper-edge bg-white p-6 shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-evergreen/[0.08] text-evergreen">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-paper-ink">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{body}</p>
            </div>
          ))}
        </div>

        {/* Voice beat. The audience is voice-preferring and low-literacy. */}
        <div className="mt-5 grid items-center gap-7 rounded-lg bg-evergreen px-6 py-8 text-white sm:px-10 md:grid-cols-2">
          <div>
            <p lang="es" className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Pregunta por voz. Responde por voz.
            </p>
            <p lang="en" className="mt-2 text-white/70">
              Ask by voice. Answer by voice.
            </p>
          </div>
          <div className="flex justify-start md:justify-end">
            <div className="w-full max-w-[280px]">
              <VoiceBubble from="establo" label="Respuesta por voz" duration="0:11" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
