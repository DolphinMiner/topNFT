import i18next from "i18next";
import Link from "next/link";
import { useMemo } from "react";

export default function NavigatorList() {
  const { language } = i18next;
  const root = useMemo(() => (language ? `/${language}` : ""), [language]);
  const list = useMemo(
    () => [
      {
        href: `${root}/`,
        name: "Homepage",
      },
      {
        href: `${root}/forhaichao`,
        name: "Mint test page for Haichao",
      },
    ],
    [root],
  );
  return (
    <ul className="mb-4 block w-fit min-w-fit list-disc rounded-lg border-2 border-slate-800 p-4">
      {list.map(({ href, name }, index) => (
        <li className="mb-1 underline underline-offset-4" key={index}>
          <Link href={href}>{name}</Link>
        </li>
      ))}
    </ul>
  );
}
