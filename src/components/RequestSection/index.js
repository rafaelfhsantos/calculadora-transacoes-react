import {
  DivInputAmount,
  H1,
  Input,
  InputAmount,
  P,
  Section,
  Span,
  SpanBRL,
} from "./style";
import { useMain } from "../../Provider";

const RequestSection = ({ children, ...rest }) => {
  const { setAmount, setInstallments, setMdr } = useMain();

  return (
    <Section>
      <H1>Simule sua Antecipação</H1>
      <P>Informe o valor da venda *</P>
      <DivInputAmount>
        <InputAmount
          data-testid={"input-element-amount"}
          type={"number"}
          onChange={(e) => setAmount(e.target.value)}
        />
        <SpanBRL>R$</SpanBRL>
      </DivInputAmount>

      <P>Em quantas parcelas *</P>
      <Input
        data-testid={"input-element-installments"}
        type={"number"}
        onChange={(e) => setInstallments(e.target.value)}
      />
      <Span>Máximo de 12 parcelas</Span>
      <P>Informe o percentual de MDR *</P>
      <Input
        data-testid={"input-element-mdr"}
        type={"number"}
        onChange={(e) => setMdr(e.target.value)}
      />
    </Section>
  );
};

export default RequestSection;
