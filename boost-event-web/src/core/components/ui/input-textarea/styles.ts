import InputMask from 'react-input-mask';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > label {
    font-size: 16px;
    font-weight: 600;
  }
`;

export const Field = styled.textarea`
  font-size: 16px;
  border-radius: 16px;
  padding: 12px;
  outline: none;
  resize: none;

  ${({ theme }) => `
    border: 1px solid ${theme.colors['grey-shades']['grey-50']};
    color: ${theme.colors['grey-shades']['grey-70']};

    &::placeholder {
      color: ${theme.colors['grey-shades']['grey-50']};
    }

    &:focus {
      border-color: ${theme.colors['blue-shades']['blue-60']};
    }
  `};
`;

export const Error = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors['absolute-colors'].red};
`;