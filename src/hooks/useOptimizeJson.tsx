import { useState } from 'react';

export type RepairResponse = {
  repaired: any;
  schema: any;
  explanation: string;
};

export const repairJson = async (json: string): Promise<RepairResponse> => {
  const response = await fetch('/api/repair', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ json }),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to repair JSON');
  }
  return response.json();
};
export default function useOptimizeJson() {
  const [inputJson, setInputJson] = useState<string>('');

  return {
    inputJson,
    setInputJson,
  };
}
