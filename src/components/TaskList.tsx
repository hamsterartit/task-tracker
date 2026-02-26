import type {Task} from "../utils/types";
import {TaskItem} from "./TaskItem";

interface TaskListProps {
    tasks: Task[];
    remove: (id: string) => void;
    update: (id: string, description: string) => void;
    toggle: (id: string) => void;
}

export const TaskList = ({tasks, remove, update, toggle}: TaskListProps) => {
    return (
        <div className="space-y-3">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    remove={remove}
                    update={update}
                    toggle={toggle}
                />
            ))}
        </div>
    );
};