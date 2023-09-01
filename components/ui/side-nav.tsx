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
      {
        title: "Interest Income",
        url: "interest-income",
      },
    ],
  },
  {
    section: "Loans",
    navItems: [
      {
        title: "Apply",
        url: "loan/apply",
      },
      {
        title: "Active",
        url: "active-loans",
      },
      {
        title: "Closed",
        url: "closed-loans",
      },
      {
        title: "Loan Products",
        url: "loan-products",
      },
    ],
  },
  {
    section: "Payments",
    navItems: [
      {
        title: "Debits",
        url: "apply-loan",
      },
      {
        title: "Credits",
        url: "active-loans",
      },
    ],
  },
  {
    section: "Knowledge Base",
    navItems: [
      {
        title: "Loan Calculator",
        url: "loan-calculator",
      },
      {
        title: "FAQ",
        url: "faq",
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
                      <Link href={`${item.url}`}>{item.title}</Link>
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
