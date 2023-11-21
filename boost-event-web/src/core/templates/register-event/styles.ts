import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 48px;

  @media (max-width: 400px) {
    padding: 48px 24px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 38px;

  @media (max-width: 530px) {
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    margin-bottom: 28px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  & > form {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: min-content;

    & > h2 {
      text-align: center;
      margin-bottom: 28px;
    }

    @media (max-width: 530px) {
      width: 100%;

      & > h2 {
        margin-bottom: 8px;
      }
    }
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 530px) {
    flex-direction: column;
  }
`;