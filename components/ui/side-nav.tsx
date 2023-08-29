import Link from "next/link";
const sideNavItems = [
  {
    section: "Membership",
    navItems: [
      {
        title: "Shares",
        url: "shares",
      },
      {
        title: "Contributions",
        url: "deposits",
      },
      {
        title: "Deposits",
        url: "deposits",
      },
    ],
  },
];
function SideNav() {
  return (
    <div className="side-nav-container flex flex-col py-4 justify-center">
      {sideNavItems.map((s, index) => {
        return (
          <>
            <div className="side-nav-title py-2">
              <h4 className="mb-1 text-sm font-semibold">{s.section}</h4>
            </div>
            <div className="side-nav-items flex flex-row">
              <ul className="side-nav-list text-sm">
                {s.navItems.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="side-nav-item px-2 py-1 hover:underline"
                    >
                      <Link href={`/${item.url}`}>{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default SideNav;
