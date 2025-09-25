export function AppHeader() {
  return (
    <header className="space-y-2 text-center sm:text-left">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
        Taskasaurus
      </p>
      <h1 className="text-3xl font-semibold text-slate-100">Todo overview</h1>
      <p className="text-sm text-slate-400">
        A minimal Tailwind UI reading data from JSONPlaceholder.
      </p>
    </header>
  );
}
