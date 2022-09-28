import styled from "styled-components";

export const Section = styled.section`
  width: 40%;
  background-color: #f5f5f5;
  box-sizing: border-box;
  padding: 100px 40px;
  display: flex;
  flex-direction: column;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;

  @media (max-width: 720px) {
    width: 100%;
    padding: 20px 40px 50px 40px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const H2 = styled.h2`
  font-size: 18px;
  font-style: italic;
  text-align: left;
  color: #47c;
  /* border-bottom: 0.5px solid #58f; */
  box-shadow: 0 2px 2px -2px #47c;
  padding-bottom: 5px;
  /* box-shadow: 0px 1px 1px 0px rgba(0, 193, 255, 0.75); */
`;

export const DivValue = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

export const Span = styled.span`
  font-size: 16px;
  font-style: italic;
  color: #47c;
  text-align: left;
  justify-self: left;
`;

export const SpanValue = styled.span`
  font-size: 16px;
  font-style: italic;
  font-weight: bold;
  color: #47c;
  text-align: left;
  justify-self: left;
  margin-left: 5px;
`;
