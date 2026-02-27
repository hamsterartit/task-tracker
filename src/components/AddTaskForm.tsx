import {type BaseSyntheticEvent, useState} from "react";
import type {Priority, Task} from "../utils/types";
import {AddTaskView} from "./AddTaskView";

interface AddTaskFormProps {
    addTask: (task: Task) => void;
}

export const AddTaskForm = ({addTask}: AddTaskFormProps) => {
    const [inputValue, setInputValue] = useState("");
    const [priorityValue, setPriorityValue] = useState<Priority>("low");

    const handleSubmit = (event: BaseSyntheticEvent<SubmitEvent>) => {
        event.preventDefault();

        const task: Task = {
            id: crypto.randomUUID(),
            description: inputValue,
            priority: priorityValue,
            date: Date.now(),
            completed: false,
        }

        addTask(task);

        setInputValue("");
        setPriorityValue('low')
    }


    return (
        <AddTaskView onSubmit={handleSubmit}
                     onInputChange={setInputValue}
                     onRadioChange={setPriorityValue}
                     inputValue={inputValue}
                     priority={priorityValue}
        />

    )
}