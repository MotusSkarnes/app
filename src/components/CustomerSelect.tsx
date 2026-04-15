import { useMemo, useState } from "react";
import type { Customer } from "../types";

export default function CustomerSelect({
  customers,
  selectedCustomerId,
  onSelect,
}: {
  customers: Customer[];
  selectedCustomerId: string | null;
  onSelect: (id: string) => void;
}) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return customers.filter((customer) => {
      const q = search.toLowerCase().trim();
      if (!q) return true;
      return (
        customer.name.toLowerCase().includes(q) ||
        customer.goal.toLowerCase().includes(q) ||
        customer.planName.toLowerCase().includes(q)
      );
    });
  }, [customers, search]);

  return (
    <section className="panel panel-stretch">
      <div className="panel-header">
        <div>
          <p className="eyebrow">Kunder</p>
          <h2>Velg kunde</h2>
        </div>
        <span className="pill">{filtered.length} stk</span>
      </div>

      <label className="search-field">
        <span>Søk etter navn, mål eller program</span>
        <input
          type="text"
          placeholder="Søk kunde..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>

      <div className="customer-list">
        {filtered.map((customer) => {
          const isSelected = selectedCustomerId === customer.id;
          return (
            <button
              key={customer.id}
              type="button"
              className={`customer-card ${isSelected ? "selected" : ""}`}
              onClick={() => onSelect(customer.id)}
            >
              <div className="customer-card-top">
                <div>
                  <strong>{customer.name}</strong>
                  <span>{customer.planName}</span>
                </div>
                <span className="tag">{customer.level}</span>
              </div>

              <p>{customer.goal}</p>

              <div className="customer-meta">
                <span>Siste økt: {customer.lastSession}</span>
                <span>Neste: {customer.upcomingSession}</span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
