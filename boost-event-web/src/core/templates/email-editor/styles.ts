import styled from 'styled-components';

export const Container = styled.main`
  padding: 48px;
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


export const ActionWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  & > button {
    width: fit-content;
    padding: 8px 16px;
  }
`;