import { useState } from "react";
import TrainerPage from "./pages/TrainerPage";
import ClientPage from "./pages/ClientPage";

export default function App() {
  const [view, setView] = useState<"trainer" | "client">("trainer");

  return (
    <div style={{ padding: 20 }}>
      <h1>PT App</h1>

      <button onClick={() => setView("trainer")}>Trener</button>
      <button onClick={() => setView("client")}>Kunde</button>

      {view === "trainer" ? <TrainerPage /> : <ClientPage />}
    </div>
  );
}
