import React from 'react';
import { IconCode } from '@tabler/icons-react';
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui';

const JsonEmptyState: React.FC = React.memo(() => (
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <IconCode />
      </EmptyMedia>
      <EmptyTitle>No JSON Provided</EmptyTitle>
      <EmptyDescription>
        Paste your JSON in the editor and click <b>Repair JSON</b> to see the
        results here.
      </EmptyDescription>
    </EmptyHeader>
  </Empty>
));

export default JsonEmptyState;
