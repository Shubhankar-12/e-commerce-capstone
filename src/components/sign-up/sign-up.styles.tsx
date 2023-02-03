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
    from {
      transform: rotateY(360deg);
    }
    to {
      transform: rotateY(0deg);
    }
  }
`;
