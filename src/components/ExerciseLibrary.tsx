import { useMemo, useState } from "react";
import type { Exercise } from "../types";

export default function ExerciseLibrary({
  exercises,
  onAdd,
}: {
  exercises: Exercise[];
  onAdd: (exercise: Exercise) => void;
}) {
  const [filter, setFilter] = useState("Alle");

  const groups = useMemo(() => {
    return ["Alle", ...Array.from(new Set(exercises.map((exercise) => exercise.muscleGroup)))];
  }, [exercises]);

  const filteredExercises = useMemo(() => {
    if (filter === "Alle") return exercises;
    return exercises.filter((exercise) => exercise.muscleGroup === filter);
  }, [exercises, filter]);

  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <p className="eyebrow">Øvelsesbank</p>
          <h2>Legg til øvelser</h2>
        </div>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          {groups.map((group) => (
            <option key={group} value={group}>
              {group}
            </option>
          ))}
        </select>
      </div>

      <div className="exercise-grid">
        {filteredExercises.map((exercise) => (
          <div key={exercise.id} className="exercise-card">
            <div>
              <strong>{exercise.name}</strong>
              <span>
                {exercise.muscleGroup} · {exercise.equipment}
              </span>
            </div>
            <div className="exercise-bottom">
              <span>{exercise.defaultReps}</span>
              <button type="button" onClick={() => onAdd(exercise)}>
                Legg til
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
