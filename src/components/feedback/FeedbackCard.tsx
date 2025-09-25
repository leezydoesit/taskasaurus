import { type PropsWithChildren } from 'react';

interface FeedbackCardProps extends PropsWithChildren {
  className?: string;
}

export function FeedbackCard({ children, className }: FeedbackCardProps) {
  const classes = ['rounded-xl border bg-slate-900/50 p-6', className]
    .filter(Boolean)
    .join(' ');

  return <section className={classes}>{children}</section>;
}
