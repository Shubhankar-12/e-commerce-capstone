import styled from "styled-components";

type SignUpProps = {
  newUser: boolean;
};

export const SignUpContainer = styled.div<SignUpProps>`
  display: flex;
  flex-direction: column;
  width: 380px;
  h2 {
    margin: 10px 0;
  }
  @media screen and (max-width: 880px) {
    width: 80vw;
    animation: show 1s ease-in-out forwards;
    display: ${({ newUser }) => !newUser && "none"};
    transform-style: preserve-3d;
  }
  @keyframes show {
    0% {
      transform: rotateY(180deg);
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      transform: rotateY(360deg);
      opacity: 1;
    }
  }
`;
