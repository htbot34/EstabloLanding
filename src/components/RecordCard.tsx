import { Check, FileText } from 'lucide-react'
import { Chip } from './ui'

/**
 * The training-record card: the manager-side surface of the hand-off.
 * Same record content appears in the hero and again in the Documenta section,
 * because it is literally the same record crossing from the phone to the ledger.
 */
export function RecordCard({
  compact = false,
  className = '',
}: {
  compact?: boolean
  className?: string
}) {
  const rowPad = compact ? 'py-2' : 'py-2.5'
  return (
    <figure
      className={`w-full overflow-hidden rounded-md border border-paper-edge bg-paper text-paper-ink shadow-card ${className}`}
    >
      {/* Document header band */}
      <div className="flex items-center justify-between gap-3 border-b border-paper-edge bg-paper-ink/[0.03] px-4 py-2.5">
        <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          <FileText aria-hidden="true" className="h-3.5 w-3.5" />
          Training record
        </span>
        <span className="font-mono text-[11px] text-muted">Establo</span>
      </div>

      <dl className="divide-y divide-paper-edge px-4">
        <Row label="Worker" pad={rowPad}>
          <span>Juan M.</span>
        </Row>
        <Row label="Topic" pad={rowPad}>
          <span>Udder health</span>
        </Row>
        <Row label="Program" pad={rowPad}>
          <Chip tone="evergreen">FARM v5 CE · Animal Care</Chip>
        </Row>
        <Row label="Date" pad={rowPad} mono>
          2026-06-23 14:32
        </Row>
        <Row label="Record" pad={rowPad} mono>
          TRN-04821
        </Row>
        <Row label="Status" pad={rowPad}>
          <span className="inline-flex items-center gap-1.5 font-medium text-evergreen">
            <Check aria-hidden="true" className="h-4 w-4" strokeWidth={2.5} />
            Logged
          </span>
        </Row>
      </dl>
    </figure>
  )
}

function Row({
  label,
  children,
  pad,
  mono = false,
}: {
  label: string
  children: React.ReactNode
  pad: string
  mono?: boolean
}) {
  return (
    <div className={`flex items-baseline justify-between gap-4 ${pad}`}>
      <dt className="shrink-0 text-xs uppercase tracking-wide text-muted">{label}</dt>
      <dd className={`text-right text-sm ${mono ? 'font-mono tabular-nums' : ''}`}>{children}</dd>
    </div>
  )
}
