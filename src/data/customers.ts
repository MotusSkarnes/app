import type { Customer } from "../types";

export const customers: Customer[] = [
  {
    id: "1",
    name: "Ola Nordmann",
    goal: "Bygge styrke i hele kroppen",
    planName: "Fullkropp 2 dager",
    level: "Nybegynner",
    lastSession: "Mandag",
    upcomingSession: "Torsdag 17:00",
  },
  {
    id: "2",
    name: "Kari Hansen",
    goal: "Strammere og sterkere kropp",
    planName: "Overkropp / underkropp",
    level: "Premium",
    lastSession: "Tirsdag",
    upcomingSession: "Fredag 09:00",
  },
  {
    id: "3",
    name: "Per Johansen",
    goal: "Bedre rygg og sterkere bein",
    planName: "Rygg og bein fokus",
    level: "Viderekommen",
    lastSession: "Onsdag",
    upcomingSession: "Lørdag 10:30",
  },
  {
    id: "4",
    name: "Ingrid Solberg",
    goal: "Komme i gang igjen",
    planName: "Myk oppstart",
    level: "Nybegynner",
    lastSession: "Søndag",
    upcomingSession: "Mandag 18:00",
  }
];
