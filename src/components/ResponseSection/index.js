import Loading from "../Loading";
import { DivValue, H2, Section, Span, SpanValue } from "./style";
import { useMain } from "../../Provider";

function parseBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

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
          <SpanValue>
            {responseData ? parseBRL(responseData["1"]) : "R$ 0,00"}
          </SpanValue>
        )}
      </DivValue>
      <DivValue className="first-div-value">
        <Span>Em 15 dias:</Span>
        {useMain().isFetching ? (
          <Loading></Loading>
        ) : (
          <SpanValue>
            {responseData ? parseBRL(responseData["15"]) : "R$ 0,00"}
          </SpanValue>
        )}
      </DivValue>
      <DivValue className="first-div-value">
        <Span>Em 30 dias:</Span>
        {useMain().isFetching ? (
          <Loading></Loading>
        ) : (
          <SpanValue>
            {responseData ? parseBRL(responseData["30"]) : "R$ 0,00"}
          </SpanValue>
        )}
      </DivValue>
      <DivValue className="first-div-value">
        <Span>Em 90 dias:</Span>
        {useMain().isFetching ? (
          <Loading></Loading>
        ) : (
          <SpanValue>
            {responseData ? parseBRL(responseData["90"]) : "R$ 0,00"}
          </SpanValue>
        )}
      </DivValue>
    </Section>
  );
};

export default ResponseSection;
