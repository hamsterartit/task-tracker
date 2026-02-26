import type {TaskItem} from "../utils/types.ts";
import {TaskItemView} from "./TaskItemView.tsx";

interface TaskListProps {
    tasks: TaskItem[];
    remove: (id: string) => void;
    update: (id: string, description: string) => void;
    toggle: (id: string) => void;
}

export const TaskList = ({tasks, remove, update, toggle}: TaskListProps) => {
    return (
        <div className="space-y-3">
            {tasks.map((task: TaskItem) => (

                    <TaskItemView key={task.id} task={task} removeTask={remove} updateTask={update} toggleTask={toggle}/>
                )
            )}
        </div>

    )
}