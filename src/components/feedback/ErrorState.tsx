import { FeedbackCard } from './FeedbackCard';

interface ErrorStateProps {
  title?: string;
  description: string;
}

export function ErrorState({
  title = 'Something went wrong',
  description,
}: ErrorStateProps) {
  return (
    <FeedbackCard className="border-rose-500/30 bg-rose-950/40">
      <h2 className="text-base font-semibold text-rose-100">{title}</h2>
      <p className="mt-2 text-sm text-rose-100/80">{description}</p>
    </FeedbackCard>
  );
}
