import { Editor } from '@monaco-editor/react';
import { Button, Spinner } from '@/components/ui';
import { toast } from 'sonner';

type InputBoxProps = {
    mutate: (json: string) => void;
    isPending: boolean;
    isValidJson: boolean;
    inputJson: string;
    setInputJson: (json: string) => void;
    reset: () => void;
};

export default function InputBox({
    mutate,
    isPending,
    isValidJson,
    inputJson,
    setInputJson,
    reset,
}: InputBoxProps) {
    const handleClick = () => {
        if (isValidJson) {
            return { type: 'valid', repaired: JSON.parse(inputJson) };
        }
        mutate(inputJson)
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mt-2">JSON Doctor</h1>
            <div className="grid w-full gap-2">
                <p className="text-muted-foreground text-sm my-2">
                    Several fixes will be applied to make the JSON valid
                </p>
                <div className="flex space-x-2 mb-2">
                    <Button
                        disabled={isPending || inputJson.trim() === '' || isValidJson}
                        onClick={handleClick}
                    >
                        {isPending ? (
                            <>
                                <Spinner /> Repairing
                            </>
                        ) : (
                            'Repair JSON'
                        )}
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => {
                            reset();
                            setInputJson('');
                        }}
                    >
                        Clear
                    </Button>
                </div>
                <Editor
                    height="96vh"
                    defaultLanguage="json"
                    value={inputJson}
                    onChange={(value) => setInputJson(value || '')}
                    options={{ formatOnPaste: true }}
                    loading={isPending}
                />
            </div>
        </div>
    );
}
