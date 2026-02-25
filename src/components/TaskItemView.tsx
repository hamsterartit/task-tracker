import { Edit2, Save, Trash2} from "lucide-react";
import {Button} from "./Button.tsx";
import type {TaskItem} from "../utils/types.ts";

interface TaskItemViewProps {
    task: TaskItem;
    removeTask: (id:string) => void;
}

export const TaskItemView = ({task, removeTask}: TaskItemViewProps) => {

    const {description, priority, date} = task;

    const rawDate = new Date(date);
    const formattedDate = rawDate.toLocaleDateString();

    return (

        <div
            className='group flex items-center gap-4 p-4 rounded-xl border bg-white dark:bg-slate-900 transition-all'>
            <input type="checkbox" name="tasks"/>

            <div className="flex-grow min-w-0">
                <input
                    autoFocus
                    type="text"
                    className="w-full bg-transparent text-slate-900 dark:text-slate-100 focus:outline-none border-b border-indigo-500 py-0.5"
                />
                <div className="flex flex-col">
                    <span className='text-base truncate transition-all'>{description}</span>
                    <div className="flex items-center gap-2 mt-1">
                        <span
                            className='text-[10px] px-1.5 py-0.5 rounded-md border font-semibold uppercase tracking-wider'>{priority}</span>
                        <span className="text-[10px] text-slate-400 dark:text-slate-500">createdAt {formattedDate}</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="ghost" size="sm" className="text-emerald-500 hover:text-emerald-600">
                    <Save size={18}/>
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-indigo-500">
                    <Edit2 size={18}/>
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-rose-500" onClick={() => removeTask(task.id)}>
                    <Trash2 size={18}/>
                </Button>
            </div>
        </div>
    )
}