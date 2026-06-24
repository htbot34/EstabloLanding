import type { ReactNode } from 'react'
import { Check, CheckCheck, ChevronLeft, FileText, Mic, Play } from 'lucide-react'
import { Waveform } from './ui'

type From = 'worker' | 'establo'

const bubbleBase =
  'relative max-w-[88%] rounded-lg px-3 py-2 text-[13px] leading-snug shadow-sm'
const fromStyles: Record<From, string> = {
  // Worker messages use the muted WhatsApp green; squared bottom-right corner.
  worker: 'ml-auto rounded-br-sm bg-whatsapp text-paper-ink',
  // Establo replies are neutral white; squared bottom-left corner.
  establo: 'mr-auto rounded-bl-sm bg-white text-paper-ink ring-1 ring-paper-ink/5',
}

/** A WhatsApp-style text bubble. */
export function TextBubble({
  from,
  time,
  children,
}: {
  from: From
  time: string
  children: ReactNode
}) {
  return (
    <div className={`${bubbleBase} ${fromStyles[from]}`}>
      {children}
      <Meta from={from} time={time} />
    </div>
  )
}

/** The grounded-answer citation line: FileText + mono source reference. */
export function SourceLine({ children }: { children: ReactNode }) {
  return (
    <span className="mt-2 flex items-center gap-1.5 rounded border border-evergreen/15 bg-evergreen/[0.06] px-2 py-1 font-mono text-[11px] text-evergreen">
      <FileText aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
      <span lang="es">{children}</span>
    </span>
  )
}

/** A WhatsApp-style voice-note bubble: a control glyph, waveform, and duration/label. */
export function VoiceBubble({
  from,
  time,
  duration,
  label,
}: {
  from: From
  time?: string
  duration?: string
  label?: string
}) {
  const Glyph = from === 'worker' ? Mic : Play
  return (
    <div className={`${bubbleBase} ${fromStyles[from]} w-[88%]`}>
      <div className="flex items-center gap-2.5">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-evergreen text-white">
          <Glyph aria-hidden="true" className="h-3.5 w-3.5" fill={from === 'establo' ? 'currentColor' : 'none'} />
        </span>
        <Waveform className="text-evergreen/70" />
        {duration ? <span className="ml-auto font-mono text-[11px] text-muted">{duration}</span> : null}
      </div>
      {label ? (
        <span lang="es" className="mt-1.5 block text-[11px] text-muted">
          {label}
        </span>
      ) : null}
      {time ? <Meta from={from} time={time} /> : null}
    </div>
  )
}

function Meta({ from, time }: { from: From; time: string }) {
  return (
    <span className="mt-1 flex items-center justify-end gap-1 font-mono text-[10px] tabular-nums text-paper-ink/45">
      {time}
      {from === 'worker' ? (
        <CheckCheck aria-hidden="true" className="h-3 w-3 text-evergreen-light" />
      ) : null}
    </span>
  )
}

/**
 * The phone frame — the worker's surface of the hand-off. A device bezel wrapping
 * a WhatsApp-style thread in Spanish: a question, a grounded answer with a cited
 * source, and a voice exchange.
 */
export function Phone({ className = '' }: { className?: string }) {
  return (
    <div
      className={`w-full max-w-[340px] rounded-[2.25rem] border border-paper-ink/15 bg-paper-ink p-2 shadow-phone ${className}`}
    >
      <div className="overflow-hidden rounded-[1.75rem] bg-[#E9E3D5]">
        {/* Chat header */}
        <div className="flex items-center gap-2.5 bg-evergreen px-3 py-2.5 text-white">
          <ChevronLeft aria-hidden="true" className="h-4 w-4 opacity-80" />
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white font-mono text-sm font-medium text-evergreen">
            E
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-medium">Establo</span>
            <span lang="es" className="text-[11px] text-white/70">
              en línea
            </span>
          </span>
        </div>

        {/* Thread */}
        <div className="flex flex-col gap-2 px-3 py-4">
          <TextBubble from="worker" time="14:30">
            <span lang="es">¿Qué hago si una vaca tiene mastitis?</span>
          </TextBubble>

          <TextBubble from="establo" time="14:30">
            <span lang="es">
              Sigue el protocolo de mastitis de tu lechería y avisa al supervisor del turno.
              Te muestro el paso que aplica de tu SOP.
            </span>
            <SourceLine>Fuente: SOP Mastitis · §2</SourceLine>
          </TextBubble>

          <VoiceBubble from="worker" time="14:31" duration="0:08" />

          <VoiceBubble from="establo" time="14:31" label="Respuesta por voz" />

          <span className="mt-1 flex items-center justify-center gap-1.5 font-mono text-[10px] uppercase tracking-wide text-paper-ink/45">
            <Check aria-hidden="true" className="h-3 w-3" />
            <span lang="es">Registrado como capacitación</span>
          </span>
        </div>
      </div>
    </div>
  )
}
