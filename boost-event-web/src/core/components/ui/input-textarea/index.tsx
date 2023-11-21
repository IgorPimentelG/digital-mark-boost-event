"use client";

import { DetailedHTMLProps, FC, TextareaHTMLAttributes } from 'react';
import { Control, Controller } from 'react-hook-form';

import { Container, Error, Field } from './styles';

type Props = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & {
  name: string;
  label: string;
  control: Control<any, any>;
}

export const InputTextarea: FC<Props> = ({ name, label, control, ...rest }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={(({ field, fieldState: { error } }) => (
        <Container>
          <label htmlFor={label}>
            {label}
          </label>

          <Field {...rest} {...field} id={label} />

          {error && (
            <Error>{error.message}</Error>
          )}
        </Container>
      ))}
    />
  );
};