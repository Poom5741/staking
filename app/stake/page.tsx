import { GPPage } from "../components/GPPage";

const tiers = [
  { n: "01", apy: "6.5", name: "Flexible", lock: "Withdraw anytime · no lock" },
  { n: "02", apy: "9.2", name: "30 Days", lock: "One month lock period" },
  {
    n: "03",
    apy: "14.8",
    name: "90 Days",
    lock: "Quarter lock · best balance",
    on: true,
    tag: "Most chosen",
  },
  { n: "04", apy: "21.5", name: "180 Days", lock: "Half-year lock · highest yield" },
];

const curve = "0,86 40,80 80,72 120,66 160,56 200,48 240,38 280,30 320,18 360,8";

export default function StakePage() {
  return (
    <GPPage active="Stake">
      <section className="gpp-head">
        <div className="gpp-kick">— Stake · Earn manual dividends</div>
        <h1 className="gpp-title">Stake your AUR</h1>
        <p className="gpp-sub">
          Lock AUR into a tier to earn yield. Rewards are distributed manually each week from the protocol revenue pool, weighted by your stake and lock length.
        </p>
        <div className="gpp-seg">
          <button className="on">Stake</button>
          <button>Unstake</button>
        </div>
      </section>

      <div className="gpp-cols">
        <div>
          {tiers.map((t) => (
            <div key={t.n} className={"gpp-tierrow" + (t.on ? " on" : "")}>
              <div className="gpp-radio" />
              <div className="gpp-tr-apy">
                {t.apy}
                <span>%</span>
              </div>
              <div>
                <div className="gpp-tr-name">{t.name}</div>
                <div className="gpp-tr-lock">{t.lock}</div>
              </div>
              {t.tag ? <div className="gpp-tr-tag">{t.tag}</div> : <div />}
            </div>
          ))}

          <div className="gpp-amt">
            <div className="gpp-amt-top">
              <span>Amount to stake</span>
              <span>Wallet · 52,400.00 AUR</span>
            </div>
            <div className="gpp-amt-row">
              <input defaultValue="40,000" />
              <div className="gpp-amt-cur">AUR</div>
            </div>
          </div>
          <div className="gpp-quick">
            <button>25%</button>
            <button>50%</button>
            <button>75%</button>
            <button>MAX</button>
          </div>
          <button className="gpp-cta">Stake 40,000 AUR · 90-Day Lock →</button>
        </div>

        <aside className="gpp-side">
          <h3 className="gpp-side-h">Projected Balance</h3>
          <div className="gpp-side-sub">40,000 AUR · 90-Day · 14.8% APY</div>
          <div className="gpp-proj">
            45,920<span> AUR</span>
          </div>
          <div className="gpp-projchart">
            <svg viewBox="0 0 360 94" preserveAspectRatio="none">
              <defs>
                <linearGradient id="gpp-pf" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#e6c987" stopOpacity="0.26" />
                  <stop offset="1" stopColor="#e6c987" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polygon points={"0,94 " + curve + " 360,94"} fill="url(#gpp-pf)" />
              <polyline points={curve} fill="none" stroke="#e6c987" strokeWidth="1.6" />
            </svg>
            <div className="gpp-axis">
              <span>Today</span>
              <span>+1yr</span>
            </div>
          </div>
          <div className="gpp-break">
            <div>
              <span>Principal staked</span>
              <b>40,000 AUR</b>
            </div>
            <div>
              <span>Est. rewards / year</span>
              <b className="gp-gold">5,920 AUR</b>
            </div>
            <div>
              <span>Unlock date</span>
              <b>Sep 4, 2026</b>
            </div>
            <div className="gpp-tot">
              <span>Projected total</span>
              <b>45,920 AUR</b>
            </div>
          </div>
          <div className="gpp-note">
            <b>Manual distribution.</b> Dividends are paid weekly by the protocol treasury. Your share is proportional to stake × lock multiplier and credited to claimable rewards.
          </div>
        </aside>
      </div>
    </GPPage>
  );
}
