import Loading from "../Loading";
import { DivValue, H2, Section, Span, SpanValue } from "./style";
import { useMain } from "../../Provider";

const ResponseSection = ({ children, ...rest }) => {
  const { responseData } = useMain();

  return (
    <Section>
      <H2>VOCÊ RECEBERÁ</H2>
      <DivValue className="first-div-value">
        <Span>Amanhã:</Span>
        {useMain().isFetching ? (
          <Loading></Loading>
        ) : (
          <SpanValue>R$ {responseData ? responseData["1"] : "0,00"}</SpanValue>
        )}
      </DivValue>
      <DivValue className="first-div-value">
        <Span>Em 15 dias:</Span>
        {useMain().isFetching ? (
          <Loading></Loading>
        ) : (
          <SpanValue>R$ {responseData ? responseData["15"] : "0,00"}</SpanValue>
        )}
      </DivValue>
      <DivValue className="first-div-value">
        <Span>Em 30 dias:</Span>
        {useMain().isFetching ? (
          <Loading></Loading>
        ) : (
          <SpanValue>R$ {responseData ? responseData["30"] : "0,00"}</SpanValue>
        )}
      </DivValue>
      <DivValue className="first-div-value">
        <Span>Em 90 dias:</Span>
        {useMain().isFetching ? (
          <Loading></Loading>
        ) : (
          <SpanValue>R$ {responseData ? responseData["90"] : "0,00"}</SpanValue>
        )}
      </DivValue>
    </Section>
  );
};

export default ResponseSection;
