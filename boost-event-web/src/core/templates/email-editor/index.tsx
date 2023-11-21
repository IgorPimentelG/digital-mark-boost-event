'use client';

import '@mdxeditor/editor/style.css';
import './content-editor-styles.css';

import { yupResolver } from '@hookform/resolvers/yup';
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
import { useRouter, useSearchParams } from 'next/navigation';
import { FC, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { PiCheckSquareDuotone, PiWarningDuotone } from 'react-icons/pi';

import { Modal } from '@/core/components/layout';
import { Button, Input, Loader, Logo } from '@/core/components/ui';
import { EmailSchema } from '@/core/shared/schemas';
import { emailAPI } from '@/core/shared/services/email';
import { ActionWrap, Container, Header } from './styles';
import { Toolbar } from './toolbar';

type EmailForm = {
  subject: string;
}

const DEFAUL_MODAL_MESSAGE = {
  title: '',
  message: '',
  hasError: false
};

export const EmailEditorTemplate: FC = () => {

  const router = useRouter();
  const searchParams = useSearchParams();
  const editorRef = useRef<MDXEditorMethods>(null);
  const { register } = emailAPI();

  const eventId = searchParams.get('eventId');
  const markdown = searchParams.get('markdown');

  const { control, handleSubmit } = useForm<EmailForm>({
    shouldFocusError: false,
    resolver: yupResolver(EmailSchema)
  });

  const [isLoading, setIsLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState(DEFAUL_MODAL_MESSAGE);

  async function handleSave({ subject }: EmailForm) {
    const markdown = editorRef.current?.getMarkdown();

    if (!markdown) {
      setModalMessage({
        title: 'Sem conteúdo',
        message: 'Informe o conteúdo do e-mail.',
        hasError: true
      });
      return;
    }

    setIsLoading(true);

    try {
      await register({ content: markdown, subject }, eventId!);
      setModalMessage({
        title: 'E-mail registrado',
        message: 'O e-mail foi registrado com sucesso.',
        hasError: false
      });
    } catch {
      setModalMessage({
        title: 'Não foi possível registrar o e-mail',
        message: 'Verifique as informações e tente novamente.',
        hasError: true
      });
    }

    setIsLoading(false);
  }

  return (
    <Container>
      <Header>
        <Logo />
        <Button
          label='Voltar'
          styleType='SECONDARY'
          onClick={() => router.push(`/events/${eventId}`)}
        />
      </Header>

      <MDXEditor
        ref={editorRef}
        markdown={markdown || ''}
        readOnly={!!markdown}
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
              <Toolbar />
            )
          })
        ]}
      />

      {!markdown && (
        <ActionWrap>
          <form onSubmit={handleSubmit(handleSave)}>
            <Input
              name='subject'
              placeholder='Título do e-mail'
              control={control}
            />
            <Button label='Salvar' />
          </form>
        </ActionWrap>
      )}

      {isLoading && <Loader />}
      {modalMessage.message && (
        <Modal
          icon={modalMessage.hasError ? <PiWarningDuotone /> : <PiCheckSquareDuotone />}
          title={modalMessage.title}
          message={modalMessage.message}
          onClose={() => modalMessage.hasError ?
            setModalMessage(DEFAUL_MODAL_MESSAGE) : router.replace(`/events/${eventId}`)}
        />
      )}
    </Container>
  );
};