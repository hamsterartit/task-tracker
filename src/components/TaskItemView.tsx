import {Edit2, Save, Trash2} from "lucide-react";
import {Button} from "./Button.tsx";
import type {TaskItem} from "../utils/types.ts";
import {useState} from "react";

interface TaskItemViewProps {
    task: TaskItem;
    removeTask: (id: string) => void;
    updateTask: (id: string, description: string) => void;
}

export const TaskItemView = ({task, removeTask, updateTask}: TaskItemViewProps) => {

    const {description, priority, date, id} = task;

    const rawDate = new Date(date);
    const formattedDate = rawDate.toLocaleDateString();

    const [value, setValue] = useState(description);
    const [isEdit, setIsEdit] = useState(false);

    const handleUpdate = () => {
        updateTask(id, value);
        setIsEdit(false)
    }

    return (

        <div
            className='group flex items-center gap-4 p-4 rounded-xl border bg-white dark:bg-slate-900 transition-all'>
            <input type="checkbox" name="tasks"/>

            <div className="flex-grow min-w-0">

                <div className="flex flex-col">
                    {isEdit && (
                        <input
                            autoFocus
                            type="text"
                            className="w-full bg-transparent text-slate-900 dark:text-slate-100 focus:outline-none border-b border-indigo-500 py-0.5"
                            value={value}
                            onChange={(e) => {
                                setValue(e.target.value)
                            }}
                        />
                    )}
                    {!isEdit && (
                        <span className='text-base truncate transition-all'>{description}</span>
                    )}
                    <div className="flex items-center gap-2 mt-1">
                            <span
                                className='text-[10px] px-1.5 py-0.5 rounded-md border font-semibold uppercase tracking-wider'>{priority}</span>
                        <span
                            className="text-[10px] text-slate-400 dark:text-slate-500">created at {formattedDate}</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {isEdit && (
                    <Button variant="ghost" size="sm" className="text-emerald-500 hover:text-emerald-600"
                            onClick={handleUpdate}>
                        <Save size={18}/>
                    </Button>
                )}
                {!isEdit && (
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-indigo-500"
                            onClick={() => setIsEdit(true)}>
                        <Edit2 size={18}/>
                    </Button>
                )}
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-rose-500"
                        onClick={() => removeTask(task.id)}>
                    <Trash2 size={18}/>
                </Button>
            </div>
        </div>
    )
}