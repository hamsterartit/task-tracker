import {Edit2, Save, Trash2} from "lucide-react";
import {Button} from "./Button";
import type {TaskItem} from "../utils/types";
import {useState} from "react";

interface TaskItemViewProps {
    task: TaskItem;
    removeTask: (id: string) => void;
    updateTask: (id: string, description: string) => void;
    toggleTask: (id: string) => void;
}

export const TaskItemView = ({task, removeTask, updateTask, toggleTask}: TaskItemViewProps) => {

    const {description, priority, date, id, completed} = task;

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
            className={`group flex items-center gap-4 p-4 rounded-xl border bg-white dark:bg-slate-900 transition-all
             ${completed ?  'border-slate-100 dark:border-slate-800 opacity-75' : 'border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md'}`}>
            <input type="checkbox" name="tasks" checked={completed} onChange={() => toggleTask(id)}/>

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
                        <span className={`text-base truncate transition-all ${
                            completed ? 'text-slate-400 line-through' : 'text-slate-700 dark:text-slate-200 font-medium'
                        }`}>{description}</span>
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