import styled from 'styled-components';

export const Container = styled.div`
  & > h1 > span {
    color: ${({ theme }) => theme.colors['blue-shades']['blue-95']};
  }
`;

