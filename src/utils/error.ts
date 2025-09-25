export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message || 'Something went wrong.';
  }

  if (typeof error === 'string') {
    return error || 'Something went wrong.';
  }

  return 'Something went wrong.';
}
