import {
  CircleUserRound,
  File,
  Inbox,
  Landmark,
  LucideIcon,
  Receipt,
  Recycle,
  Send,
  Settings,
  Store,
  UserRound,
  UsersRound,
} from "lucide-react";

export type SidebarItem = {
  title: string;
  variant: "default" | "ghost";
  url: string;
  name: string;
  level: number;
  items: SidebarItem[];
};

export const navItems: SidebarItem[] = [
  {
    title: "System",
    variant: "ghost",
    url: "/system",
    name: "System",
    level: 0,
    items: [
      {
        title: "Bank",
        variant: "ghost",
        url: "/system/bank",
        name: "Bank",
        level: 1,
        items: [],
      },
      {
        title: "Phương thức thanh toán",
        variant: "ghost",
        url: "/system/payment-method",
        name: "Phương thức thanh toán",
        level: 1,
        items: [],
      },
      {
        title: "Cấu hình",
        variant: "ghost",
        url: "/system/config",
        name: "Cấu hình",
        level: 1,
        items: [],
      },
      {
        title: "Log Request",
        variant: "ghost",
        url: "/system/log-request",
        name: "Log Request",
        level: 1,
        items: [],
      },
    ],
  },
  {
    title: "Master Merchant",
    variant: "ghost",
    url: "/master-merchant",
    name: "Master Merchant",
    level: 0,
    items: [
      {
        title: "Danh sách",
        variant: "ghost",
        url: "/master-merchant/list",
        name: "Danh sách",
        level: 1,
        items: [],
      },
    ],
  },
  {
    title: "Merchant",
    variant: "ghost",
    url: "/merchant",
    name: "Merchant",
    level: 0,
    items: [
      {
        title: "Danh sách",
        variant: "ghost",
        url: "/merchant/list",
        name: "Danh sách",
        level: 1,
        items: [],
      },
      {
        title: "Branch",
        variant: "ghost",
        url: "/merchant/branch",
        name: "Branch",
        level: 1,
        items: [],
      },
      {
        title: "Cashier",
        variant: "ghost",
        url: "/merchant/cashier",
        name: "Cashier",
        level: 1,
        items: [],
      },
    ],
  },
];
