import { FmsPageHeader } from "@/components/fms-page-header";
import { getLoanApplications } from "@/app/services/loan-application.service";
import { LoanApplicationRequestSummary } from "@/app/types/loan-application";
import LoanApplicationList from "../../../../components/loan/loan-application-list";

async function LoanApplicationsPage() {
  const loanApplications: LoanApplicationRequestSummary[] =
    await getLoanApplications();
  return (
    <>
      <FmsPageHeader>Loan Applications</FmsPageHeader>
      <LoanApplicationList loanApplicationList={loanApplications} />
    </>
  );
}

export default LoanApplicationsPage;
