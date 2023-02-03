import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  justify-content: space-around;
  // flex-wrap: wrap;
  padding: 15px;
  @media screen and (max-width: 880px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Register = styled.p`
  display: none;
  font-size: 1.2rem;
  font-weight: 600;
  @media screen and (max-width: 880px) {
    display: block;
  }
`;

export const RegisterLink = styled.span`
  color: #4285f4;
  cursor: pointer;
  text-decoration: underline;
`;
