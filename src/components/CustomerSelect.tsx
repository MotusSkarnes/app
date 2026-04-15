import { useState } from "react";
import { Customer } from "../types";

export default function CustomerSelect({
  customers,
  onSelect,
}: {
  customers: Customer[];
  onSelect: (id: string) => void;
}) {
  const [search, setSearch] = useState("");

  const filtered = customers.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Søk kunde..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filtered.map((c) => (
          <li key={c.id} onClick={() => onSelect(c.id)}>
            {c.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
