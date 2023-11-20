import { Member } from "./member";
import { LoanProduct } from "./loan-product";
interface LoanApplication {
  id: number;
  member: Member;
  memberId: number;
  loanProduct: LoanProduct;
  loanProductId: number;
  amount: number;
  tenorInMonths: number;
  status: number;
  createdAt: Date;
  updatedAt: Date;
}

export type LoanApplicationRequestDto = Pick<
  LoanApplication,
  "loanProductId" | "amount" | "tenorInMonths"
>;

export interface LoanApplicationRequestPayload
  extends LoanApplicationRequestDto {
  memberId: string;
}
