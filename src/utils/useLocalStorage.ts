import type {TaskItem} from "./types";

export const useLocalStorage = () => {
    const storage = localStorage.getItem("task-tracker");

    const add = (task: TaskItem) => {
        if (!storage) {
            localStorage.setItem("task-tracker", JSON.stringify([task]));
        } else {
            const parsedStorage = JSON.parse(storage);
            const updatedStorage: TaskItem[] = [...parsedStorage, task];
            const stringifiedStorage = JSON.stringify(updatedStorage);
            localStorage.setItem("task-tracker", stringifiedStorage);
        }
    }

    return {add};
}