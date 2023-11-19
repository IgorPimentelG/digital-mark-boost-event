"use client";

import { DetailedHTMLProps, FC, TextareaHTMLAttributes } from 'react';

import { Container, Error, Field } from './styles';

type Props = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & {
  label: string;
  error?: string;
}

export const InputTextarea: FC<Props> = ({ label, error, ...rest }) => {
  return (
    <Container>
      <label htmlFor={label}>
        {label}
      </label>

      <Field {...rest} id={label} />

      {error && (
        <Error>{error}</Error>
      )}
    </Container>
  );
};