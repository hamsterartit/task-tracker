import {STATISTICS_LIST} from "../utils/constants";
import type {Task} from "../utils/types";


interface StatisticsViewProps {
    tasks: Task[];
}


export const StatisticsView = ({tasks}: StatisticsViewProps) => {
    const statistics = {
        total: tasks.length,
        completed: tasks.filter((task) => task.completed).length,
        active: tasks.filter((task) => !task.completed).length
    }

    return (
        <div className="grid grid-cols-3 gap-4 mb-8">
            {STATISTICS_LIST.map((stat) => (
                <div key={stat.label}
                     className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center gap-2 mb-1">
                        <stat.icon size={14} className={stat.color}/>
                        <span
                            className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{stat.label}</span>
                    </div>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">{statistics[stat.type]}</p>
                </div>
            ))}
        </div>

    )
}