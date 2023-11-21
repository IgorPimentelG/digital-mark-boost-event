import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  width: 300px;
  height: fit-content;
  border-radius: 12px;
  
  ${({ theme }) => `
    background-color: ${theme.colors['white-shades']['white-15']};
    border: 1px solid ${theme.colors['white-shades']['white-99']}
  `};

  & > div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    & > div {
      display: flex;
      flex-direction: column;
      gap: 4px;

      & > span {
      max-width: 250px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    }
  }

  & > hr {
    margin: 12px 0;
    width: 100%;
    border-color: rgba(0, 0, 0, 0.1);
  }

  & > button {
    width: 100% !important;
    text-align: center;
  }
`;