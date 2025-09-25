import { FeedbackCard } from './FeedbackCard';

interface LoadingStateProps {
  message?: string;
}

export function LoadingState({ message = 'Loading…' }: LoadingStateProps) {
  return (
    <FeedbackCard className="border-slate-800">
      <div className="flex items-center gap-3 text-sm text-slate-400">
        <span className="h-3 w-3 animate-pulse rounded-full bg-slate-500" />
        {message}
      </div>
    </FeedbackCard>
  );
}
