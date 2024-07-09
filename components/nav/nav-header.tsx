import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SidebarItem } from "./menu";
import { useWindowSize } from "../hooks/use-window-size";
import { usePathname, useRouter } from "next/navigation";
import { buttonVariants } from "../ui/button";

export default function NavHeader({ links }: { links: SidebarItem[] }) {
  const { width, height } = useWindowSize();
  const pathName = usePathname();
  console.log("width", width);
  return (
    <>
      {width && width > 1370 ? (
        <NavigationMenu>
          <NavigationMenuList>
            {links.map((link, index) => (
              <NavigationMenuItem key={link.url}>
                {link.items.length > 0 ? (
                  <>
                    <NavigationMenuTrigger
                      className={cn(
                        "h-8 text-slate-50 hover:!bg-blue-700 hover:text-slate-50 focus:!bg-blue-600 focus:text-slate-50 data-[active]:bg-blue-600 data-[state=open]:bg-blue-600",
                        pathName.includes(link.url)
                          ? "bg-blue-700"
                          : "bg-blue-600"
                      )}
                    >
                      {link.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul
                        className={cn(
                          "grid  gap-3 p-4 ",
                          link.items.length > 1
                            ? "w-[450px] grid-cols-2"
                            : "w-[250px] grid-cols-1"
                        )}
                      >
                        {link.items.map((component) => (
                          <ListItem
                            key={component.url}
                            title={component.title}
                            href={component.url}
                          >
                            {component.title}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link href={link.url} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {link.title}
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      ) : (
        <></>
      )}
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
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
