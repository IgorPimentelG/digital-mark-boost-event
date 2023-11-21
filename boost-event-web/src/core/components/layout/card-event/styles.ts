import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  border-radius: 12px;
  flex-basis: 1;
  min-width: 274px;

  ${({ theme }) => `
    background-color: ${theme.colors['white-shades']['white-15']};
    border: 1px solid ${theme.colors['white-shades']['white-99']}
  `};
`;

export const Info = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2px;

  & > span {
    margin-bottom: 12px;
    max-width: 240px;
  }
`;

export const ActionWrap = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
`;