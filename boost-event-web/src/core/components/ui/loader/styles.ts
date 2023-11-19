import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`;

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

export const Spinner = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  animation: ${rotation} 1s linear infinite;
  
  ${({ theme }) => `
    border: 8px solid ${theme.colors['absolute-colors'].white};
    border-bottom-color: ${theme.colors['blue-shades']['blue-99']};
  `};
`;