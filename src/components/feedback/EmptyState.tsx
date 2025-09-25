import { FeedbackCard } from './FeedbackCard';

interface EmptyStateProps {
  message: string;
}

export function EmptyState({ message }: EmptyStateProps) {
  return (
    <FeedbackCard className="border-slate-800 text-sm text-slate-300">
      {message}
    </FeedbackCard>
  );
}
