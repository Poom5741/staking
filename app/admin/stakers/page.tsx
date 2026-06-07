import { AdminShell } from "../AdminShell";

const tierCfg = [
  { name: "Flexible", apy: "6.5", stakers: "14", tvl: "312K" },
  { name: "30 Days", apy: "9.2", stakers: "9", tvl: "286K" },
  { name: "90 Days", apy: "14.8", stakers: "11", tvl: "845K" },
  { name: "180 Days", apy: "21.5", stakers: "4", tvl: "499K" },
];

const stakers = [
  { addr: "0x7F2c…A19c", tier: "90-Day", staked: "120,000", joined: "2026-04-12", paid: "4,821", st: "a", stl: "Active" },
  { addr: "0x4a91…0c3d", tier: "180-Day", staked: "96,500", joined: "2026-03-28", paid: "6,140", st: "a", stl: "Active" },
  { addr: "0x18bd…77f2", tier: "180-Day", staked: "80,000", joined: "2026-02-09", paid: "7,902", st: "a", stl: "Active" },
  { addr: "0xc402…1e9a", tier: "90-Day", staked: "64,200", joined: "2026-05-01", paid: "1,233", st: "u", stl: "Unlocking" },
  { addr: "0x9d55…b4d9", tier: "Flexible", staked: "52,400", joined: "2026-05-18", paid: "418", st: "a", stl: "Active" },
  { addr: "0x2e87…cc41", tier: "30-Day", staked: "41,000", joined: "2026-05-22", paid: "512", st: "a", stl: "Active" },
];

export default function AdminStakersPage() {
  return (
    <AdminShell sub="Stakers & Pool">
      <section className="gpp-head" style={{ padding: "38px 0 6px" }}>
        <div className="gpp-kick">— Pool · Participants</div>
        <h1 className="gpp-title">Stakers &amp; Pool</h1>
      </section>

      <div className="gpa-strip">
        <div>
          <div className="gpa-strip-l">Total Value Staked</div>
          <div className="gpa-strip-v g">1,942,800</div>
          <div className="gpa-strip-s">AUR</div>
        </div>
        <div>
          <div className="gpa-strip-l">Active Stakers</div>
          <div className="gpa-strip-v">38</div>
          <div className="gpa-strip-s">3 unlocking</div>
        </div>
        <div>
          <div className="gpa-strip-l">Avg. Lock</div>
          <div className="gpa-strip-v">84d</div>
          <div className="gpa-strip-s">weighted</div>
        </div>
        <div>
          <div className="gpa-strip-l">Treasury Balance</div>
          <div className="gpa-strip-v">312,440</div>
          <div className="gpa-strip-s">AUR</div>
        </div>
      </div>

      <section className="gpp-sec">
        <div className="gp-sec-h">
          <h2>Tier Configuration</h2>
          <a>+ Add tier</a>
        </div>
        <div className="gpa-tiers">
          {tierCfg.map((t) => (
            <div className="gpa-tc" key={t.name}>
              <div className="gpa-tc-name">{t.name}</div>
              <div className="gpa-tc-apy">
                {t.apy}
                <span>%</span>
              </div>
              <div className="gpa-tc-edit">Edit APY ✎</div>
              <div className="gpa-tc-meta">
                <div>
                  Stakers<b>{t.stakers}</b>
                </div>
                <div style={{ textAlign: "right" }}>
                  TVL<b>{t.tvl}</b>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="gp-rule" />

      <section className="gpp-sec">
        <div className="gp-sec-h">
          <h2>All Stakers</h2>
          <span>38 total · sorted by stake</span>
        </div>
        <div className="gpa-sthead">
          <span>Address</span>
          <span>Tier</span>
          <span>Staked</span>
          <span>Joined</span>
          <span>Rewards paid</span>
          <span style={{ justifySelf: "end" }}>Status</span>
        </div>
        {stakers.map((s, i) => (
          <div className="gpa-strow" key={i}>
            <span className="gpa-staddr">{s.addr}</span>
            <span className="gpa-stchip">{s.tier}</span>
            <span className="gpa-stnum">{s.staked}</span>
            <span className="gpa-stmono">{s.joined}</span>
            <span className="gpa-stnum gp-gold">{s.paid}</span>
            <span className="gpa-ststatus">
              <i className={"gpa-stdot " + s.st} />
              {s.stl}
            </span>
          </div>
        ))}
        <div className="gpp-pager">
          <span>Showing 6 of 38 stakers</span>
          <div className="gpp-pg">
            <a>‹</a>
            <a className="on">1</a>
            <a>2</a>
            <a>3</a>
            <a>›</a>
          </div>
        </div>
      </section>
    </AdminShell>
  );
}
