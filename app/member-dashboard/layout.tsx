import Navbar from "../../components/navbar";
import SideNav from "@/components/ui/side-nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navbar />
      <div className="content-container flex flex-row py-3 px-4">
        <div className="side-nav w-1/5 px-3">
          <SideNav />
        </div>
        <div className="main-content w-4/5">{children}</div>
      </div>
    </section>
  );
}
