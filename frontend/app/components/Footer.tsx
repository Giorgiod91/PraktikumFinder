export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600">
            <span className="text-xs font-bold text-white">P</span>
          </div>
          <span className="text-sm font-bold">
            <span className="text-blue-600">Praktikum</span>
            <span className="text-gray-900">Finder</span>
          </span>
        </div>

        <div className="flex flex-col gap-1 sm:items-end">
          <p className="text-xs text-gray-400">
            Alle Angaben ohne Gewähr · IHK-bestätigt
          </p>
          <p className="text-xs text-gray-300">
            © {new Date().getFullYear()} PraktikumFinder
          </p>
        </div>
      </div>
    </footer>
  );
}
