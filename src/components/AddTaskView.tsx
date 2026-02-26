import {Input} from "./Input";
import {Button} from "./Button";
import {Plus} from "lucide-react";
import {type BaseSyntheticEvent} from "react";
import {PRIORITY_LIST} from "../utils/constants";
import type {Priority} from "../utils/types";

interface AddTaskViewProps {
    onSubmit: (event: BaseSyntheticEvent<SubmitEvent>) => void;
    onInputChange: (value: string) => void;
    onRadioChange: (value: Priority) => void;
    inputValue: string;
    priority: Priority;
}

export const AddTaskView = (props: AddTaskViewProps) => {
    const {onSubmit, onInputChange, onRadioChange, inputValue, priority} = props;

    return (
        <div
            className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm mb-8">
            <form onSubmit={onSubmit} className="space-y-4">
                <div className="flex gap-2">
                    <Input
                        placeholder="What needs to be done?"
                        className="text-lg"
                        onChange={(event) => onInputChange(event.target.value)}
                        value={inputValue}
                    />
                    <Button type="submit" className="flex-shrink-0">
                        <Plus size={20} className="mr-2"/> Add
                    </Button>
                </div>
                <div className="flex items-center gap-4">
                            <span
                                className="text-xs font-medium text-slate-400 uppercase tracking-wider">Priority:</span>
                    <div className="flex gap-4">
                        {PRIORITY_LIST.map((item) => (
                            <label key={item.value} htmlFor={item.value} className="flex items-center gap-1">
                                <input type="radio" value={item.value} id={item.value} name="priority"
                                       checked={priority === item.value} onChange={() => onRadioChange(item.value)}
                                />
                                <span>{item.label}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </form>
        </div>

    )
}