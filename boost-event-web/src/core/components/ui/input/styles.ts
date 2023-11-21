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

export const FieldWrap = styled.div`
  display: flex;
  align-items: center;
  border-radius: 16px;
  padding: 12px;

  ${({ theme }) => `
    border: 1px solid ${theme.colors['grey-shades']['grey-50']};
    background-color: ${theme.colors['absolute-colors'].white};

    & > button {
      color: ${theme.colors['grey-shades']['grey-70']};
    }

    &:focus-within {
      border-color: ${theme.colors['blue-shades']['blue-60']};
    }
  `};
`;

export const Field = styled(InputMask)`
  display: flex;
  flex: 1;
  font-size: 16px;
  border: none;

  ${({ theme }) => `
    color: ${theme.colors['grey-shades']['grey-70']};

    &::placeholder {
      color: ${theme.colors['grey-shades']['grey-50']};
    }
  `};

  &[type=password]::-ms-reveal,
  &[typeMeta=password]::-ms-clear {
    display: none;
  }
`;

export const Error = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors['absolute-colors'].red};
`;