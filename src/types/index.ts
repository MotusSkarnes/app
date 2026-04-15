export type ViewMode = "trainer" | "client";

export type Customer = {
  id: string;
  name: string;
  goal: string;
  planName: string;
  level: "Nybegynner" | "Viderekommen" | "Premium";
  lastSession: string;
  upcomingSession: string;
};

export type Exercise = {
  id: string;
  name: string;
  muscleGroup: string;
  equipment: string;
  defaultReps: string;
};
