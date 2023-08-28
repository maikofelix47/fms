import Navbar from "../../components/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex justify-center px-10 py-10">{children}</section>
  );
}
