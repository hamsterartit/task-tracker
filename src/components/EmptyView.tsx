import {LayoutList} from "lucide-react";

export const EmptyView = () => {
    return (
        <div className="text-center py-12">
            <div
                className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                <LayoutList size={32}/>
            </div>
            <h3 className="text-lg font-medium text-slate-900 dark:text-white">No tasks</h3>
        </div>
    )
}