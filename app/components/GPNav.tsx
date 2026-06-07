import Link from "next/link";
import { WalletPill } from "./WalletPill";

const ITEMS: { label: string; href: string }[] = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Stake", href: "/stake" },
  { label: "Rewards", href: "/rewards" },
  { label: "History", href: "/history" },
  { label: "Admin", href: "/admin/distribute" },
];

export function GPNav({ active }: { active: string }) {
  return (
    <header className="gp-top">
      <Link href="/" className="gp-brand">
        AUREUS<span>※</span>
      </Link>
      <nav className="gp-nav">
        {ITEMS.map((n) => (
          <Link key={n.label} href={n.href} className={n.label === active ? "on" : ""}>
            {n.label}
          </Link>
        ))}
      </nav>
      <WalletPill />
    </header>
  );
}
