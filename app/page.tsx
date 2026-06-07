import Link from "next/link";
import { WalletPill } from "./components/WalletPill";

const curve = "0,72 36,66 72,58 108,60 144,48 180,44 216,32 252,30 288,18 324,14 360,4";

const tiers = [
  { n: "01", apy: "6.5", name: "Flexible", lock: "Withdraw anytime" },
  { n: "02", apy: "9.2", name: "30 Days", lock: "One month lock" },
  { n: "03", apy: "14.8", name: "90 Days", lock: "Quarter lock", feat: true },
  { n: "04", apy: "21.5", name: "180 Days", lock: "Half-year lock" },
];

const metrics: [string, string, boolean][] = [
  ["$4.86M", "Total value staked", true],
  ["1,942,800", "AUR locked", false],
  ["8.9M", "AUR distributed", true],
  ["38", "Active stakers", false],
];

export default function LandingPage() {
  return (
    <div className="gp-root" style={{ paddingBottom: 0 }}>
      <div className="gpl-wrap">
        <header className="gpl-nav">
          <div className="gpl-nav-l">
            <Link href="/" className="gp-brand">
              AUREUS<span>※</span>
            </Link>
            <nav className="gpl-links">
              <Link href="/stake">Stake</Link>
              <a>Tiers</a>
              <a>How it works</a>
              <a>Treasury</a>
              <a>Docs</a>
            </nav>
          </div>
          <Link href="/dashboard" className="gpl-launch" style={{ textDecoration: "none", display: "inline-block" }}>
            Launch App →
          </Link>
        </header>

        <section className="gpl-hero">
          <div>
            <div className="gpl-kick">— On-chain yield, distributed by hand</div>
            <h1 className="gpl-h1">
              Stake AUR.
              <br />
              Earn a <em>gilded</em>
              <br />
              dividend.
            </h1>
            <p className="gpl-lede">
              A premium staking vault where rewards aren&apos;t minted from thin air — they&apos;re paid each week from real protocol revenue, by the treasury, weighted to your stake.
            </p>
            <div className="gpl-cta">
              <Link href="/dashboard" className="gpl-btn-p" style={{ textDecoration: "none", display: "inline-block" }}>
                Launch App →
              </Link>
              <button className="gpl-btn-g">View tiers</button>
              <div style={{ marginLeft: 8 }}>
                <WalletPill />
              </div>
            </div>
          </div>
          <div className="gpl-panel">
            <div className="gpl-panel-orn" />
            <div className="gpl-panel-l">Earn up to</div>
            <div className="gpl-panel-fig">
              21.5<span>%</span>
            </div>
            <div className="gpl-panel-s">APY on the 180-day vault</div>
            <div className="gpl-panel-chart">
              <svg viewBox="0 0 360 76" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="gpl-f" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#e6c987" stopOpacity="0.3" />
                    <stop offset="1" stopColor="#e6c987" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polygon points={"0,76 " + curve + " 360,76"} fill="url(#gpl-f)" />
                <polyline points={curve} fill="none" stroke="#e6c987" strokeWidth="1.6" />
              </svg>
            </div>
            <div className="gpl-panel-mini">
              <div>
                <span>Paid weekly</span>
                <b className="gp-gold">184K</b>
              </div>
              <div>
                <span>Stakers</span>
                <b>38</b>
              </div>
              <div>
                <span>Lock tiers</span>
                <b>4</b>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="gpl-metrics">
        {metrics.map(([v, l, g], i) => (
          <div className="gpl-metric" key={i}>
            <div className={"gpl-metric-v" + (g ? " g" : "")}>{v}</div>
            <div className="gpl-metric-l">{l}</div>
          </div>
        ))}
      </div>

      <div className="gpl-wrap">
        <section className="gpl-sec">
          <div className="gpl-eyebrow">— How it works</div>
          <h2 className="gpl-sectitle">Three steps to yield</h2>
          <p className="gpl-secsub">
            No lockups you don&apos;t choose. No hidden emissions. Stake, and let the treasury do the rest.
          </p>
          <div className="gpl-steps">
            <div className="gpl-step">
              <div className="gpl-step-n">01</div>
              <h3 className="gpl-step-h">Connect &amp; deposit</h3>
              <p className="gpl-step-p">
                Connect your wallet and deposit AUR. Your balance stays yours — non-custodial, fully on-chain, withdrawable at unlock.
              </p>
            </div>
            <div className="gpl-step">
              <div className="gpl-step-n">02</div>
              <h3 className="gpl-step-h">Choose a tier</h3>
              <p className="gpl-step-p">
                Pick a lock from Flexible to 180 days. Longer locks carry a higher weight multiplier — and a higher share of every dividend.
              </p>
            </div>
            <div className="gpl-step">
              <div className="gpl-step-n">03</div>
              <h3 className="gpl-step-h">Claim weekly</h3>
              <p className="gpl-step-p">
                Each Wednesday the treasury distributes revenue to stakers by hand. Rewards land in your claimable balance, ready to compound or withdraw.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="gpl-wrap">
        <section className="gpl-sec" style={{ paddingTop: 0 }}>
          <div className="gpl-eyebrow">— Vaults</div>
          <h2 className="gpl-sectitle">Four tiers, one token</h2>
          <p className="gpl-secsub">
            The longer you commit, the larger your slice of the weekly dividend.
          </p>
          <div className="gpl-tiers">
            {tiers.map((t) => (
              <div className={"gpl-tier" + (t.feat ? " feat" : "")} key={t.n}>
                <div className="gpl-tier-n">
                  {t.n}
                  {t.feat && <span className="gpl-tier-tag">Most chosen</span>}
                </div>
                <div className="gpl-tier-apy">
                  {t.apy}
                  <span style={{ fontSize: 24, color: "var(--mut)" }}>%</span>
                </div>
                <div className="gpl-tier-name">{t.name}</div>
                <div className="gpl-tier-lock">{t.lock}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="gpl-sec" style={{ paddingTop: 0 }}>
          <div className="gpl-story">
            <div>
              <h2 className="gpl-story-h">
                Dividends paid from <em>revenue</em>, not emissions.
              </h2>
              <p className="gpl-story-p">
                Most staking yield is inflation in disguise — new tokens printed to pay you, diluting everyone. AUREUS is different. Every dividend is drawn from real protocol fees and released manually by the treasury multisig.
              </p>
            </div>
            <div className="gpl-story-list">
              <div>
                <div className="gpl-story-ic">✕</div>
                <div>
                  <div className="gpl-story-li-h">No inflationary emissions</div>
                  <div className="gpl-story-li-p">
                    Your share isn&apos;t diluted by freshly minted rewards.
                  </div>
                </div>
              </div>
              <div>
                <div className="gpl-story-ic">◷</div>
                <div>
                  <div className="gpl-story-li-h">Weekly manual distribution</div>
                  <div className="gpl-story-li-p">
                    Treasury takes a stake-weighted snapshot and pays out every Wednesday.
                  </div>
                </div>
              </div>
              <div>
                <div className="gpl-story-ic">⬡</div>
                <div>
                  <div className="gpl-story-li-h">Multisig-secured</div>
                  <div className="gpl-story-li-p">
                    Distributions require 3-of-5 signatures — transparent and auditable on-chain.
                  </div>
                </div>
              </div>
              <div>
                <div className="gpl-story-ic">↺</div>
                <div>
                  <div className="gpl-story-li-h">Claim or compound</div>
                  <div className="gpl-story-li-p">
                    Restake rewards for a larger weight, or withdraw any time after unlock.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="gpl-final">
          <h2 className="gpl-final-h">
            Begin earning a
            <br />
            <em>gilded dividend.</em>
          </h2>
          <Link href="/dashboard" className="gpl-btn-p" style={{ textDecoration: "none", display: "inline-block" }}>
            Launch App →
          </Link>
        </section>
      </div>

      <div className="gpl-wrap">
        <footer className="gpl-foot">
          <div>
            <div className="gpl-foot-brand">AUREUS ※</div>
            <p className="gpl-foot-dis">
              AUREUS is a staking protocol. Yields are variable and not guaranteed. Nothing here is financial advice.
            </p>
          </div>
          <div className="gpl-foot-cols">
            <div className="gpl-foot-col">
              <h4>Protocol</h4>
              <a>Stake</a>
              <a>Tiers</a>
              <a>Treasury</a>
              <a>Analytics</a>
            </div>
            <div className="gpl-foot-col">
              <h4>Resources</h4>
              <a>Docs</a>
              <a>Audit</a>
              <a>Governance</a>
              <a>Brand</a>
            </div>
            <div className="gpl-foot-col">
              <h4>Community</h4>
              <a>X / Twitter</a>
              <a>Discord</a>
              <a>Mirror</a>
              <a>GitHub</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
