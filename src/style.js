import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  border: 2px solid #ddd;
  border-radius: 15px;
  height: 600px;
  width: 720px;

  @media (max-width: 720px) {
    flex-direction: column;
    width: 100%;
  }
`;
