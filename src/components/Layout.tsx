import * as React from "react";
import { ReactNode } from "react";

import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <title>Headless WP App</title>
      <Header />
      <main>{children}</main>
    </>
  );
}
