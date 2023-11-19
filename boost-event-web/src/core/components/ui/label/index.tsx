import { FC } from 'react';
import { Text } from './styles';

type Props = {
  text: string;
}

export const Label: FC<Props> = ({ text }) => {
  return (
    <Text>{text}</Text>
  );
};