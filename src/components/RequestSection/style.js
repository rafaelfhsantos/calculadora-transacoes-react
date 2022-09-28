import styled from "styled-components";

export const Section = styled.section`
  background-color: #fdfdfd;
  display: flex;
  flex-direction: column;
  padding: 50px;
  width: 60%;
  box-sizing: border-box;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;

  @media (max-width: 720px) {
    width: 100%;
    padding: 10px 50px 20px 50px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const H1 = styled.h1`
  font-size: 28px;
  color: #333;
`;

export const P = styled.p`
  margin: 30px 0 5px 0;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #555;
`;

export const Input = styled.input`
  border: 1px solid #eee;
  border-radius: 5px;
  height: 40px;
  padding: 5px 15px;
  font-size: 16px;
  appearance: none;
  &:focus,
  textarea:focus {
    outline: #58f solid 1px;
  }
`;

export const Span = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #999;
  text-align: left;
`;
