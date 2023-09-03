import i18next from "i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { languages } from "@/i18n";

export default function SwitchLanguage() {
  const { t, language } = i18next;
  const router = useRouter();
  const asPath = router.asPath;

  return (
    <div className="mt-4 w-fit min-w-fit rounded-lg border-2 border-slate-800 p-4">
      <span>{`${t("language")}: ${t(language)}, `}</span>
      <span>{`${t("switchTo")} `}</span>
      {languages
        .filter((l) => language !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && ` ${t("or")} `}
              <Link
                className="underline underline-offset-4"
                href={asPath.replace(`/${language}`, `/${l}`)}
              >
                {t(l)}
              </Link>
            </span>
          );
        })}
    </div>
  );
}
