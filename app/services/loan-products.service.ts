import { LoanProduct } from "../types/loan-product";
import { getApiBaseUrl } from "./config.service";

export async function getLoanProducts(): Promise<LoanProduct[]> {
  const apiUrl = getApiBaseUrl();
  const resp = await fetch(`${apiUrl}/loan-products`, {
    cache: "no-store",
  });
  const { data } = await resp.json();
  return data;
}
