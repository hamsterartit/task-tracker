import type {Sort, Task} from "./types";
import {PRIORITY_ORDER} from "./constants";

export const sortItems = (tasks: Task[], sort: Sort) => {
    switch (sort) {
        case "newest":
            return tasks.sort((a, b) => b.date - a.date);
        case "oldest":
            return tasks.sort((a, b) => a.date - b.date);
        case "inc":
            return tasks.sort((a, b) => PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority]);
        case "dec":
            return tasks.sort((a, b) => PRIORITY_ORDER[b.priority] - PRIORITY_ORDER[a.priority]);
        default:
            return tasks.sort((a, b) => b.date - a.date);
    }
}