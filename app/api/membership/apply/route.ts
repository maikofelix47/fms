import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
export async function POST(req: Request) {
  const body = await req.json();
  try {
    const newApplication = await prisma.membershipApplication.create({
      data: {
        status: 0,
        firstName: body.firstName,
        lastName: body.lastName,
        nationalIdNo: parseInt(body.nationalIdNo),
        nationality: body.nationality,
        dob: new Date(body.dob),
        gender: body.gender,
        maritalStatus: body.maritalStatus,
        phoneNo: body.phoneNo,
        countryOfResidence: body.countryOfResidence,
        countyOfResidence: body.countyOfResidence,
        estate: body.estate,
        houseNo: body.houseNo,
        employed: body.employmentStatus === "employed",
        selfEmployer: body.employmentStatus === "self-employed",
        employer: body.employer,
        dateOfEmployment: new Date(body.dateOfEmployment),
        station: body.station,
        jobTitle: body.jobTitle,
        grossMonthlyIncome: parseInt(body.grossMonthlyIncome),
        userId: 1,
      },
    });
    return new NextResponse(
      JSON.stringify({
        message: "Loan Application was succesfull",
        data: newApplication,
      }),
      {
        status: 201,
      }
    );
  } catch (e) {
    return new NextResponse(
      JSON.stringify({
        message: "Membership Application process encountered an error",
      }),
      {
        status: 500,
      }
    );
  }
}
