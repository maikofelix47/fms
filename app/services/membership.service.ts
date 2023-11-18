import { MemberApplication } from "../types/member-application";
import { getApiBaseUrl } from "./config.service";

export async function apply(payload: MemberApplication) {
  const apiUrl = getApiBaseUrl();
  const resp = await fetch(`${apiUrl}/membership/apply`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return resp.json();
}

export async function getMembershipRequests() {
  const apiUrl = getApiBaseUrl();
  const resp = await fetch(`${apiUrl}/membership/requests`);
  const { data } = await resp.json();
  return data;
}

export async function getMembershipRequest(id: number) {
  const apiUrl = getApiBaseUrl();
  const url = `${apiUrl}/membership/requests/${id}`;
  const resp = await fetch(url, {
    cache: "no-store",
  });
  const { data } = await resp.json();
  return data;
}

export async function getAllApprovedMembers() {
  const apiUrl = getApiBaseUrl();
  const url = `${apiUrl}/membership/approved`;
  const resp = await fetch(url, {
    cache: "no-store",
  });
  const { data } = await resp.json();
  return data;
}

export async function getAllRejectedMembers() {
  const apiUrl = getApiBaseUrl();
  const url = `${apiUrl}/membership/rejected`;
  const resp = await fetch(url, {
    cache: "no-store",
  });
  const { data } = await resp.json();
  return data;
}

export async function getApprovedMemberDetails(id: number) {
  const apiUrl = getApiBaseUrl();
  const url = `${apiUrl}/membership/approved/${id}`;
  const resp = await fetch(url, {
    cache: "no-store",
  });
  const { data } = await resp.json();
  return data;
}

export async function approveMembershipRequest(
  approve: boolean,
  requestId: number
) {
  const apiUrl = getApiBaseUrl();
  const fullUrl = `${apiUrl}/membership/requests/approval/${requestId}`;
  const resp = await fetch(fullUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      approve,
    }),
  });

  const { data } = await resp.json();
  return data;
}
