"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useSession, signOut } from "next-auth/react";

function Navbar() {
  const { data: session, status } = useSession();
  return (
    <div className="top-0 w-1/1 sticky border-b">
      <div className="nav-container flex h-14 items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <div className="left-navs flex flex-1">
              <NavigationMenuItem>
                <Link href="/member-dashboard" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </div>
            <div className="right-navs flex justify-end">
              {status === "authenticated" && (
                <>
                  <NavigationMenuItem>
                    <Link
                      href="/member-dashboard/profile"
                      legacyBehavior
                      passHref
                    >
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Profile
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link
                      href="/member-dashboard/settings"
                      legacyBehavior
                      passHref
                    >
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Settings
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                        onClick={() => signOut()}
                      >
                        Logout
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </>
              )}

              {status === "unauthenticated" && (
                <NavigationMenuItem>
                  <Link href="/auth/login" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Login
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )}
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}

export default Navbar;
