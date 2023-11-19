import styled from 'styled-components';

export const Container = styled.button`
  border-radius: 12px;
  font-weight: 600;
  transition: all .3s;
  width: 100%;

  ${({ theme }) => `
    &[data-style-type='PRIMARY'] {
      padding: 16px 28px;
      color: ${theme.colors['absolute-colors'].white};
      background-color: ${theme.colors['blue-shades']['blue-95']};
      letter-spacing: 1px;
      
      &:hover {
        background-color: ${theme.colors['blue-shades']['blue-99']};
      }
    }

    &[data-style-type='SECONDARY'] {
      font-size: 16px;
      color: ${theme.colors['blue-shades']['blue-60']};
      width: fit-content;

      &:hover {
        transform: scale(1.07);
      }
    }  
  `};
`;