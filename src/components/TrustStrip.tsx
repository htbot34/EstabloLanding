import { ClipboardCheck, MessageCircle, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const ANCHORS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: ShieldCheck,
    title: 'Grounded only in your SOPs',
    body: 'Every answer cites the procedure it came from. If it’s not in your documents, it doesn’t guess.',
  },
  {
    icon: MessageCircle,
    title: 'Runs on WhatsApp',
    body: 'No app, no logins, no passwords. The phone your crew already uses.',
  },
  {
    icon: ClipboardCheck,
    title: 'Built around FARM Animal Care v5',
    body: 'Every interaction maps to a continuing-education area.',
  },
]

export function TrustStrip() {
  return (
    <section aria-label="What Establo guarantees" className="border-y border-paper-edge bg-white/40">
      <div className="container-x grid divide-y divide-paper-edge sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {ANCHORS.map(({ icon: Icon, title, body }) => (
          <div key={title} className="flex gap-3.5 py-7 sm:px-6 sm:first:pl-0 sm:last:pr-0">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-evergreen/[0.08] text-evergreen">
              <Icon aria-hidden="true" className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-[15px] font-semibold text-paper-ink">{title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
