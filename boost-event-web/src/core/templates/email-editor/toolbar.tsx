import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  CodeToggle,
  CreateLink,
  InsertCodeBlock,
  InsertTable,
  InsertThematicBreak,
  ListsToggle,
  UndoRedo,
} from '@mdxeditor/editor';
import { FC } from 'react';

export const Toolbar: FC = () => {

  const Separator = () => (
    <div data-orientation="vertical" aria-orientation="vertical" role="separator" />
  );

  return (
    <>
      <UndoRedo />
      <Separator />
      <BoldItalicUnderlineToggles />
      <CodeToggle />
      <Separator />
      <ListsToggle />
      <Separator />
      <CreateLink />
      <InsertTable />
      <InsertCodeBlock />
      <InsertThematicBreak />
      <Separator />
      <BlockTypeSelect />
    </>
  );
}