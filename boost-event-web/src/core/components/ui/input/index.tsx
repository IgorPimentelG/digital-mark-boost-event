"use client";

import { ComponentProps, FC, useState } from 'react';
import { FiEye, FiEyeOff } from "react-icons/fi";

import { Container, Error, Field, FieldWrap } from './styles';

type FieldProps = Omit<ComponentProps<typeof Field>, 'mask'>;
type Props = FieldProps & {
  label: string;
  error?: string;
  mask?: string;
}

export const Input: FC<Props> = ({ label, mask, error, ...rest }) => {

  const [showText, setShowText] = useState(false);
  const isSecure = rest.type === 'password';

  return (
    <Container>
      <label htmlFor={label}>
        {label}
      </label>

      <FieldWrap>
        <Field
          {...rest}
          id={label}
          type={isSecure && showText ? 'text' : rest.type}
          mask={mask || ""}
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
        <Error>{error}</Error>
      )}
    </Container>
  );
}