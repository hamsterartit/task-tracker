import {LayoutList, Moon, Sun} from 'lucide-react';
import {Button} from './components/Button';
import {AddTaskForm} from "./components/AddTaskForm";
import {StatisticsView} from "./components/StatisticsView";
import {useLocalStorage} from "./utils/useLocalStorage";
import {EmptyView} from "./components/EmptyView";
import {FilterView} from "./components/FilterView";
import {useState} from "react";
import type {Filter, Sort} from "./utils/types";
import {useFilteredTasks} from "./utils/useFilteredTasks";
import {TaskList} from "./components/TaskList";

export default function App() {
    const {tasks, add, remove, update, toggle} = useLocalStorage();
    const [searchQuery, setSearchQuery] = useState("");
    const [filter, setFilter] = useState<Filter>("all");
    const [sort, setSort] = useState<Sort>("newest");

    const filteredTasks = useFilteredTasks(tasks, searchQuery, filter, sort);

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

                {tasks.length > 0 && (
                    <FilterView onSearchChange={setSearchQuery} onFilterChange={setFilter} filterValue={filter}
                                onSortChange={setSort}/>

                )}

                {filteredTasks.length > 0 && (
                    <TaskList tasks={filteredTasks} remove={remove} update={update} toggle={toggle}/>
                )}


                {filteredTasks.length === 0 && (
                    <EmptyView/>
                )}
            </div>
        </div>
    );
}
