import { GPPage } from "../components/GPPage";

const spark = "0,52 30,46 60,49 90,38 120,42 150,30 180,33 210,22 240,26 270,14 300,18 330,9 360,12";

const tiers = [
  { n: "01", name: "Flexible", apy: "6.5", lock: "Withdraw anytime" },
  { n: "02", name: "30 Days", apy: "9.2", lock: "One month lock" },
  { n: "03", name: "90 Days", apy: "14.8", lock: "Quarter lock", feat: true },
  { n: "04", name: "180 Days", apy: "21.5", lock: "Half-year lock" },
];

const positions = [
  { amt: "120,000", tier: "90-Day", apy: "14.8", status: "Ends in 47 days" },
  { amt: "80,000", tier: "180-Day", apy: "21.5", status: "Ends in 112 days" },
  { amt: "48,500", tier: "Flexible", apy: "6.5", status: "No lock" },
];

const tx = [
  { t: "Stake", d: "2026-06-02 14:22", h: "0x9f…21a", a: "+120,000", pos: true },
  { t: "Claim Rewards", d: "2026-05-28 09:10", h: "0x3c…88e", a: "+642.10", pos: true },
  { t: "Stake", d: "2026-05-15 18:47", h: "0x71…b4d", a: "+80,000", pos: true },
  { t: "Unstake", d: "2026-05-04 11:03", h: "0x12…fa0", a: "−15,000", pos: false },
  { t: "Dividend", d: "2026-04-30 00:00", h: "0xaa…c92", a: "+180.40", pos: true },
];

const keyfigs: [string, string, string][] = [
  ["Net Yield", "15.9%", "weighted APY"],
  ["Lifetime Earned", "8,917", "AUR to date"],
  ["Positions", "03", "active locks"],
];

export default function DashboardPage() {
  return (
    <GPPage active="Dashboard">
      <section className="gp-hero">
        <div className="gp-hero-l">
          <div className="gp-kick">— Total Value Staked · Mainnet</div>
          <div className="gp-figure">248,500</div>
          <div className="gp-figure-u">
            AUR <span>≈ $621,250 USD · <i className="gp-up">▲ 4.2%</i> 30d</span>
          </div>
          <div className="gp-chart">
            <svg viewBox="0 0 360 60" preserveAspectRatio="none">
              <defs>
                <linearGradient id="gp-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#e6c987" stopOpacity="0.28" />
                  <stop offset="1" stopColor="#e6c987" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polygon points={"0,60 " + spark + " 360,60"} fill="url(#gp-fill)" />
              <polyline points={spark} fill="none" stroke="#e6c987" strokeWidth="1.4" />
            </svg>
            <div className="gp-chart-f">
              <span>Apr 30</span>
              <span className="gp-gold">+1,284.50 AUR rewards accrued</span>
              <span>Jun 2</span>
            </div>
          </div>
        </div>
        <div className="gp-hero-r">
          {keyfigs.map(([l, v, s]) => (
            <div className="gp-keyfig" key={l}>
              <div className="gp-keyfig-l">{l}</div>
              <div className="gp-keyfig-v">{v}</div>
              <div className="gp-keyfig-s">{s}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="gp-rule" />

      <div className="gp-mid">
        <section className="gp-stake">
          <div className="gp-sec-h">
            <h2>Stake AUR</h2>
            <span>Choose a tier</span>
          </div>
          <div className="gp-pills">
            {tiers.map((t) => (
              <button key={t.n} className={"gp-pill" + (t.feat ? " on" : "")}>
                <span className="gp-pill-apy">
                  {t.apy}
                  <i>%</i>
                </span>
                <span className="gp-pill-name">{t.name}</span>
              </button>
            ))}
          </div>
          <div className="gp-input">
            <div className="gp-input-top">
              <span>Amount to stake</span>
              <span>
                Balance 52,400.00 <a>MAX</a>
              </span>
            </div>
            <div className="gp-input-row">
              <input defaultValue="40,000" />
              <div className="gp-cur">AUR</div>
            </div>
          </div>
          <div className="gp-summary">
            <div>
              <span>Lock period</span>
              <b>90 days · until Sep 4, 2026</b>
            </div>
            <div>
              <span>Estimated APY</span>
              <b className="gp-gold">14.8%</b>
            </div>
            <div>
              <span>Projected rewards / yr</span>
              <b className="gp-gold">5,920 AUR</b>
            </div>
          </div>
          <div className="gp-actions">
            <button className="gp-cta">Stake 40,000 AUR →</button>
            <button className="gp-ghost">Unstake</button>
          </div>
        </section>

        <div className="gp-mid-r">
          <section className="gp-claim">
            <div className="gp-claim-l">
              <div className="gp-claim-kick">Pending Dividend</div>
              <div className="gp-claim-fig">
                1,284<span>.50</span>
              </div>
              <div className="gp-claim-u">AUR · claimable now · ≈ $3,210</div>
            </div>
            <div className="gp-claim-r">
              <button className="gp-claim-btn">Claim Rewards →</button>
              <div className="gp-claim-meta">
                <span className="gp-pulse" />
                Next manual distribution in 2d 14h · Weekly
              </div>
            </div>
          </section>

          <section className="gp-positions">
            <div className="gp-sec-h">
              <h2>Active Positions</h2>
              <span>03 / 03</span>
            </div>
            {positions.map((p, i) => (
              <div className="gp-posrow" key={i}>
                <div className="gp-pos-idx">{String(i + 1).padStart(2, "0")}</div>
                <div className="gp-pos-amt">
                  {p.amt}
                  <span> AUR</span>
                </div>
                <div className="gp-pos-tier">
                  {p.tier}
                  <em>{p.status}</em>
                </div>
                <div className="gp-pos-apy">
                  {p.apy}
                  <span>%</span>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>

      <div className="gp-rule" />

      <section className="gp-tiers">
        <div className="gp-sec-h">
          <h2>Staking Tiers</h2>
          <span>Lock longer · earn more</span>
        </div>
        <div className="gp-tiergrid">
          {tiers.map((t) => (
            <div className={"gp-tier" + (t.feat ? " feat" : "")} key={t.n}>
              <div className="gp-tier-n">
                {t.n}
                {t.feat && <i className="gp-tier-tag">Most chosen</i>}
              </div>
              <div className="gp-tier-apy">
                {t.apy}
                <span>%</span>
              </div>
              <div className="gp-tier-name">{t.name}</div>
              <div className="gp-tier-lock">{t.lock}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="gp-rule" />

      <section className="gp-ledger">
        <div className="gp-sec-h">
          <h2>Transaction Ledger</h2>
          <a>Full history →</a>
        </div>
        <div className="gp-ledger-head">
          <span>Type</span>
          <span>Timestamp</span>
          <span>Tx Hash</span>
          <span>Status</span>
          <span>Amount</span>
        </div>
        {tx.map((r, i) => (
          <div className="gp-tx" key={i}>
            <div className="gp-tx-t">{r.t}</div>
            <div className="gp-tx-d gp-mono">{r.d}</div>
            <div className="gp-tx-h gp-mono">{r.h}</div>
            <div className="gp-tx-s">
              <i className="gp-dot" />
              Confirmed
            </div>
            <div className={"gp-tx-a " + (r.pos ? "pos" : "neg")}>{r.a} AUR</div>
          </div>
        ))}
      </section>
    </GPPage>
  );
}
