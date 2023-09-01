export interface LoanProduct {
  id: number;
  name: string;
  minAmount: number;
  maxAmount: number;
  minTenor: number;
  maxTenor: number;
  interestRate: number;
}
