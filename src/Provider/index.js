import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const MainContext = createContext();

const api = axios.create({
  baseURL: "https://frontend-challenge-7bu3nxh76a-uc.a.run.app",
});

export default api;

export const MainProvider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(false);

  const [amount, setAmount] = useState();
  const [installments, setInstallments] = useState();
  const [mdr, setMdr] = useState();
  const [responseData, setResponseData] = useState();

  const [amountError, setAmountError] = useState(false);

  useEffect(() => {
    verifyFields();
  }, [amount, installments, mdr]);

  function verifyFields() {
    if (
      amount !== undefined &&
      installments !== undefined &&
      mdr !== undefined
    ) {
      setIsFetching(true);
      postValues({ amount, installments, mdr });
    }
  }

  function postValues(data) {
    api
      .post("", data)
      .then((response) => {
        setIsFetching(false);
        toast.dismiss();
        setResponseData(response.data);
        toast.dismiss();

        setAmountError(false);
      })
      .catch((err) => {
        if (err.response.data?.message === "Timeout") {
          toast.error(
            "O servidor atingiu o tempo limite de espera. Tente novamente mais tarde.",
            {
              toastId: "errorToastTimeout",
            }
          );
        } else if (err.response.data?.message === "Internal Server Error") {
          toast.error("Erro no servidor. Tente novamente mais tarde.", {
            toastId: "errorToastAmount",
          });
          setAmountError(true);
        } else if (err.response.data?.includes("amount")) {
          toast.error(
            "Valor da venda precisa ser maior ou igual a R$ 1000,00",
            {
              toastId: "errorToastAmount",
            }
          );
          setAmountError(true);
        } else if (
          err.response.data?.includes(`\"installments\" must be less`)
        ) {
          toast.error("O máximo de parcelas é 12", {
            toastId: "errorToastMDR",
          });
        } else if (
          err.response.data?.includes(`\"installments\" must be greater`)
        ) {
          toast.error(
            "A quantidade de parcelas precisa ser igual ou maior que 1",
            {
              toastId: "errorToastMDR",
            }
          );
        } else if (err.response.data?.includes(`"mdr" must be less`)) {
          toast.error("O percentual de MDR precisa ser igual ou menor a 100", {
            toastId: "errorToastMDR",
          });
        } else if (err.response.data?.includes(`"mdr" must be greater than`)) {
          toast.error("O percentual de MDR precisa ser igual ou maior que 0", {
            toastId: "errorToastMDR",
          });
        } else {
          toast.error("Não foi possível complentar a solicitação", {
            toastId: "errorDefault",
          });
        }
      });
  }

  return (
    <MainContext.Provider
      value={{
        postValues,
        isFetching,
        setIsFetching,
        amount,
        setAmount,
        installments,
        setInstallments,
        mdr,
        setMdr,
        verifyFields,
        responseData,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMain = () => useContext(MainContext);
