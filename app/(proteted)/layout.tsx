import LayoutSide from "@/components/layout-side";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMS",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <LayoutSide>{children}</LayoutSide>;
}
