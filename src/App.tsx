import {Search, LayoutList, Moon, Sun} from 'lucide-react';
import {Button} from './components/Button';
import {AddTaskForm} from "./components/AddTaskForm.tsx";
import {StatisticsView} from "./components/StatisticsView.tsx";
import {useLocalStorage} from "./utils/useLocalStorage.ts";
import {TaskList} from "./components/TaskList.tsx";
import {EmptyView} from "./components/EmptyView.tsx";

export default function App() {
    const {tasks, add, remove, update} = useLocalStorage();
    const hasTasks = tasks.length > 0;


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
                        <div className="space-y-4 mb-6">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18}/>
                                <input
                                    type="text"
                                    placeholder="Search tasks..."
                                    className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-700 dark:text-slate-200"
                                />
                            </div>
                            <div
                                className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 border-b border-slate-100 dark:border-slate-800">
                                <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
                                    <button

                                        className='px-4 py-1.5 text-sm font-medium rounded-md transition-all'
                                    >
                                        test
                                    </button>
                                </div>

                                <div className="flex items-center gap-2">
                            <span
                                className="text-xs font-medium text-slate-400 uppercase tracking-wider">Sort by:</span>
                                    <select
                                        className="bg-transparent text-sm font-medium text-slate-600 dark:text-slate-300 focus:outline-none cursor-pointer"
                                    >
                                        <option value="date">Date Created</option>
                                        <option value="priority">Priority</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <TaskList tasks={tasks} remove={remove} update={update}/>
                    </>

                )}


                {!hasTasks && (
                    <EmptyView/>
                )}
            </div>
        </div>
    );
}
