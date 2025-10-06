import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { RepairResponse } from '@/hooks/useOptimizeJson';
import { JsonTreeView, JsonCodePreview } from '@/components';

type JsonPreviewProps = {
  isPending: boolean;
  isError: boolean;
  error: Error | null;
  data: RepairResponse | null | undefined;
};

enum TAB_PREVIEW_TYPE {
  TREE_VIEW = 'tree-view',
  PREVIW = 'preview',
  SCHEMA_VIEW = 'schema-view',
}

export default function JsonPreview({
  isPending,
  isError,
  error,
  data,
}: JsonPreviewProps) {
  return (
    <div className="p-4 border border-gray-300  m-3">
      <Tabs defaultValue={TAB_PREVIEW_TYPE.PREVIW} className="w-full">
        <TabsList>
          <TabsTrigger value={TAB_PREVIEW_TYPE.PREVIW}>
            Preview JSON
          </TabsTrigger>
          <TabsTrigger value={TAB_PREVIEW_TYPE.TREE_VIEW}>
            Tree view
          </TabsTrigger>
          <TabsTrigger value={TAB_PREVIEW_TYPE.SCHEMA_VIEW}>
            Schema View
          </TabsTrigger>
        </TabsList>
        <TabsContent value={TAB_PREVIEW_TYPE.TREE_VIEW} className="h-90vh">
          <JsonTreeView
            isPending={isPending}
            isError={isError}
            error={error}
            data={data}
          />
        </TabsContent>
        <TabsContent value={TAB_PREVIEW_TYPE.PREVIW}>
          <JsonCodePreview
            isPending={isPending}
            isError={isError}
            error={error}
            data={data?.repaired}
          />
        </TabsContent>
        <TabsContent value={TAB_PREVIEW_TYPE.SCHEMA_VIEW} className="h-90vh">
          <JsonCodePreview
            isPending={isPending}
            isError={isError}
            error={error}
            data={data?.schema}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
