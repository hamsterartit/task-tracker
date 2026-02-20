import {Plus, Search, LayoutList, CheckCircle2, Circle, Moon, Sun, Check, Save, Edit2, Trash2} from 'lucide-react';
import {Button} from './components/Button';
import {Input} from './components/Input';

export default function App() {


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
                <div className="grid grid-cols-3 gap-4 mb-8">
                    {[
                        {label: 'Total', icon: LayoutList, color: 'text-indigo-600'},
                        {label: 'Active', icon: Circle, color: 'text-amber-600'},
                        {label: 'Done', icon: CheckCircle2, color: 'text-emerald-600'},
                    ].map((stat) => (
                        <div key={stat.label}
                             className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                            <div className="flex items-center gap-2 mb-1">
                                <stat.icon size={14} className={stat.color}/>
                                <span
                                    className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{stat.label}</span>
                            </div>
                            <p className="text-2xl font-bold text-slate-900 dark:text-white">test</p>
                        </div>
                    ))}
                </div>

                {/* Add Task Form */}
                <div
                    className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm mb-8">
                    <form className="space-y-4">
                        <div className="flex gap-2">
                            <Input
                                placeholder="What needs to be done?"
                                className="text-lg"
                            />
                            <Button type="submit" className="flex-shrink-0">
                                <Plus size={20} className="mr-2"/> Add
                            </Button>
                        </div>
                        <div className="flex items-center gap-4">
                            <span
                                className="text-xs font-medium text-slate-400 uppercase tracking-wider">Priority:</span>
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    className='px-3 py-1 text-xs font-semibold rounded-full border transition-all'
                                >
                                    test
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Search & Filter */}
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

                {/* Task List */}
                <div className="space-y-3">
                    <div
                        className='group flex items-center gap-4 p-4 rounded-xl border bg-white dark:bg-slate-900 transition-all'>
                        <button
                            className='flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors'
                        >
                            <Check size={14} strokeWidth={3}/>
                        </button>

                        <div className="flex-grow min-w-0">
                            <input
                                autoFocus
                                type="text"
                                className="w-full bg-transparent text-slate-900 dark:text-slate-100 focus:outline-none border-b border-indigo-500 py-0.5"
                            />
                            <div className="flex flex-col">
            <span
                className='text-base truncate transition-all'
            >
              title
            </span>
                                <div className="flex items-center gap-2 mt-1">
              <span className='text-[10px] px-1.5 py-0.5 rounded-md border font-semibold uppercase tracking-wider'>
                priority
              </span>
                                    <span className="text-[10px] text-slate-400 dark:text-slate-500">
                createdAt
              </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button variant="ghost" size="sm" className="text-emerald-500 hover:text-emerald-600">
                                <Save size={18}/>
                            </Button>
                            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-indigo-500">
                                <Edit2 size={18}/>
                            </Button>
                            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-rose-500">
                                <Trash2 size={18}/>
                            </Button>
                        </div>
                    </div>
                    <div
                        className="text-center py-12"
                    >
                        <div
                            className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                            <LayoutList size={32}/>
                        </div>
                        <h3 className="text-lg font-medium text-slate-900 dark:text-white">No tasks found</h3>
                        <p className="text-slate-500 dark:text-slate-400">Try adjusting your filters or search
                            query.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
