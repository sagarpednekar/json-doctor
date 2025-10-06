'use client';
import useOptimizeJson, {
  repairJson,
  RepairResponse,
} from '@/hooks/useOptimizeJson';
import { useMutation } from '@tanstack/react-query';
import { InputBox, PreviewTab } from '@/components';

export default function JsonEditor() {
  const { inputJson, setInputJson, isValidJson } = useOptimizeJson();

  const { mutate, isPending, isError, error, data, reset } = useMutation<
    RepairResponse | null,
    Error,
    string
  >({
    mutationFn: repairJson,
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Text Area Input */}
      <InputBox
        mutate={mutate}
        isPending={isPending}
        inputJson={inputJson}
        setInputJson={setInputJson}
        reset={reset}
        isValidJson={isValidJson}
      />
      {/* Json Preview */}
      <PreviewTab
        isPending={isPending}
        isError={isError}
        error={error}
        data={data}
        isValidJson={isValidJson}
        inputJson={inputJson}
      />
    </div>
  );
}
