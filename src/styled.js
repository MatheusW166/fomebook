import styled from "styled-components";

const MainStyled = styled.main`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  width: 100%;
`;

const ButtonStyled = styled.button`
  padding: 0px 16px;
  width: 400px;
  height: 45px;
  background: #ef4444;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  color: #1c1917;
  cursor: pointer;
`;

const TitleH2Styled = styled.h2`
  font-weight: 700;
  font-size: 32px;
`;

const TitleH3Styled = styled.h2`
  font-weight: 700;
  font-size: 24px;
`;

const SignTitleStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: min(400px, 100%);
  margin-bottom: 32px;

  p {
    font-weight: 400;
    font-size: 14px;
    color: #a8a29e;
    a {
      color: #ef4444;
    }
  }
`;

const FollowButtonStyled = styled.button`
  padding: 0px 24px;
  height: 35px;
  border: 1px solid #ef4444;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  color: #ef4444;
`;

export {
  MainStyled,
  ButtonStyled,
  FormStyled,
  SignTitleStyled,
  FollowButtonStyled,
  TitleH2Styled,
  TitleH3Styled,
};
