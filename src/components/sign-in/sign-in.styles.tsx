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
    width: 80vw;
    display: ${({ newUser }) => newUser && "none"};
    animation: show 1s ease-in-out forwards;
    transform-style: preserve-3d;
  }
  @keyframes show {
    from {
      transform: rotateY(180deg);
      opacity: 0;
    }
    to {
      transform: rotateY(360deg);
      opacity: 1;
    }
  }
`;
export const ButtonContaner = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 880px) {
    justify-content: space-evenly;
  }
`;
