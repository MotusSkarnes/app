import { useMemo, useState } from "react";
import CustomerSelect from "../components/CustomerSelect";
import ProgramBuilder from "../components/ProgramBuilder";
import StatCard from "../components/StatCard";
import { customers } from "../data/customers";

export default function TrainerPage() {
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(customers[0]?.id ?? null);

  const selectedCustomer = useMemo(
    () => customers.find((customer) => customer.id === selectedCustomerId),
    [selectedCustomerId]
  );

  return (
    <div className="page-stack">
      <section className="hero-card">
        <div>
          <p className="eyebrow">Treneroversikt</p>
          <h1>Bygg programmer raskere og ryddigere</h1>
          <p className="hero-text">
            Denne versjonen er laget for å føles mer som en ekte app: bedre oversikt,
            tydeligere kundevalg og en mye renere programbygger.
          </p>
        </div>

        <div className="stats-grid">
          <StatCard label="Aktive kunder" value="24" helper="4 nye denne måneden" />
          <StatCard label="Planlagte PT-timer" value="9" helper="Neste i morgen kl. 09:00" />
          <StatCard label="Program oppdatert" value="16" helper="Siste 7 dager" />
        </div>
      </section>

      <div className="trainer-grid">
        <CustomerSelect
          customers={customers}
          selectedCustomerId={selectedCustomerId}
          onSelect={setSelectedCustomerId}
        />
        <ProgramBuilder customer={selectedCustomer} />
      </div>
    </div>
  );
}
