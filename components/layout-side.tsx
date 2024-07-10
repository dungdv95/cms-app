"use client";
import { cn } from "@/lib/utils";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
// import { Icons } from "@/components/icons";
import Link from "next/link";
import { useWindowSize } from "./hooks/use-window-size";
import Profile from "./profile/profile";
import NavHeader from "./nav/nav-header";
import { navItems } from "./nav/menu";

interface LayoutProps {
  children: React.ReactNode;
}

export default function LayoutSide({ children }: LayoutProps) {
  return (
    <>
      <div className="h-full flex flex-col">
        <div className="p-4 bg-blue-600 flex justify-between items-center">
          <NavHeader links={navItems} />
          <Profile />
        </div>

        <header className="bg-white shadow">
          <div className="p-3">
            <h1 className="text-lg font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>

        <div className="py-2 px-3 flex-auto">{children}</div>
      </div>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
