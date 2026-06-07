import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { bsc, bscTestnet } from "wagmi/chains";

export const wagmiConfig = getDefaultConfig({
  appName: "AUREUS Staking",
  projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID || "demo",
  chains: [bsc, bscTestnet],
  ssr: true,
});
