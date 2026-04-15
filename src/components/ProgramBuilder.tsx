import { useEffect, useMemo, useState } from "react";
import { exercises } from "../data/exercises";
import type { Customer, Exercise } from "../types";
import ExerciseLibrary from "./ExerciseLibrary";
import { supabase } from "../lib/supabase";

type ProgramItem = Exercise & {
  id: string;
  notes: string;
};

export default function ProgramBuilder({ customer }: { customer: Customer | undefined }) {
  const [program, setProgram] = useState<ProgramItem[]>([]);
  const [status, setStatus] = useState("");

  const totalExercises = useMemo(() => program.length, [program]);

  useEffect(() => {
    const loadProgram = async () => {
      if (!customer) {
        setProgram([]);
        return;
      }

      setStatus("Laster program...");

      const { data, error } = await supabase
        .from("programs")
        .select("exercises")
        .eq("customer_id", customer.id)
        .maybeSingle();

      if (error) {
        setStatus("Kunne ikke hente program");
        return;
      }

      if (data?.exercises) {
        setProgram(data.exercises as ProgramItem[]);
        setStatus("Program lastet");
      } else {
        setProgram([]);
        setStatus("Ingen lagret plan ennå");
      }
    };

    loadProgram();
  }, [customer]);

  const addExercise = (exercise: Exercise) => {
    setProgram((current) => [
      ...current,
      {
        ...exercise,
        id: `${exercise.id}-${Date.now()}`,
        notes: "",
      },
    ]);
  };

  const removeExercise = (id: string) => {
    setProgram((current) => current.filter((item) => item.id !== id));
  };

  const updateNotes = (id: string, notes: string) => {
    setProgram((current) =>
      current.map((item) => (item.id === id ? { ...item, notes } : item))
    );
  };

  const saveProgram = async () => {
    if (!customer) return;

    setStatus("Lagrer program...");

    const { error } = await supabase.from("programs").upsert(
      {
        customer_id: customer.id,
        exercises: program,
      },
      {
        onConflict: "customer_id",
      }
    );

    if (error) {
      setStatus("Noe gikk galt ved lagring");
      return;
    }

    setStatus("Program lagret");
  };

  return (
    <div className="program-layout">
      <section className="panel panel-stretch">
        <div className="panel-header">
          <div>
            <p className="eyebrow">Programbygger</p>
            <h2>{customer ? customer.name : "Velg en kunde"}</h2>
          </div>
          <span className="pill">{totalExercises} øvelser</span>
        </div>

        {customer ? (
          <>
            <div className="selected-customer-banner">
              <div>
                <strong>{customer.planName}</strong>
                <p>{customer.goal}</p>
              </div>
              <div className="banner-meta">
                <span>{customer.level}</span>
                <span>Neste time: {customer.upcomingSession}</span>
              </div>
            </div>

            <div style={{ marginBottom: 16, display: "flex", gap: 12, alignItems: "center" }}>
              <button type="button" className="primary-button" onClick={saveProgram}>
                Lagre program
              </button>
              <span>{status}</span>
            </div>

            <div className="program-list">
              {program.map((item, index) => (
                <article key={item.id} className="program-item">
                  <div className="program-item-head">
                    <div className="program-order">{index + 1}</div>
                    <div>
                      <strong>{item.name}</strong>
                      <span>
                        {item.muscleGroup} · {item.defaultReps}
                      </span>
                    </div>
                    <button
                      type="button"
                      className="ghost-button"
                      onClick={() => removeExercise(item.id)}
                    >
                      Fjern
                    </button>
                  </div>

                  <label>
                    <span>Notater</span>
                    <input
                      type="text"
                      placeholder="F.eks. fokus på teknikk eller tempo"
                      value={item.notes}
                      onChange={(e) => updateNotes(item.id, e.target.value)}
                    />
                  </label>
                </article>
              ))}
            </div>
          </>
        ) : (
          <div className="empty-state">
            <strong>Velg en kunde for å starte</strong>
            <p>Deretter kan du bygge program, legge inn notater og lagre det på kunden.</p>
          </div>
        )}
      </section>

      <ExerciseLibrary exercises={exercises} onAdd={addExercise} />
    </div>
  );
}
