'use client';
import JsonEditor from '@/components/JsonEditor';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <JsonEditor />
    </QueryClientProvider>
  );
}
