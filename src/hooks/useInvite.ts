import { useRouter } from "next/router";
import { invites } from "data/invites";

export function useInvite() {
  const router = useRouter();
  const { slug } = router.query;

  return slug ? invites[slug as string] : null;
}
