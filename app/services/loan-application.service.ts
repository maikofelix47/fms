import { LoanApplicationRequestDto } from "../types/loan-application";
import { getApiBaseUrl } from "./config.service";
import { LoanApplicationRequestSummary } from "../types/loan-application";

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

export async function getLoanApplications(): Promise<
  LoanApplicationRequestSummary[]
> {
  const apiUrl = getApiBaseUrl();
  const url = `${apiUrl}/loan/applications`;
  const resp = await fetch(`${url}`, {
    cache: "no-store",
  });
  const { data } = await resp.json();
  return data;
}
