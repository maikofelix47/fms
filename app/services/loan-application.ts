import { LoanApplicationRequest } from "../types/loan-application";
export async function applyForLoan(payload: LoanApplicationRequest) {
  return fetch("/api/loan/apply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}
