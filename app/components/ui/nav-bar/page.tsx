"use client";
import Link from "next/link";
function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/member-dashboard">Dashboard</Link>
      <Link href="/member-dashboard/profile">Profile</Link>
    </nav>
  );
}

export default Navbar;
