import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  border-radius: 12px;
  flex-basis: 1;
  min-width: 274px;

  ${({ theme }) => `
    background-color: #F5F7F8;
    border: 1px solid ${theme.colors['white-shades']['white-99']}
  `};
`;

export const Info = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2px;

  & > span {
    margin-bottom: 12px;
  }
`;

export const Label = styled.label`
  font-size: 12px;
  color: ${({ theme }) => theme.colors['grey-shades']['grey-50']};
`;