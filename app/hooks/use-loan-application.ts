import { useState } from "react";
import { applyForLoan } from "../services/loan-application";
import { LoanApplicationRequest } from "../types/loan-application";

export const useLoanApply = () => {
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [data, setData] = useState<any>(null);
  const apply = async (payload: LoanApplicationRequest) => {
    setError(null);
    setIsLoading(true);
    const resp = await applyForLoan(payload);
    const json = await resp.json();
    if (!resp.ok) {
      setError("An error occured while making the loan requet");
    } else {
      setData(json);
    }
    setIsLoading(false);
  };

  return { apply, error, isLoading, data };
};
