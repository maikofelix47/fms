import { LoanProduct } from "../types/loan-product";
export async function getLoanProducts(): Promise<LoanProduct[]> {
  const resp = await fetch("http://localhost:3000/api/loan-products", {
    cache: "no-store",
  });
  const { data } = await resp.json();
  return data;
}
