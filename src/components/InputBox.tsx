import { Editor } from '@monaco-editor/react';
import { Button, Spinner } from '@/components/ui';

type InputBoxProps = {
  mutate: (json: string) => void;
  isPending: boolean;
  inputJson: string;
  setInputJson: (json: string) => void;
  reset: () => void;
};

export default function InputBox({
  mutate,
  isPending,
  inputJson,
  setInputJson,
  reset,
}: InputBoxProps) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mt-2">JSON Doctor</h1>
      <div className="grid w-full gap-2">
        <p className="text-muted-foreground text-sm my-2">
          Several fixes will be applied to make the JSON valid
        </p>
        <div className="flex space-x-2 mb-2">
          <Button
            disabled={isPending || inputJson.trim() === ''}
            onClick={() => mutate(inputJson)}
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
        />
      </div>
    </div>
  );
}
