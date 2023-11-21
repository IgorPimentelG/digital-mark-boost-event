import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.9); 
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  border-radius: 12px;
  max-width: 300px;
  text-align: center;

  ${({ theme }) => `
    background-color: ${theme.colors['absolute-colors'].white};
  `};

  & > svg {
    font-size: 38px;
    margin-bottom: 16px;
  }

  & > p {
    margin-top: 8px;
    margin-bottom: 16px;
  }
`;
