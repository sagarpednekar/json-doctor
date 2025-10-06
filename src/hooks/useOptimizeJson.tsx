import { useEffect, useState } from 'react';
import * as Sentry from "@sentry/nextjs"
import { isValidJSON } from '@/lib/utils';
import { toast } from 'sonner';

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
        Sentry.captureException(errorData.error || 'Failed to repair JSON')
        throw new Error(errorData.error || 'Failed to repair JSON');
    }
    return response.json();
};
export default function useOptimizeJson() {
    const [inputJson, setInputJson] = useState<string>('');
    const [isValidJson, setIsValidJson] = useState(false)

    useEffect(() => {
        if (inputJson.trim() !== "") {
            const { valid } = isValidJSON(inputJson)
            setIsValidJson(valid)
            if(valid) toast("Your JSON is already Parsed!")
        }
        return () => {
            setIsValidJson(false)
        }
    }, [inputJson])

    return {
        inputJson,
        setInputJson,
        isValidJson
    };
}
