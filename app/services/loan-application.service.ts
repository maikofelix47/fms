import { LoanApplicationRequestDto } from "../types/loan-application";
import { getApiBaseUrl } from "./config.service";

export async function applyForLoan(payload: LoanApplicationRequestDto) {
  const apiUrl = getApiBaseUrl();
  return fetch(`${apiUrl}/loan/apply`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}
