import { MembershipRequestStatus } from "../types/member-status";
function getMembershipStatus(statusId: number): MembershipRequestStatus {
  switch (statusId) {
    case 0: {
      return "Pending Approval";
    }
    case 1: {
      return "Approved";
    }

    case 3: {
      return "Rejected";
    }
    default: {
      return "N/A";
    }
  }
}

export { getMembershipStatus };
