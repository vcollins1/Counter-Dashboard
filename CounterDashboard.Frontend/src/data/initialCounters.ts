import type {CounterType} from "../utils/types.ts";

export const initialCounters: CounterType[] = [
    { id: "1", title: "Water", count: 0, min: 0, max: 8, step: 2 },
    { id: "2", title: "Exercise", count: 0, min: 0, max: 5, step: 1 },
    { id: "3", title: "Study", count: 0, min: 0, max: 10 , step: 5 }
];