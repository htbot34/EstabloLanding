import { ArrowRight, Check, Download } from 'lucide-react'
import { SectionHeading } from './ui'
import { RecordCard } from './RecordCard'
import { TextBubble } from './Phone'

// The five FARM Animal Care v5 continuing-education areas this period's pack covers.
const CE_AREAS = [
  'Stockmanship',
  'Udder health',
  'Newborn calf care',
  'Non-ambulatory cattle',
  'Fitness for transport',
]

export function Documenta() {
  return (
    <section id="compliance" className="scroll-mt-20 bg-white/40 py-16 sm:py-24">
      <div className="container-x">
        <SectionHeading es="Documenta" en="Document" title="The audit pack writes itself." />

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Every answer, comprehension check, and supervisor sign-off is logged as a training
          event mapped to a FARM Animal Care v5 CE area. Export the whole pack (letter, CSV,
          and per-worker transcripts) in one click.
        </p>

        {/* The micro hand-off: one message becomes one record */}
        <div className="mt-10 rounded-xl border border-paper-edge bg-white/60 p-5 shadow-sm sm:p-8">
          <div className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:gap-6">
            {/* A compact WhatsApp message */}
            <div className="w-full max-w-[300px] rounded-lg bg-[#E9E3D5] p-3">
              <TextBubble from="worker" time="14:30">
                <span lang="es">¿Qué hago si una vaca tiene mastitis?</span>
              </TextBubble>
            </div>

            {/* Connector with the transformation label */}
            <div className="flex shrink-0 flex-col items-center gap-1.5">
              <span className="font-mono text-[11px] uppercase tracking-wide text-muted">
                logged as
              </span>
              <ArrowRight
                aria-hidden="true"
                className="h-5 w-5 rotate-90 text-evergreen lg:rotate-0"
              />
            </div>

            <RecordCard compact className="max-w-[340px]" />
          </div>
        </div>

        {/* The artifact: the exportable FARM v5 training-record pack */}
        <div className="mt-12 flex flex-col items-center">
          <div className="relative w-full max-w-xl">
            {/* Subtle stacked-paper depth */}
            <div
              aria-hidden="true"
              className="absolute -right-2.5 -top-2.5 hidden h-full w-full rounded-md border border-paper-edge bg-paper/60 sm:block"
            />
            <figure className="relative rounded-md border border-paper-edge bg-paper text-paper-ink shadow-sheet">
              {/* Letterhead */}
              <div className="flex items-start justify-between gap-4 border-b border-paper-edge px-6 pb-4 pt-5">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                    FARM Animal Care v5
                  </p>
                  <h3 className="mt-1 text-lg font-semibold leading-snug">Training Record</h3>
                </div>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-evergreen font-mono text-sm font-medium text-white">
                  E
                </span>
              </div>

              {/* Ledger summary lines */}
              <dl className="grid grid-cols-1 divide-y divide-paper-edge px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                <SummaryStat label="Workers" value="14" />
                <SummaryStat label="CE areas covered" value="5/5" />
                <SummaryStat label="Period" value="2026-01 to 2026-06" />
              </dl>

              {/* CE area checklist */}
              <ul className="border-t border-paper-edge px-6 py-4">
                {CE_AREAS.map((area) => (
                  <li
                    key={area}
                    className="flex items-center justify-between gap-3 border-b border-paper-edge/60 py-2 last:border-0"
                  >
                    <span className="text-sm">{area}</span>
                    <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-evergreen">
                      <Check aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={2.5} />
                      Covered
                    </span>
                  </li>
                ))}
              </ul>

              {/* Signature + export footer */}
              <div className="flex flex-col gap-4 border-t border-paper-edge px-6 py-5 sm:flex-row sm:items-end sm:justify-between">
                <div className="w-full max-w-[14rem]">
                  <div className="h-8 border-b border-paper-ink/40" />
                  <p className="mt-1.5 text-xs text-muted">
                    Supervisor signature
                  </p>
                </div>
                <div className="flex items-center gap-2 self-start rounded-md border border-paper-edge bg-white px-3 py-2 text-evergreen sm:self-auto">
                  <Download aria-hidden="true" className="h-4 w-4" />
                  <span className="text-sm font-medium">Export pack</span>
                  <span className="font-mono text-[11px] text-muted">PDF · CSV</span>
                </div>
              </div>
            </figure>
          </div>

          <figcaption className="mt-5 font-mono text-xs uppercase tracking-wide text-muted">
            Illustrative preview.
          </figcaption>
        </div>
      </div>
    </section>
  )
}

function SummaryStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="py-3 sm:px-4 sm:first:pl-0 sm:last:pr-0">
      <dt className="text-[11px] uppercase tracking-wide text-muted">
        {label}
      </dt>
      <dd className="mt-0.5 font-mono text-sm tabular-nums">{value}</dd>
    </div>
  )
}
