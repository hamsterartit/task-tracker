import { LayoutList, Moon, Sun} from 'lucide-react';
import {Button} from './components/Button';
import {AddTaskForm} from "./components/AddTaskForm";
import {StatisticsView} from "./components/StatisticsView";
import {useLocalStorage} from "./utils/useLocalStorage";
import {TaskList} from "./components/TaskList";
import {EmptyView} from "./components/EmptyView";
import {FilterForm} from "./components/FilterForm";
import {useMemo, useState} from "react";
import type {Filter, Sort} from "./utils/types";
import { PRIORITY_ORDER} from "./utils/constants";

export default function App() {
    const {tasks, add, remove, update, toggle} = useLocalStorage();
    const [searchQuery, setSearchQuery] = useState("");
    const [filter, setFilter] = useState<Filter>("all");
    const [sort, setSort] = useState<Sort>("newest");

    const filteredTasks = useMemo(() => {
        const rawFiltered = tasks.filter(task => {
            const matchSearch = task.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchFilter = filter === 'all' ? true : filter === 'completed' ? task.completed : !task.completed;
            return matchFilter && matchSearch;
        });

        switch (sort) {
            case "newest":
                return rawFiltered.sort((a, b) => b.date - a.date);
            case "oldest":
                return rawFiltered.sort((a, b) => a.date - b.date);
            case "inc":
                return rawFiltered.sort((a, b) => PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority]);
            case "dec":
                return rawFiltered.sort((a, b) => PRIORITY_ORDER[b.priority] - PRIORITY_ORDER[a.priority]);
            default:
                return rawFiltered.sort((a, b) => b.date - a.date);
        }
    }, [tasks, searchQuery, filter, sort]);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 font-sans">
            <div className="max-w-3xl mx-auto px-4 py-12">
                <header className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-3">
                        <div
                            className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
                            <LayoutList size={24}/>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">FocusFlow</h1>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Master your day, one task at a
                                time.</p>
                        </div>
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="rounded-full w-10 h-10 p-0"
                    >
                        <Sun size={20}/>
                    </Button>
                </header>

                <StatisticsView tasks={tasks}/>

                <AddTaskForm addTask={add}/>

                {filteredTasks.length > 0 && (
                    <>
                        <FilterForm onSearchChange={setSearchQuery} onFilterChange={setFilter} filterValue={filter} onSortChange={setSort}/>

                        <TaskList tasks={filteredTasks} remove={remove} update={update} toggle={toggle}/>
                    </>

                )}


                {filteredTasks.length === 0 && (
                    <EmptyView/>
                )}
            </div>
        </div>
    );
}
