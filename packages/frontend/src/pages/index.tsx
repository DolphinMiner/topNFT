import { useEffect } from "react";
import { useRouter } from "next/router";
import i18next from "i18next";

export default function Root() {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") {
      router.push("/" + i18next.language.substring(0, 2));
    }
  });

  return null;
}
