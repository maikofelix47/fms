import { MemberApplication } from "../types/member-application";
export async function apply(payload: MemberApplication) {
  const resp = await fetch("/api/membership/apply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return resp.json();
}

export async function getMembershipRequests() {
  const resp = await fetch("/api/membership/requests");
  return resp.json();
}

export async function getMembershipRequest(id: number) {
  const resp = await fetch(
    `http://localhost:3000/api/membership/requests/${id}`,
    {
      cache: "no-store",
    }
  );
  const { data } = await resp.json();
  return data;
}
