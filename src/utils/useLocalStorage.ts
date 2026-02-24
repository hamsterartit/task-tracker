import type {TaskItem} from "./types";
import {useState} from "react";

export const useLocalStorage = () => {
    const [tasks, setTasks] = useState<TaskItem[]>(() => {
        const saved = localStorage.getItem('task-tracker');
        return saved ? JSON.parse(saved) : [];
    });

    const add = (task: TaskItem) => {
        const updated = [...tasks, task];
        setTasks(updated);
        localStorage.setItem("task-tracker", JSON.stringify(updated));
    }

    return {tasks, add};
}