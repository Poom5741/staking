import { GPPage } from "../components/GPPage";

const tx = [
  { t: "Stake", d: "2026-06-02 14:22:08", h: "0x9f3a…21a4", a: "+120,000", pos: true },
  { t: "Claim Rewards", d: "2026-05-28 09:10:51", h: "0x3c77…88e1", a: "+642.10", pos: true },
  { t: "Dividend", d: "2026-05-21 00:00:00", h: "0xbb12…04c3", a: "+598.40", pos: true },
  { t: "Stake", d: "2026-05-15 18:47:33", h: "0x71de…b4d9", a: "+80,000", pos: true },
  { t: "Dividend", d: "2026-05-14 00:00:00", h: "0xa901…77f2", a: "+561.20", pos: true },
  { t: "Unstake", d: "2026-05-04 11:03:19", h: "0x12fa…fa07", a: "−15,000", pos: false },
  { t: "Dividend", d: "2026-04-30 00:00:00", h: "0xaa55…c92b", a: "+180.40", pos: true },
  { t: "Stake", d: "2026-04-12 08:21:40", h: "0x44cd…1e9a", a: "+48,500", pos: true },
];
const filters = ["All", "Stake", "Unstake", "Claim", "Dividend"];
const gc = "1.3fr 1.5fr 1.2fr 1fr auto";

export default function HistoryPage() {
  return (
    <GPPage active="History">
      <section className="gpp-head" style={{ paddingBottom: 28 }}>
        <div className="gpp-kick">— Ledger · On-chain activity</div>
        <h1 className="gpp-title">Transaction History</h1>
      </section>

      <div className="gpp-strip">
        <div>
          <div className="gpp-strip-l">Total Staked In</div>
          <div className="gpp-strip-v">248,500</div>
        </div>
        <div>
          <div className="gpp-strip-l">Total Claimed</div>
          <div className="gpp-strip-v g">8,917</div>
        </div>
        <div>
          <div className="gpp-strip-l">Total Unstaked</div>
          <div className="gpp-strip-v">15,000</div>
        </div>
        <div>
          <div className="gpp-strip-l">Transactions</div>
          <div className="gpp-strip-v">42</div>
        </div>
      </div>

      <div className="gpp-filters">
        {filters.map((f, i) => (
          <button key={f} className={i === 0 ? "on" : ""}>
            {f}
          </button>
        ))}
      </div>

      <section className="gpp-sec" style={{ paddingTop: 22 }}>
        <div className="gpp-thead" style={{ gridTemplateColumns: gc }}>
          <span>Type</span>
          <span>Timestamp</span>
          <span>Tx Hash</span>
          <span>Status</span>
          <span style={{ textAlign: "right" }}>Amount</span>
        </div>
        {tx.map((r, i) => (
          <div className="gpp-trow" key={i} style={{ gridTemplateColumns: gc }}>
            <div className="gpp-name-mc">{r.t}</div>
            <div className="gpp-mono" style={{ fontSize: 13 }}>
              {r.d}
            </div>
            <div className="gpp-mono" style={{ fontSize: 13 }}>
              {r.h}
            </div>
            <div className="gpp-status">
              <i className="gpp-sdot" />
              Confirmed
            </div>
            <div className={r.pos ? "gpp-amt-pos" : "gpp-amt-neg"}>{r.a} AUR</div>
          </div>
        ))}
        <div className="gpp-pager">
          <span>Showing 1–8 of 42 transactions</span>
          <div className="gpp-pg">
            <a>‹</a>
            <a className="on">1</a>
            <a>2</a>
            <a>3</a>
            <a>4</a>
            <a>5</a>
            <a>›</a>
          </div>
        </div>
      </section>
    </GPPage>
  );
}
