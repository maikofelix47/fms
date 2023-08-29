import FmsTitle from "@/components/fms-title";
import FmsCard from "@/components/fms-card";
export default function Home() {
  const dashboardItems: { title: string; value: number }[] = [
    {
      title: "Shares",
      value: 3000,
    },
    {
      title: "Contributions",
      value: 100000,
    },
    {
      title: "Capital",
      value: 50000,
    },
    {
      title: "Loans",
      value: 4000000,
    },
  ];
  return (
    <div className="home-container flex flex-col w-full">
      <FmsTitle>Welcome Felix!</FmsTitle>
      <div className="dashboard-overview flex flex-row my-10">
        {dashboardItems.map((item, index) => {
          return (
            <FmsCard
              key={index}
              title={item.title}
              content={`sh ${item.value}`}
              description=""
              footer=""
            />
          );
        })}
      </div>
    </div>
  );
}
