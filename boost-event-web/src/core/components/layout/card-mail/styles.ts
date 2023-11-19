import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 12px;
  align-items: center;
  width: fit-content;
  border-radius: 12px;
  
  ${({ theme }) => `
    background-color: ${theme.colors['white-shades']['white-15']};
    border: 1px solid ${theme.colors['white-shades']['white-99']}
  `};

  & > div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  & > hr {
    height: 38px;
    border-color: rgba(0, 0, 0, 0.1);
    margin-left: 24px;
  }

  & > button {
    width: 100%;
    padding: 0 8px 0 18px;
  }
`;