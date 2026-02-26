import {Search, LayoutList, Moon, Sun} from 'lucide-react';
import {Button} from './components/Button';
import {AddTaskForm} from "./components/AddTaskForm.tsx";
import {StatisticsView} from "./components/StatisticsView.tsx";
import {useLocalStorage} from "./utils/useLocalStorage.ts";
import {TaskList} from "./components/TaskList.tsx";
import {EmptyView} from "./components/EmptyView.tsx";
import {FilterForm} from "./components/FilterForm.tsx";
import {useMemo, useState} from "react";
import type {Filter} from "./utils/types.ts";

export default function App() {
    const {tasks, add, remove, update} = useLocalStorage();
    const hasTasks = tasks.length > 0;
    const [searchQuery, setSearchQuery] = useState("");
    const [filter, setFilter] = useState<Filter>("all");

    const filteredTasks = useMemo(() => {
        return tasks.filter(task => {
            const matchSearch = task.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchFilter = filter === 'all' ? true : filter === 'completed' ? task.completed : !task.completed;
            return matchFilter && matchSearch;
        })
    }, [tasks, searchQuery, filter]);



    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 font-sans">
            <div className="max-w-3xl mx-auto px-4 py-12">
                {/* Header */}
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

                {/* Stats Grid */}
                <StatisticsView tasks={tasks}/>

                {/* Add Task Form */}
                <AddTaskForm addTask={add}/>

                {hasTasks && (
                    <>
                        <FilterForm onSearch={setSearchQuery} onFilterChange={setFilter}/>

                        <TaskList tasks={filteredTasks} remove={remove} update={update}/>
                    </>

                )}


                {!hasTasks && (
                    <EmptyView/>
                )}
            </div>
        </div>
    );
}
