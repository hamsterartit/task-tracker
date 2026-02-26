import {Search} from "lucide-react";
import {FILTERS_LIST, SORT_LIST} from "../utils/constants";
import type {Filter, Sort} from "../utils/types";

interface FilterFormProps {
    onSearchChange: (value: string) => void;
    onFilterChange: (value: Filter) => void;
    onSortChange: (value: Sort) => void;
    filterValue: Filter;
}

export const FilterForm = ({onSearchChange, onFilterChange,onSortChange, filterValue}: FilterFormProps) => {
    return (
        <div className="space-y-4 mb-6">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18}/>
                <input
                    type="text"
                    placeholder="Search tasks..."
                    onChange={(event) => onSearchChange(event.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-700 dark:text-slate-200"
                />
            </div>
            <div
                className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex gap-4">
                    {FILTERS_LIST.map((item) => (
                        <label key={item.value} htmlFor={item.value} className="flex items-center gap-1">
                            <input type="radio" value={item.value} id={item.value} name="filter"
                                   checked={item.value === filterValue}
                                    onChange={() => onFilterChange(item.value)}
                            />
                            <span>{item.label}</span>
                        </label>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                            <span
                                className="text-xs font-medium text-slate-400 uppercase tracking-wider">Sort by:</span>
                    <select
                        className="bg-transparent text-sm font-medium text-slate-600 dark:text-slate-300 focus:outline-none cursor-pointer"
                        onChange={(event) => onSortChange(event.target.value as Sort)}
                    >
                        {SORT_LIST.map((item) => (
                            <option key={item.value} value={item.value}>{item.label}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>

    )
}