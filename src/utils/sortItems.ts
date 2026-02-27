import type {Sort, Task} from "./types";
import {PRIORITY_ORDER} from "./constants";

export const sortItems = (tasks: Task[], sort: Sort) => {
    const sorted = [...tasks];
    switch (sort) {
        case "newest":
            return sorted.sort((a, b) => b.date - a.date);
        case "oldest":
            return sorted.sort((a, b) => a.date - b.date);
        case "inc":
            return sorted.sort((a, b) => PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority]);
        case "dec":
            return sorted.sort((a, b) => PRIORITY_ORDER[b.priority] - PRIORITY_ORDER[a.priority]);
        default:
            return sorted;
    }
}