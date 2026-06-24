export function Footer() {
  return (
    <footer className="border-t border-paper-edge bg-page">
      <div className="container-x flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <p className="font-sans text-lg font-semibold tracking-tight text-evergreen">Establo</p>
          <p className="mt-1 text-sm text-muted">
            Spanish-first SOP training and FARM Animal Care v5 records for dairies.
          </p>
        </div>

        <address className="not-italic">
          <p className="text-sm font-medium text-paper-ink">Henry Turcotte</p>
          <p className="text-sm text-muted">Founder, Establo</p>
          <p className="mt-2">
            <a
              href="mailto:henrylachtur@gmail.com"
              className="text-sm text-muted transition-colors hover:text-evergreen"
            >
              henrylachtur@gmail.com
            </a>
          </p>
          <p className="mt-1">
            <a
              href="tel:+12089948295"
              className="font-mono text-sm tabular-nums text-muted transition-colors hover:text-evergreen"
            >
              (208) 994-8295
            </a>
          </p>
        </address>
      </div>

      <div className="border-t border-paper-edge">
        <div className="container-x py-5">
          <p className="font-mono text-xs text-muted">© 2026 Establo</p>
        </div>
      </div>
    </footer>
  )
}
