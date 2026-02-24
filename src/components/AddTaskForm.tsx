import {type BaseSyntheticEvent, useState} from "react";
import type {Priority, TaskItem} from "../utils/types";
import {useLocalStorage} from "../utils/useLocalStorage";
import {AddTaskView} from "./AddTaskView";

export const AddTaskForm = () => {
    const [inputValue, setInputValue] = useState("");
    const [priorityValue, setPriorityValue] = useState<Priority>("low");
    const {add} = useLocalStorage();

    const handleSubmit = (event: BaseSyntheticEvent<SubmitEvent>) => {
        event.preventDefault();

        const task: TaskItem = {
            description: inputValue,
            priority: priorityValue,
            date: Date.now(),
            completed: false,
        }

        add(task);

        setInputValue("");
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