import { GPPage } from "../components/GPPage";

const byPos = [
  { pos: "90-Day · 120,000 AUR", apy: "14.8%", accrued: "642.10" },
  { pos: "180-Day · 80,000 AUR", apy: "21.5%", accrued: "418.90" },
  { pos: "Flexible · 48,500 AUR", apy: "6.5%", accrued: "223.50" },
];

const dist = [
  { d: "May 28, 2026", pool: "184,200", weight: "4.84%", share: "642.10" },
  { d: "May 21, 2026", pool: "176,500", weight: "4.71%", share: "598.40" },
  { d: "May 14, 2026", pool: "168,900", weight: "4.55%", share: "561.20" },
  { d: "May 7, 2026", pool: "161,300", weight: "4.40%", share: "529.80" },
  { d: "Apr 30, 2026", pool: "154,800", weight: "4.21%", share: "180.40" },
];

export default function RewardsPage() {
  return (
    <GPPage active="Rewards">
      <section className="gpp-head">
        <div className="gpp-kick">— Rewards · Manual dividends</div>
        <h1 className="gpp-title">Your Rewards</h1>
      </section>

      <div className="gpp-rhero">
        <div>
          <div className="gpp-kick">Claimable now</div>
          <div className="gpp-rclaim-fig">
            1,284<span>.50</span>
          </div>
          <div className="gpp-rclaim-u">AUR · ≈ $3,210.42 USD · accrued across 3 positions</div>
          <button className="gpp-rbtn">Claim Rewards →</button>
        </div>
        <div className="gpp-rnext">
          <div className="gpp-rnext-l">Next distribution</div>
          <div className="gpp-rnext-v">2d 14h 06m</div>
          <div className="gpp-rnext-s">Manual payout by treasury · every Wednesday</div>
          <div className="gpp-rnext-row">
            <span>Est. next dividend</span>
            <b className="gp-gold">~671 AUR</b>
          </div>
          <div className="gpp-rnext-row">
            <span>Lifetime earned</span>
            <b>8,917.20 AUR</b>
          </div>
        </div>
      </div>

      <div className="gp-rule" />

      <section className="gpp-sec">
        <div className="gp-sec-h">
          <h2>Accruing by Position</h2>
          <span>Updated live</span>
        </div>
        <div className="gpp-thead" style={{ gridTemplateColumns: "2fr 1fr 1fr" }}>
          <span>Position</span>
          <span>APY</span>
          <span style={{ textAlign: "right" }}>Accrued this period</span>
        </div>
        {byPos.map((r, i) => (
          <div className="gpp-trow" key={i} style={{ gridTemplateColumns: "2fr 1fr 1fr" }}>
            <div className="gpp-name-mc">{r.pos}</div>
            <div className="gp-gold" style={{ fontFamily: "'Marcellus'", fontSize: 18 }}>
              {r.apy}
            </div>
            <div className="gpp-amt-pos">+{r.accrued} AUR</div>
          </div>
        ))}
      </section>

      <div className="gp-rule" />

      <section className="gpp-sec">
        <div className="gp-sec-h">
          <h2>Distribution History</h2>
          <a>Export CSV →</a>
        </div>
        <div className="gpp-thead" style={{ gridTemplateColumns: "1.4fr 1.2fr 1fr 1fr" }}>
          <span>Date</span>
          <span>Pool distributed</span>
          <span>Your weight</span>
          <span style={{ textAlign: "right" }}>Your share</span>
        </div>
        {dist.map((r, i) => (
          <div className="gpp-trow" key={i} style={{ gridTemplateColumns: "1.4fr 1.2fr 1fr 1fr" }}>
            <div className="gpp-name-mc">{r.d}</div>
            <div className="gpp-mono" style={{ fontSize: 14 }}>
              {r.pool} AUR
            </div>
            <div className="gpp-mono" style={{ fontSize: 14 }}>
              {r.weight}
            </div>
            <div className="gpp-amt-pos">+{r.share} AUR</div>
          </div>
        ))}
      </section>
    </GPPage>
  );
}
