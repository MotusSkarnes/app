export default function ClientPage() {
  return (
    <div className="page-stack">
      <section className="hero-card slim">
        <div>
          <p className="eyebrow">Kundeside</p>
          <h1>Din treningsplan</h1>
          <p className="hero-text">
            Her kan kunden senere se program, notater, fremgang og kommende økter.
            I denne versjonen har siden fått en mye mer profesjonell visning.
          </p>
        </div>
      </section>

      <div className="client-grid">
        <section className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Neste økt</p>
              <h2>Underkropp + kjernestyrke</h2>
            </div>
            <span className="pill">Fredag 09:00</span>
          </div>
          <div className="client-session-list">
            <div className="session-row"><strong>Knebøy</strong><span>3 x 8</span></div>
            <div className="session-row"><strong>Hip thrust</strong><span>4 x 8</span></div>
            <div className="session-row"><strong>Utfall</strong><span>3 x 10</span></div>
            <div className="session-row"><strong>Planke</strong><span>3 x 30 sek</span></div>
          </div>
        </section>

        <section className="panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Coach-notat</p>
              <h2>Fokus denne uken</h2>
            </div>
          </div>
          <div className="note-box">
            Tenk rolige repetisjoner og god kontroll. Målet er ikke å løfte tyngst mulig,
            men å gjøre hver repetisjon bedre enn sist.
          </div>
        </section>
      </div>
    </div>
  );
}
