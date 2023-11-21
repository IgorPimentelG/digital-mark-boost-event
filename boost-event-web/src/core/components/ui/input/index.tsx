'use client';

import { ComponentProps, FC, useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import { Container, Error, Field, FieldWrap } from './styles';

type FieldProps = Omit<ComponentProps<typeof Field>, 'mask'>;
type Props = FieldProps & {
  name: string;
  label?: string;
  control: Control<any, any>;
  mask?: string;
}

export const Input: FC<Props> = ({ name, label, control, mask, ...rest }) => {

  const [showText, setShowText] = useState(false);
  const isSecure = rest.type === 'password';

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=''
      render={({ field, fieldState: { error } }) => (
        <Container>
          {label && (
            <label htmlFor={label}>
              {label}
            </label>
          )}

          <FieldWrap>
            <Field
              {...rest}
              {...field}
              id={label}
              name={name}
              mask={mask || ""}
              type={isSecure && showText ? 'text' : rest.type}
            />

            <button
              type='button'
              onClick={() => setShowText(state => !state)}
            >
              {isSecure && (
                <>
                  {showText ? <FiEye /> : <FiEyeOff />}
                </>
              )}
            </button>
          </FieldWrap>

          {error && (
            <Error>{error.message}</Error>
          )}
        </Container>
      )}
    />
  );
};