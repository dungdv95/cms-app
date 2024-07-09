import { Metadata } from "next";
import MainPage from "./main";

export const metadata: Metadata = {
  title: "System - Bank",
};
export default function Page() {
  return <MainPage />;
}