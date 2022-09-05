import Link from "next/link";

import { ReactNode } from "react";
import { Footer } from "../Footer";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <ul className="flex flex-row flex-wrap gap-4 align-center justify-center py-16 border-b-2 bg-slate-300 text-slate-800">
        <li>
          <Link href="/">
            <a className="text-blue-500 hover:text-blue-800">Start</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className="text-blue-500 hover:text-blue-800">Blog</a>
          </Link>
        </li>
      </ul>
      {children}
      <Footer />
    </>
  );
};
