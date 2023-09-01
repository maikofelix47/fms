import { getLoanProducts } from "@/app/services/loan-products.service";
import FmsTable from "@/components/fms-table";
import { FmsPageHeader } from "@/components/fms-page-header";
async function LoanProducts() {
  const loanProducts = await getLoanProducts();
  const firstRow = loanProducts[0] || {};
  const columns = Object.keys(firstRow);
  return (
    <>
      <FmsPageHeader>Loan Products</FmsPageHeader>
      <FmsTable caption="Loan Products" columns={columns} data={loanProducts} />
    </>
  );
}

export default LoanProducts;
