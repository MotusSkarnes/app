import { useState } from "react";
import SegmentedToggle from "./components/SegmentedToggle";
import ClientPage from "./pages/ClientPage";
import TrainerPage from "./pages/TrainerPage";
import type { ViewMode } from "./types";

export default function App() {
  const [view, setView] = useState<ViewMode>("trainer");

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="brand-kicker">PT APP</p>
          <h1>Personlig trenerplattform</h1>
        </div>

        <SegmentedToggle value={view} onChange={setView} />
      </header>

      <main>{view === "trainer" ? <TrainerPage /> : <ClientPage />}</main>
    </div>
  );
}
