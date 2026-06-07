# AUREUS · Staking Platform

Next.js 15 + wagmi/viem + RainbowKit implementation of the **Direction D · "Gilded Pro"** design from the handoff bundle. Targets BNB Smart Chain (BSC) — mainnet + testnet.

## Pages

| Route | Source |
|---|---|
| `/` | `directionD-landing` — marketing landing |
| `/dashboard` | `directionD` — TVS, stake panel, claim, positions, ledger |
| `/stake` | `directionD-user` (Stake) — tier picker + projected balance |
| `/rewards` | `directionD-user` (Rewards) — claimable, distribution history |
| `/history` | `directionD-user` (History) — paginated tx ledger |
| `/admin/distribute` | `directionD-admin` — manual dividend distribution |
| `/admin/stakers` | `directionD-admin` — stakers, tier config, pool stats |

## Wallet

Wallet connect is wired through **RainbowKit + wagmi v2** with the BSC mainnet and BSC testnet chains preconfigured (`app/wagmi.ts`). The `<WalletPill />` component (`app/components/WalletPill.tsx`) drops the ConnectKit-style button into the gilded `.gp-wallet` shell so the chrome stays on-brand whether the user is connected or not.

## Setup

```bash
cp .env.local.example .env.local
# add your WalletConnect Cloud project ID
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Where to add the contract

The data on every page is currently the hard-coded sample data from the design. To wire it to real on-chain state:

1. Drop your staking contract address + ABI in `.env.local` (`NEXT_PUBLIC_STAKING_CONTRACT`, `NEXT_PUBLIC_AUR_TOKEN`).
2. Replace the inline arrays in each page (`tiers`, `positions`, `tx`, `alloc`, `stakers`, etc.) with `useReadContract` calls from wagmi.
3. Hook the buttons (Stake, Unstake, Claim, Distribute) up to `useWriteContract`.

The visual layer is purely CSS — `app/globals.css` ports the four CSS blocks from the handoff verbatim (`gp-`, `gpp-`, `gpl-`, `gpa-` prefixes), so adding live data won't disturb the design.

## Design source

The original prototype lives in `design-handoff/` (gitignored). Open `design-handoff/staking-manual/project/directions/directionD*.jsx` to cross-reference.
