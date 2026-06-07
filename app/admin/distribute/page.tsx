import { AdminShell } from "../AdminShell";

const alloc = [
  { addr: "0x7F2c…A19c", staked: "120,000", weight: "6.18%", alloc: "11,383" },
  { addr: "0x4a91…0c3d", staked: "96,500", weight: "4.97%", alloc: "9,156" },
  { addr: "0x18bd…77f2", staked: "80,000", weight: "4.12%", alloc: "7,589" },
  { addr: "0xc402…1e9a", staked: "64,200", weight: "3.31%", alloc: "6,094" },
  { addr: "0x9d55…b4d9", staked: "52,400", weight: "2.70%", alloc: "4,974" },
];

export default function AdminDistributePage() {
  return (
    <AdminShell sub="Distribute Dividend">
      <section className="gpp-head" style={{ padding: "38px 0 6px" }}>
        <div className="gpp-kick">— Treasury · Manual payout</div>
        <h1 className="gpp-title">Distribute Dividend</h1>
        <p className="gpp-sub">
          Release a dividend from the revenue pool to all active stakers. Allocation is computed from a stake-weighted snapshot and credited to claimable balances on confirm.
        </p>
      </section>

      <div className="gpa-strip">
        <div>
          <div className="gpa-strip-l">Undistributed Pool</div>
          <div className="gpa-strip-v g">184,200</div>
          <div className="gpa-strip-s">AUR revenue</div>
        </div>
        <div>
          <div className="gpa-strip-l">Total Staked</div>
          <div className="gpa-strip-v">1,942,800</div>
          <div className="gpa-strip-s">protocol TVL</div>
        </div>
        <div>
          <div className="gpa-strip-l">Eligible Stakers</div>
          <div className="gpa-strip-v">38</div>
          <div className="gpa-strip-s">at snapshot</div>
        </div>
        <div>
          <div className="gpa-strip-l">Last Distribution</div>
          <div className="gpa-strip-v">7d ago</div>
          <div className="gpa-strip-s">176,500 AUR</div>
        </div>
      </div>

      <div className="gpa-cols">
        <div>
          <div className="gpa-field">
            <span className="gpa-label">Amount to distribute</span>
            <div className="gpa-bigin">
              <input defaultValue="184,200" />
              <div className="gpa-bigin-cur">AUR</div>
            </div>
            <div className="gpa-hint">
              Source: Revenue pool · 184,200 AUR available · <a>Distribute full balance</a>
            </div>
          </div>
          <div className="gpa-field">
            <span className="gpa-label">Allocation method</span>
            <div className="gpa-seg">
              <button className="on">Stake-weighted</button>
              <button>Equal split</button>
              <button>Custom</button>
            </div>
            <div className="gpa-hint">
              Weight = staked amount × lock multiplier (Flexible ×1.0 · 30d ×1.4 · 90d ×2.3 · 180d ×3.3)
            </div>
          </div>
          <div className="gpa-field">
            <span className="gpa-label">Snapshot</span>
            <div className="gpa-snapshot">
              <div className="gpa-snap-ic">◷</div>
              <div>
                <div className="gpa-snap-t">
                  <b>Taken Jun 4, 2026 · 14:00 UTC</b>
                </div>
                <div className="gpa-snap-s">38 eligible stakers · 1,942,800 AUR staked · block #21,408,772</div>
              </div>
            </div>
          </div>
          <div className="gpa-field" style={{ marginBottom: 0 }}>
            <span className="gpa-label">Execution</span>
            <div className="gpa-sched">
              <div className="gpa-pick on">
                <b>Distribute now</b>Credit on confirm
              </div>
              <div className="gpa-pick">
                <b>Schedule</b>Pick date &amp; time
              </div>
            </div>
          </div>
          <div className="gpa-actions">
            <button className="gpa-distribute">Distribute 184,200 AUR →</button>
            <button className="gpa-draft">Save draft</button>
          </div>
        </div>

        <aside className="gpa-preview">
          <div className="gpa-prev-h">
            <h3>Allocation Preview</h3>
            <span>Top 5 of 38</span>
          </div>
          <div className="gpa-prow head">
            <span>Staker</span>
            <span className="r">Staked</span>
            <span className="r">Weight</span>
            <span className="r">Allocation</span>
          </div>
          {alloc.map((a, i) => (
            <div className="gpa-prow" key={i}>
              <span className="gpa-addr">{a.addr}</span>
              <span className="r" style={{ fontFamily: "'Marcellus'", fontSize: 16 }}>
                {a.staked}
              </span>
              <span className="r gpa-stmono">{a.weight}</span>
              <span className="r gpa-alloc">{a.alloc}</span>
            </div>
          ))}
          <div className="gpa-ptotal">
            <span>Total to distribute</span>
            <b>184,200 AUR</b>
          </div>
          <div className="gpa-prev-foot">
            Remaining 33 stakers receive 138,004 AUR · gas est. 0.012 ETH · irreversible once confirmed by multisig.
          </div>
        </aside>
      </div>
    </AdminShell>
  );
}
