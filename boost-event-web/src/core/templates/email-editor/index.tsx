'use client';

import '@mdxeditor/editor/style.css';
import './content-editor-styles.css';

import {
  MDXEditor,
  MDXEditorMethods,
  headingsPlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  quotePlugin,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin
} from '@mdxeditor/editor';
import { useRouter } from 'next/navigation';
import { FC, useRef } from 'react';

import { Button, Logo } from '@/core/components/ui';
import { Container, Header } from './styles';
import { Toolbar } from './toolbar';

export const EmailEditorTemplate: FC = () => {

  const router = useRouter();
  const editorRef = useRef<MDXEditorMethods>(null);

  function handleSave() {
    const markdown = editorRef.current?.getMarkdown();
    console.log("🚀 ~ file: index.tsx:32 ~ handleSave ~ markdown:", markdown);
  }

  return (
    <Container>
      <Header>
        <Logo />
        <Button label='Voltar' styleType='SECONDARY' onClick={() => router.push('/event-details')} />
      </Header>

      <MDXEditor
        ref={editorRef}
        markdown=''
        contentEditableClassName='content-editor'
        plugins={[
          headingsPlugin(),
          quotePlugin(),
          listsPlugin(),
          linkPlugin(),
          linkDialogPlugin(),
          tablePlugin(),
          thematicBreakPlugin(),
          toolbarPlugin({
            toolbarContents: () => (
              <Toolbar onSave={handleSave} />
            )
          })
        ]}
      />
    </Container>
  );
};