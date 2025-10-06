import React from 'react';
import { Editor } from '@monaco-editor/react';
import { Button, Spinner } from '@/components/ui';
import { JsonEmptyState } from '@/components';

type JsonCodePreviewProps = {
  isPending: boolean;
  isError: boolean;
  error: Error | null;
  data: Record<string, any> | null | undefined;
};

const JsonCodePreview: React.FC<JsonCodePreviewProps> = React.memo(
  ({ isPending, isError, error, data }) => (
    <div>
      {isPending ? (
        <div className="flex justify-center">
          <Button variant="outline" disabled size="sm">
            <Spinner /> Please wait
          </Button>
        </div>
      ) : null}
      {isError && <p className="text-red-500">Error: {error?.message}</p>}
      {data ? (
        <Editor
          height="90vh"
          defaultLanguage="json"
          value={JSON.stringify(data, null, 2)}
          options={{ formatOnPaste: true }}
        />
      ) : null}
      {!data && !isPending ? <JsonEmptyState /> : null}
    </div>
  ),
);

export default JsonCodePreview;
