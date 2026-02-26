import {Edit2, Save, Trash2} from "lucide-react";
import {Button} from "./Button";
import type {Task} from "../utils/types";
import {formatDate} from "../utils/formatDate";

interface TaskItemViewProps {
    task: Task;
    isEdit: boolean;
    value: string;
    onValueChange: (val: string) => void;
    onToggleEdit: () => void;
    onSave: () => void;
    onRemove: () => void;
    onToggleComplete: () => void;
}

export const TaskItemView = (props: TaskItemViewProps) => {

    const {
        task, isEdit, value, onValueChange,
        onToggleEdit, onSave, onRemove, onToggleComplete
    } = props;

    const formattedDate = formatDate(task.date);

    return (
        <div className={`group flex items-center gap-4 p-4 rounded-xl border bg-white dark:bg-slate-900 transition-all
             ${task.completed ? 'border-slate-100 dark:border-slate-800 opacity-75' : 'border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md'}`}>

            <input
                type="checkbox"
                checked={task.completed}
                onChange={onToggleComplete}
            />

            <div className="flex-1 min-w-0">
                {isEdit ? (
                    <input
                        autoFocus
                        type="text"
                        className="w-full bg-transparent text-slate-900 dark:text-slate-100 focus:outline-none border-b border-indigo-500 py-0.5"
                        value={value}
                        onChange={(e) => onValueChange(e.target.value)}
                    />
                ) : (
                    <span
                        className={`block truncate ${task.completed ? 'line-through text-slate-400' : 'text-slate-700 dark:text-slate-200'}`}>
                        {task.description}
                    </span>
                )}
                <div className="flex items-center gap-2 mt-1">
                    <span
                        className='text-[10px] px-1.5 py-0.5 rounded-md border font-semibold uppercase tracking-wider'>
                        {task.priority}
                    </span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500">
                        created at {formattedDate}
                    </span>
                </div>
            </div>

            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {isEdit ? (
                    <Button variant="ghost" size="sm" className="text-emerald-500" onClick={onSave}>
                        <Save size={18}/>
                    </Button>
                ) : (
                    <Button variant="ghost" size="sm" className="text-slate-400" onClick={onToggleEdit}>
                        <Edit2 size={18}/>
                    </Button>
                )}
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-rose-500" onClick={onRemove}>
                    <Trash2 size={18}/>
                </Button>
            </div>
        </div>
    );
};