import { useState } from "react";
import { exercises } from "../data/exercises";

export default function ProgramBuilder() {
  const [program, setProgram] = useState<string[]>([]);

  const addExercise = (name: string) => {
    setProgram([...program, name]);
  };

  return (
    <div>
      <h3>Lag treningsprogram</h3>

      <h4>Øvelser</h4>
      {exercises.map((e) => (
        <button key={e.id} onClick={() => addExercise(e.name)}>
          {e.name}
        </button>
      ))}

      <h4>Program</h4>
      <ul>
        {program.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
