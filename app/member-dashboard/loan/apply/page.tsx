"use client";
import { useEffect, useState } from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FmsPageHeader } from "@/components/fms-page-header";
import { FmsSelect } from "@/components/fms-select";
import { getLoanProducts } from "@/app/services/loan-products.service";
import { LoanProduct } from "@/app/types/loan-product";
import { useLoanApply } from "@/app/hooks/use-loan-application";
import { LoanApplicationRequest } from "@/app/types/loan-application";
function LoanApplicationPage() {
  const [loanProducts, setLoanProducts] = useState<LoanProduct[]>([]);
  const { apply, error, isLoading, data } = useLoanApply();
  useEffect(() => {
    getLoanProducts().then((p) => {
      setLoanProducts(p);
    });
  }, []);
  const formSchema = z.object({
    loanProduct: z.string(),
    amount: z.string(),
    loanTenor: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      loanProduct: "",
      amount: "",
      loanTenor: "",
    },
  });

  const loanProductOptions = loanProducts.map((p) => {
    return {
      label: p.name,
      value: String(p.id),
    };
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const payload: LoanApplicationRequest = {
      loanProductId: parseInt(values.loanProduct),
      tenorInMonths: parseInt(values.loanTenor),
      amount: parseInt(values.amount),
    };
    applyForLoan(payload);
  }
  function applyForLoan(payload: LoanApplicationRequest) {
    apply(payload).then((result) => {
      console.log("result", result);
    });
  }
  return (
    <div className="loan-application-container flex flex-col">
      <FmsPageHeader>Loan Application </FmsPageHeader>
      <div className="loan-application flex  w-2/3 justify-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full"
          >
            <FormField
              control={form.control}
              name="loanProduct"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Loan Product</FormLabel>
                  <FmsSelect
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    options={loanProductOptions}
                  />

                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <Input type="number" {...field} />
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="loanTenor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Loan Tenor in Months</FormLabel>
                  <Input type="number" {...field} />
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default LoanApplicationPage;
