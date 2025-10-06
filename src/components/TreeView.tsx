import React from 'react';
import JsonView from '@uiw/react-json-view';
import { Button, Spinner } from '@/components/ui';
import { JsonEmptyState } from '@/components';

type JsonTreeViewProps = {
  isPending: boolean;
  isError: boolean;
  error: Error | null;
  data:
    | {
        repaired: any;
        schema: any;
        explanation: string;
      }
    | null
    | undefined;
};

const JsonTreeView: React.FC<JsonTreeViewProps> = React.memo(
  ({ isPending, isError, error, data }) => (
    <div>
      {isPending && (
        <div className="flex justify-center">
          <Button variant="outline" disabled size="sm">
            <Spinner /> Please wait
          </Button>
        </div>
      )}
      {isError && <p className="text-red-500">Error: {error?.message}</p>}
      {data?.repaired && !isPending ? (
        <div>
          <h3 className="text-lg font-semibold mb-2">Repaired JSON:</h3>
          <JsonView
            value={data.repaired}
            displayDataTypes={false}
            displayObjectSize={false}
            style={{ fontSize: '14px' }}
          />
        </div>
      ) : (
        <JsonEmptyState />
      )}
    </div>
  ),
);

export default JsonTreeView;
