import type { ViewMode } from "../types";

export default function SegmentedToggle({
  value,
  onChange,
}: {
  value: ViewMode;
  onChange: (value: ViewMode) => void;
}) {
  return (
    <div className="segmented-toggle" role="tablist" aria-label="Velg visning">
      <button
        className={value === "trainer" ? "active" : ""}
        onClick={() => onChange("trainer")}
        type="button"
      >
        Trener
      </button>
      <button
        className={value === "client" ? "active" : ""}
        onClick={() => onChange("client")}
        type="button"
      >
        Kunde
      </button>
    </div>
  );
}
