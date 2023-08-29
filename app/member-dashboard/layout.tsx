import Navbar from "../../components/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navbar />
      <div className="content flex px-10 py-10">{children}</div>
    </section>
  );
}
