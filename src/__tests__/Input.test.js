import React from "react";
import { render, screen } from "@testing-library/react";
import RequestSection from "../components/RequestSection";
import { MainProvider } from "../Provider";

describe("Input Component", () => {
  describe("when page is initialized", () => {
    it("Test if there is the h1 element and first input", () => {
      render(
        <MainProvider>
          <RequestSection />
        </MainProvider>
      );

      expect(screen.getByText("Simule sua Antecipação")).toBeInTheDocument();
    });
  });

  test("render inputs", () => {
    render(
      <MainProvider>
        <RequestSection />
      </MainProvider>
    );
    expect(screen.getByTestId("input-element-amount")).toBeInTheDocument();
    expect(
      screen.getByTestId("input-element-installments")
    ).toBeInTheDocument();
    expect(screen.getByTestId("input-element-mdr")).toBeInTheDocument();
  });

  test("render paragraphs and span", () => {
    render(
      <MainProvider>
        <RequestSection />
      </MainProvider>
    );
    expect(screen.getByText("Informe o valor da venda *")).toBeInTheDocument();
    expect(screen.getByText("Em quantas parcelas *")).toBeInTheDocument();
    expect(screen.getByText("Máximo de 12 parcelas")).toBeInTheDocument();
    expect(
      screen.getByText("Informe o percentual de MDR *")
    ).toBeInTheDocument();
  });
});
