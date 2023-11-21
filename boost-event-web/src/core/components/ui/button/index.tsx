'use client';

import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import { Container } from './styles';

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  label: string;
  styleType?: 'PRIMARY' | 'SECONDARY';
}

export const Button: FC<Props> = ({ label, styleType = 'PRIMARY', ...rest }) => {
  return (
    <Container {...rest} data-variant={styleType}>
      <span>{label}</span>
    </Container>
  );
};