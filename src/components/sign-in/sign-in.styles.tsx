import styled from "styled-components";

type SignInProps = {
  newUser: boolean;
};

export const SignInContainer = styled.div<SignInProps>`
  display: flex;
  flex-direction: column;
  width: 380px;
  h2 {
    margin: 10px 0;
  }
  @media screen and (max-width: 880px) {
    display: ${({ newUser }) => newUser && "none"};
    width: 80vw;
  }
`;
export const ButtonContaner = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 880px) {
    justify-content: space-evenly;
  }
`;
