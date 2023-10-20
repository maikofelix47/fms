"use client";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FmsPageHeader } from "@/components/fms-page-header";
import { FmsSelect } from "@/components/fms-select";
import { apply } from "@/app/services/membership.service";
function MembershipApplicationPage() {
  const formSchema = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    dob: z.string(),
    nationalIdNo: z.string().min(1),
    nationality: z.string().min(1),
    gender: z.string().min(1),
    maritalStatus: z.string().min(1),
    phoneNo: z.string().min(1),
    countryOfResidence: z.string().min(1),
    countyOfResidence: z.string().min(1),
    estate: z.string().min(1),
    houseNo: z.string().min(1),
    employmentStatus: z.string(),
    employer: z.string(),
    dateOfEmployment: z.string(),
    station: z.string(),
    jobTitle: z.string(),
    grossMonthlyIncome: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      dob: "",
      nationalIdNo: "",
      nationality: "",
      gender: "",
      maritalStatus: "",
      phoneNo: "",
      countryOfResidence: "",
      countyOfResidence: "",
      estate: "",
      houseNo: "",
      employer: "",
      station: "",
      jobTitle: "",
      grossMonthlyIncome: "",
    },
  });

  const nationalityOptions = [
    {
      label: "Kenyan",
      value: "KE",
    },
    {
      label: "Tanzanian",
      value: "TZ",
    },
  ];

  const countryOptions = [
    {
      label: "Kenya",
      value: "KE",
    },
    {
      label: "Tanzania",
      value: "TZ",
    },
  ];

  const genderOptions = [
    {
      label: "Male",
      value: "M",
    },
    {
      label: "Female",
      value: "F",
    },
  ];
  const maritalStatusOptions = [
    {
      label: "Single",
      value: "single",
    },
    {
      label: "Married",
      value: "married",
    },
    {
      label: "Widow",
      value: "widow",
    },
    {
      label: "Divorced",
      value: "divorced",
    },
  ];

  const countyOptions = [
    {
      label: "Nairobi",
      value: "047",
    },
    {
      label: "Uasin Gishu",
      value: "027",
    },
    {
      label: "Mombasa",
      value: "001",
    },
    {
      label: "Kisumu",
      value: "042",
    },
    {
      label: "Kwale",
      value: "002",
    },
  ];

  function submitHandler(values: z.infer<typeof formSchema>) {
    applyForMembership(values);
  }
  function applyForMembership(payload: any) {
    apply(payload)
      .then((result) => {})
      .catch((err) => {
        console.error("error", err);
      });
  }
  function errorHandler(e: any) {}
  return (
    <div className="loan-application-container flex flex-col">
      <FmsPageHeader>Membership Application </FmsPageHeader>
      <div className="loan-application flex  w-2/3 justify-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submitHandler)}
            className="space-y-8 w-full"
          >
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" {...field} />
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" {...field} />
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Birth</FormLabel>
                  <Input type="date" {...field} />
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nationalIdNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>National ID No</FormLabel>
                  <Input type="text" {...field} />
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nationality"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nationality</FormLabel>
                  <FmsSelect
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    options={nationalityOptions}
                  />

                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <FmsSelect
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    options={genderOptions}
                  />

                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="maritalStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Marital Status</FormLabel>
                  <FmsSelect
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    options={maritalStatusOptions}
                  />

                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phoneNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone No</FormLabel>
                  <Input type="text" {...field} />
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="countryOfResidence"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country of Residence</FormLabel>
                  <FmsSelect
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    options={countryOptions}
                  />

                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="countyOfResidence"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>County of Residence</FormLabel>
                  <FmsSelect
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    options={countyOptions}
                  />

                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="estate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estate</FormLabel>
                  <Input type="text" {...field} />
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="houseNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>House No</FormLabel>
                  <Input type="text" {...field} />
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="employmentStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Employed</FormLabel>

                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="employed" />
                        </FormControl>
                        <FormLabel className="font-normal">Employed</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="self-employed" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Self Employed
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="un-employed" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Un-Employed
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="employer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Employer</FormLabel>
                  <Input type="text" {...field} />
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dateOfEmployment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Employment</FormLabel>
                  <Input type="date" {...field} />
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="station"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Station</FormLabel>
                  <Input type="text" {...field} />
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="jobTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Title</FormLabel>
                  <Input type="text" {...field} />
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="grossMonthlyIncome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gross Monthly Income</FormLabel>
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

export default MembershipApplicationPage;
