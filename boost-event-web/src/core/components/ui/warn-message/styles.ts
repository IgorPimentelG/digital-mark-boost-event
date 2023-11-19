import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  gap: 8px;
  color: ${({ theme }) => theme.colors['grey-shades']['grey-70']};
`;