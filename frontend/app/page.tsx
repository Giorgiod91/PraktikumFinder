import CompanyList from "./components/CompanyList";
import { companies } from "./data/companies";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08080c] text-white">
      {/* Header */}
      <header className="border-b border-white/5 px-5 py-5 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span className="font-mono text-sm font-bold text-orange-400">
            Praktikum<span className="text-white">Finder</span>
          </span>
          <span className="font-mono text-xs text-slate-600">
            Hannover &amp; Umgebung
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-white/5 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 font-mono text-[11px] tracking-[0.2em] text-orange-400 uppercase">
            IHK-bestätigte Betriebe
          </p>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Dein Praktikumsplatz
            <br />
            <span className="bg-gradient-to-br from-[#FF705B] to-[#FFB457] bg-clip-text text-transparent">
              in Hannover.
            </span>
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-500">
            {companies.length} geprüfte Unternehmen im Raum Hannover, die
            Praktikumsplätze für Umschüler anbieten — direkt filtern, Kontakt
            aufnehmen, fertig.
          </p>
        </div>
      </section>

      {/* Company list */}
      <section className="px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <CompanyList />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-5 py-6 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs text-slate-700">
            PraktikumFinder · Alle Angaben ohne Gewähr · IHK-bestätigt
          </p>
        </div>
      </footer>
    </main>
  );
}
