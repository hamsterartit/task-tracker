import { useState } from "react";
import { TaskItemView } from "./TaskItemView";
import type { Task as TaskType } from "../utils/types";

interface TaskProps {
    task: TaskType;
    remove: (id: string) => void;
    update: (id: string, description: string) => void;
    toggle: (id: string) => void;
}

export const TaskItem = ({ task, remove, update, toggle }: TaskProps) => {
    const [isEdit, setIsEdit] = useState(false);
    const [value, setValue] = useState(task.description);

    const handleSave = () => {
        if (value.trim() && value !== task.description) {
            update(task.id, value);
        }
        setIsEdit(false);
    };

    return (
        <TaskItemView
            task={task}
            isEdit={isEdit}
            value={value}
            onValueChange={setValue}
            onToggleEdit={() => setIsEdit(true)}
            onSave={handleSave}
            onRemove={() => remove(task.id)}
            onToggleComplete={() => toggle(task.id)}
        />
    );
};