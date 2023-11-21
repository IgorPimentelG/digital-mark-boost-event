import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  min-height: 100vh;

  & > div:nth-child(1) {
    display: flex;
    flex: 1;

    & > img {
      height: 100%;
      width: 40vw;
      object-fit: cover;
    }

    @media (max-width: 780px) {
      display: none;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  padding: 38px;

  & > div:nth-child(2) {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;

    & > div:nth-child(1) {
      width: 450px;
    }
  }

  @media (max-width: 780px) {
    width: 100vw;
  }

  @media (max-width: 400px) {
    & > div:nth-child(1) {
      text-align: center;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const Header = styled.div`
  margin-top: 58px;
  margin-bottom: 28px;

  & > h2 {
    font-size: 38px;

    @media (max-width: 400px) {
      font-size: 28px;
    }
  }

  & > span {
    color: ${({ theme }) => theme.colors['grey-shades']['grey-70']};
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 38px;
  gap: 8px;
  
  & > span {
    white-space: nowrap;
  }

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;