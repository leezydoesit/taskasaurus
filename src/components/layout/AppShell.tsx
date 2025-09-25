import { type PropsWithChildren } from 'react';

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 py-16">
        {children}
      </main>
    </div>
  );
}
