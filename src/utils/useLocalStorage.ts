import type {TaskItem} from "./types";
import {useEffect, useState} from "react";

export const useLocalStorage = () => {
    const [tasks, setTasks] = useState<TaskItem[]>(() => {
        const saved = localStorage.getItem('task-tracker');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("task-tracker", JSON.stringify(tasks));
    }, [tasks]);

    const add = (task: TaskItem) => {
        const updated = [...tasks, task];
        setTasks(updated);
    }

    const remove = (id: string) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    return {tasks, add, remove};
}