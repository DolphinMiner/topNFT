import { ReactNode } from "react";
import { useIsMounted } from "@/hooks/useIsMounted";

type Props = {
  children: ReactNode;
};
export function ClientOnly({ children }: Props) {
  const isMounted = useIsMounted();
  if (!isMounted) return null;

  return <>{children}</>;
}
