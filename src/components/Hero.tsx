import { ArrowRight, FileText, MessageCircle } from 'lucide-react'
import { Phone } from './Phone'
import { RecordCard } from './RecordCard'

export function Hero() {
  return (
    <section id="top" className="relative scroll-mt-20 pb-16 pt-12 sm:pb-24 sm:pt-16">
      <div className="container-x">
        {/* Enrolling badge, sits directly under the nav */}
        <span className="inline-flex items-center gap-2 rounded-full border border-evergreen/25 bg-evergreen/[0.06] py-1 pl-2 pr-3 text-xs font-medium text-evergreen">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-evergreen" />
          Now enrolling pilot dairies in the Magic Valley
        </span>

        <div className="mt-6 max-w-3xl">
          <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
            Every question your crew asks becomes a{' '}
            <span className="text-evergreen">training record</span>.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Establo answers your workers over WhatsApp in Spanish, grounded only in your
            dairy&rsquo;s own SOPs, and logs every exchange as FARM Animal Care v5
            documentation.
          </p>
          <div className="mt-7">
            <a href="#request-a-pilot" className="btn-primary">
              Request a pilot
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* The dual-surface hand-off, the centerpiece */}
        <figure className="mt-12 rounded-xl border border-paper-edge bg-white/50 p-5 shadow-sm sm:mt-14 sm:p-8 lg:p-10">
          <div className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:items-stretch lg:gap-7">
            {/* Worker surface */}
            <div className="flex w-full max-w-[340px] flex-col items-center">
              <SurfaceLabel icon={<MessageCircle aria-hidden="true" className="h-3.5 w-3.5" />}>
                WhatsApp del trabajador
              </SurfaceLabel>
              <Phone />
            </div>

            {/* Connecting cue: horizontal on desktop, vertical (rotated) on mobile */}
            <div className="flex shrink-0 items-center justify-center" aria-hidden="true">
              <span className="flex h-10 w-10 rotate-90 items-center justify-center rounded-full border border-paper-edge bg-white text-evergreen shadow-sm lg:rotate-0">
                <ArrowRight className="h-5 w-5" />
              </span>
            </div>

            {/* Manager surface */}
            <div className="flex w-full max-w-[360px] flex-col items-center self-center">
              <SurfaceLabel icon={<FileText aria-hidden="true" className="h-3.5 w-3.5" />}>
                Expediente FARM v5
              </SurfaceLabel>
              <RecordCard />
            </div>
          </div>

          <figcaption className="mt-6 text-center font-mono text-xs uppercase tracking-wide text-muted">
            Illustrative preview.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

function SurfaceLabel({
  icon,
  children,
}: {
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <span className="mb-3 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
      {icon}
      <span lang="es">{children}</span>
    </span>
  )
}
