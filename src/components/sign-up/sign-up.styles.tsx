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
    display: ${({ newUser }) => !newUser && "none"};
    width: 80vw;
  }
`;
