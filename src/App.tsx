import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { TrustStrip } from './components/TrustStrip'
import { Entrena } from './components/Entrena'
import { Documenta } from './components/Documenta'
import { Confia } from './components/Confia'
import { PilotForm } from './components/PilotForm'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-md focus:bg-evergreen focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <TrustStrip />
        <Entrena />
        <Documenta />
        <Confia />
        <PilotForm />
      </main>
      <Footer />
    </>
  )
}
