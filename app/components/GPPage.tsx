import { ReactNode } from "react";
import { GPNav } from "./GPNav";

export function GPPage({
  active,
  children,
}: {
  active: string;
  children: ReactNode;
}) {
  return (
    <div className="gp-root">
      <GPNav active={active} />
      <div className="gp-rule" />
      {children}
    </div>
  );
}
