import type {TaskItem} from "../utils/types.ts";
import {TaskItemView} from "./TaskItemView.tsx";

interface TaskListProps {
    tasks: TaskItem[];
}

export const TaskList = ({tasks}: TaskListProps) => {
    return (
       <>
           {tasks.map((task: TaskItem) => (<TaskItemView key={task.date} task={task}/>))}
       </>

    )
}