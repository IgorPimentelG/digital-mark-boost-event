import styled from 'styled-components';

export const Container = styled.main`
  padding: 48px;

  @media (max-width: 890px) {
    padding: 48px 38px;
  }
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

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 38px;

  & > div:nth-child(2) {
    margin-top: 58px;
  }

  @media (max-width: 890px) {
    flex-direction: column-reverse;
    justify-content: center;

    & > div:nth-child(2) {
      display: flex;
      justify-content: center;
      margin-top: 0;
    }
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  & > div {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    max-height: 850px;
    overflow: auto;
    justify-content: center;
  }

  @media (max-width: 807px) {
    align-items: center;

    & > div {
      justify-content: center;
    }
  }
`;