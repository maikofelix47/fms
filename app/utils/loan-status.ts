import { LoanApplicationRequestStatus } from "../types/loan-application";
export function formatLoanApplicationStatus(
  status: number
): LoanApplicationRequestStatus {
  switch (status) {
    case 0:
      return "Request";
      break;
    case 1:
      return "Approved";
      break;
    case 2:
      return "Denied";
    default:
      return "Request";
  }
}
