import {useMemo} from "react";
import type {Filter, Sort, Task} from "./types";
import {sortItems} from "./sortItems";

export const useFilteredTasks = (tasks: Task[], searchQuery: string, filter:Filter, sort:Sort) => {
    const filteredTasks = useMemo(() => {
        const rawFiltered = tasks.filter(task => {
            const matchSearch = task.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchFilter = filter === 'all' ? true : filter === 'completed' ? task.completed : !task.completed;
            return matchFilter && matchSearch;
        });

        return sortItems(rawFiltered, sort)

    }, [tasks, searchQuery, filter, sort]);


    return filteredTasks;
}