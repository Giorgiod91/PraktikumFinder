export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5 px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-orange-500/15 ring-1 ring-orange-500/30">
            <span className="text-[10px] font-bold text-orange-400">P</span>
          </div>
          <span className="font-mono text-xs font-bold">
            <span className="text-orange-400">Praktikum</span>
            <span className="text-white/60">Finder</span>
          </span>
        </div>

        <div className="flex flex-col gap-1 sm:items-end">
          <p className="font-mono text-[11px] text-slate-700">
            Alle Angaben ohne Gewähr · IHK-bestätigt
          </p>
          <p className="font-mono text-[11px] text-slate-800">
            © {new Date().getFullYear()} PraktikumFinder
          </p>
        </div>
      </div>
    </footer>
  );
}
