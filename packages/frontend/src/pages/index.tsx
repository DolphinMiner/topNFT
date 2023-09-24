import dynamic from "next/dynamic";
import { useIsMounted } from "@/hooks/useIsMounted";

const HomePage = dynamic(
  () => import("@/screens/HomePage").then((mod) => mod.HomePage),
  {
    ssr: true,
  },
);

export default function Home() {
  const isMounted = useIsMounted();

  if (!isMounted) return null;
  return <HomePage />;
}
