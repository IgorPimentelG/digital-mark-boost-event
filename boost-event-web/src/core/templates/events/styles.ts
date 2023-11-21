import styled from 'styled-components';

export const Container = styled.main`
  padding: 48px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 38px;

  & > div {
    display: flex;
    gap: 16px;
  }

  @media (max-width: 530px) {
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    margin-bottom: 28px;
  }
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  margin-bottom: 38px;
  max-height: 850px;
  overflow: auto;
`;

export const Title = styled.h2`
  margin-bottom: 28px;
`;

