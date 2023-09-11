import { getMembershipRequest } from "@/app/services/membership.service";
interface MembershipRequestProps {
  params: {
    id: string;
  };
}

async function MembershipRequestPage({ params }: MembershipRequestProps) {
  const { id } = params;
  const data = await getMembershipRequest(parseInt(id));
  return <h2>Membership Request Page</h2>;
}

export default MembershipRequestPage;
