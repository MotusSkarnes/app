import { useState } from "react";
import { customers } from "../data/customers";
import CustomerSelect from "../components/CustomerSelect";
import ProgramBuilder from "../components/ProgramBuilder";

export default function TrainerPage() {
  const [selectedCustomer, setSelectedCustomer] = useState<string | null>(null);

  return (
    <div>
      <h2>Trenerside</h2>

      <CustomerSelect
        customers={customers}
        onSelect={setSelectedCustomer}
      />

      {selectedCustomer && <ProgramBuilder />}
    </div>
  );
}
