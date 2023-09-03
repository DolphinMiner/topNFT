import dynamic from "next/dynamic";
import { getAllLanguageSlugs, getLanguage } from "@/i18n";

const HomePage = dynamic(() => import("@/screens/HomePage"), {
  ssr: false,
});

export default function Home() {
  return <HomePage />;
}

export async function getStaticPaths() {
  const paths = getAllLanguageSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { lang: string } }) {
  const language = getLanguage(params.lang);
  return {
    props: {
      language,
    },
  };
}
