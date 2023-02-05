import styled from "styled-components";

export const SubCategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  margin-bottom: 30px;
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    row-gap: 30px;
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
    grid-row-gap: 25px;
    justify-items: center;
  }
`;
export const CategoryTitle = styled.h2`
  text-align: center;
`;
