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

import { Button } from '@/core/components/ui';
import { ActionWrap } from './styles';

type Props = {
  onSave: () => void;
}

export const Toolbar: FC<Props> = ({ onSave }) => {

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

      <ActionWrap>
        <Button label='Salvar' onClick={onSave} />
      </ActionWrap>
    </>
  );
}