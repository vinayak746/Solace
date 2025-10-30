import { NAV_ITEMS } from "@/lib/constants";
import Link from "next/dist/client/link";
import React from "react";

const Navitems = () => {
  return (
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
      {NAV_ITEMS.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navitems;
