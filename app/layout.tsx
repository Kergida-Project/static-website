"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { Theme } from "./darkmode";
const inter = Inter({ subsets: ["latin"] });

window.onload = () => {
  Theme.themeCheck();
};

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}
