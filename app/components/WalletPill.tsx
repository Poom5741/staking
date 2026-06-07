"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export function WalletPill() {
  return (
    <ConnectButton.Custom>
      {({ account, chain, openAccountModal, openConnectModal, mounted }) => {
        const ready = mounted;
        const connected = ready && account && chain;
        if (!ready) {
          return <div className="gp-wallet" style={{ opacity: 0 }} />;
        }
        if (!connected) {
          return (
            <button className="gp-wallet" onClick={openConnectModal}>
              <span className="gp-pulse" />
              <em>Wallet</em>
              Connect →
            </button>
          );
        }
        return (
          <button className="gp-wallet" onClick={openAccountModal}>
            <span className="gp-pulse" />
            <em>{account.displayName}</em>
            {account.displayBalance ?? "0.00"}
          </button>
        );
      }}
    </ConnectButton.Custom>
  );
}
