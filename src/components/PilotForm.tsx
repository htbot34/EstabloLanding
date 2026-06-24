import { useForm, ValidationError } from '@formspree/react'
import { ArrowRight, Check, ShieldCheck } from 'lucide-react'

const HERD_SIZES = ['Under 500', '500–1,000', '1,000–2,500', '2,500–5,000', '5,000+']
const ROLES = ['Owner', 'Herd manager', 'Compliance / Records', 'Other']

const inputClass =
  'w-full rounded-md border border-paper-edge bg-white px-3 py-2.5 text-sm text-body shadow-sm transition-colors placeholder:text-muted/60 focus:border-evergreen'
const labelClass = 'mb-1.5 block text-sm font-medium text-paper-ink'

export function PilotForm() {
  // TODO(Henry): paste your real Formspree form ID below (the 8-character code at the
  // end of your form endpoint, e.g. https://formspree.io/f/mzzgabcd -> "mzzgabcd").
  const [state, handleSubmit] = useForm('YOUR_FORMSPREE_ID')

  return (
    <section id="request-a-pilot" className="scroll-mt-20 bg-white/40 py-16 sm:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Persuasion column */}
        <div className="lg:pt-2">
          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-paper-ink sm:text-[2rem]">
            Run Establo on your dairy.
          </h2>
          <p className="mt-4 max-w-prose text-lg leading-relaxed text-muted">
            A two-week pilot. We set it up around your SOPs. You see exactly what your crew
            uses, and what the audit pack looks like.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              'We load your SOPs and onboarding curriculum.',
              'Your crew uses it on WhatsApp for two weeks.',
              'You review the FARM v5 audit pack it produced.',
            ].map((line) => (
              <li key={line} className="flex items-start gap-2.5 text-body">
                <Check
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-evergreen"
                  strokeWidth={2.5}
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 flex items-center gap-2 text-sm text-muted">
            <ShieldCheck aria-hidden="true" className="h-4 w-4 text-evergreen" />
            Workers opt in themselves. You stay in control.
          </p>
        </div>

        {/* Form column */}
        <div className="rounded-xl border border-paper-edge bg-white p-6 shadow-card sm:p-8">
          {state.succeeded ? (
            <Confirmation />
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" aria-label="Request a pilot">
              {/* Friendly subject line for the email Henry receives */}
              <input type="hidden" name="_subject" value="New Establo pilot request" />

              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="firstName" label="First name" required>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    autoComplete="given-name"
                    className={inputClass}
                  />
                </Field>
                <Field id="lastName" label="Last name" required>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    autoComplete="family-name"
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="email" label="Email" required>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={inputClass}
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="mt-1.5 text-sm text-red-700"
                  />
                </Field>
                <Field id="phone" label="Phone">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="dairyName" label="Dairy name">
                  <input
                    id="dairyName"
                    name="dairyName"
                    type="text"
                    autoComplete="organization"
                    className={inputClass}
                  />
                </Field>
                <Field id="location" label="Location" hint="City / county">
                  <input
                    id="location"
                    name="location"
                    type="text"
                    autoComplete="address-level2"
                    placeholder="e.g. Twin Falls, ID"
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="herdSize" label="Herd size">
                  <select id="herdSize" name="herdSize" defaultValue="" className={inputClass}>
                    <option value="">Select…</option>
                    {HERD_SIZES.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field id="role" label="Your role">
                  <select id="role" name="role" defaultValue="" className={inputClass}>
                    <option value="">Select…</option>
                    {ROLES.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              {state.errors ? (
                <p role="alert" className="rounded-md border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-700">
                  Something went wrong sending your request. Please try again, or email{' '}
                  <a className="underline" href="mailto:henrylachtur@gmail.com">
                    henrylachtur@gmail.com
                  </a>
                  .
                </p>
              ) : null}

              <button
                type="submit"
                disabled={state.submitting}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {state.submitting ? 'Sending…' : 'Request a pilot'}
                {!state.submitting ? <ArrowRight aria-hidden="true" className="h-4 w-4" /> : null}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  required = false,
  hint,
  children,
}: {
  id: string
  label: string
  required?: boolean
  hint?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required ? (
          <span aria-hidden="true" className="ml-0.5 text-evergreen">
            *
          </span>
        ) : null}
        {hint ? <span className="ml-2 font-normal text-muted">{hint}</span> : null}
      </label>
      {children}
    </div>
  )
}

function Confirmation() {
  return (
    <div className="flex h-full flex-col items-center justify-center py-8 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-evergreen/[0.1] text-evergreen">
        <Check aria-hidden="true" className="h-6 w-6" strokeWidth={2.5} />
      </span>
      <h3 className="mt-4 text-xl font-semibold text-paper-ink">Request received.</h3>
      <p className="mt-2 max-w-sm text-muted">
        Henry will reach out personally to set up your pilot.
      </p>
    </div>
  )
}
