"use client";
import { useState, useEffect } from "react";
import { FmsPageHeader } from "@/components/fms-page-header";
import FmsTable from "@/components/fms-table";
function LoanApplicationsPage() {
  const [loanApplications, setLoanApplications] = useState([]);
  useEffect(() => {
    fetch("/api/loan/applications")
      .then((result) => {
        return result.json();
      })
      .then((result) => {});
  }, []);
  const columns = ["Application Date", "Amount", "Loan Product", " Status"];
  const data = [
    {
      applicationDate: "2023-09-08",
      amount: 50000,
      loanProduct: "Payday",
      status: "Pending Approval",
    },
    {
      applicationDate: "2023-09-08",
      amount: 70000,
      loanProduct: "Payday",
      status: "Approved",
    },
    {
      applicationDate: "2023-09-08",
      amount: 70000,
      loanProduct: "Payday",
      status: "Rejected",
    },
  ];
  return (
    <>
      <FmsPageHeader>Loan Applications</FmsPageHeader>
      <FmsTable columns={columns} data={data} caption="Loan Applications" />
    </>
  );
}

export default LoanApplicationsPage;
