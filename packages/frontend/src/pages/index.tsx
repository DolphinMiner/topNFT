import dynamic from "next/dynamic";
import { useIsMounted } from "@/hooks/useIsMounted";

const Index = dynamic(
  () => import("@/screens/Index").then((mod) => mod.Index),
  {
    ssr: true,
  },
);

export default function Home() {
  const isMounted = useIsMounted();

  if (!isMounted) return null;
  return <Index />;
}
