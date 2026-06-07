import Link from "next/link";
import { ReactNode } from "react";
import { GPPage } from "../components/GPPage";

const SUBNAV: { label: string; href: string }[] = [
  { label: "Distribute Dividend", href: "/admin/distribute" },
  { label: "Stakers & Pool", href: "/admin/stakers" },
  { label: "Tiers", href: "/admin/tiers" },
  { label: "Treasury", href: "/admin/treasury" },
];

export function AdminShell({
  sub,
  children,
}: {
  sub: string;
  children: ReactNode;
}) {
  return (
    <GPPage active="Admin">
      <div className="gpa-banner">
        <span className="gpa-tag">ADMIN</span>
        <div className="gpa-banner-t">
          Signed in as <b>treasury.aureus.eth</b> · multisig 3 / 5 · you have distribution authority
        </div>
      </div>
      <div className="gpa-subnav">
        {SUBNAV.map((n) => (
          <Link key={n.label} href={n.href} className={n.label === sub ? "on" : ""}>
            {n.label}
          </Link>
        ))}
      </div>
      {children}
    </GPPage>
  );
}
