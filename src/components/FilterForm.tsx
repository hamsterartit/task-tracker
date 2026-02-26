import {Search} from "lucide-react";

interface FilterFormProps {
    onSearch: (value: string) => void;
}

export const FilterForm = ({onSearch}: FilterFormProps) => {
    return (
        <div className="space-y-4 mb-6">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18}/>
                <input
                    type="text"
                    placeholder="Search tasks..."
                    onChange={(event) => onSearch(event.target.value)}
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

    )
}