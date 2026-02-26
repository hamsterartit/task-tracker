import type {Task} from "./types";
import {useEffect, useState} from "react";

export const useLocalStorage = () => {
    const [tasks, setTasks] = useState<Task[]>(() => {
        const saved = localStorage.getItem('task-tracker');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("task-tracker", JSON.stringify(tasks));
    }, [tasks]);

    const add = (task: Task) => {
        const updated = [...tasks, task];
        setTasks(updated);
    }

    const remove = (id: string) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    const update = (id: string, description: string) => {
        setTasks(tasks.map((task) => {
            if (task.id === id) {
                return {...task, description: description};
            }
            return task;
        }));
    }

    const toggle = (id: string) => {
        setTasks(tasks.map((task) => {
            if (task.id === id) {
                return {...task, completed: !task.completed};
            }
            return task;
        }));
    }

    return {tasks, add, remove, update, toggle};
}