import { MemberApplication } from "../types/member-application";
export async function apply(payload: MemberApplication) {
  const resp = await fetch("/api/membership/apply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await resp.json();

  return data;
}
