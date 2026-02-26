import type {FilterOption, Priority, PriorityOption, SortOption, StatisticsOption} from "./types";
import {CheckCircle2, Circle, LayoutList} from "lucide-react";

export const PRIORITY_LIST: PriorityOption[] = [
    { label: 'Low', value: 'low' },
    { label: 'Medium', value: 'medium' },
    { label: 'High', value: 'high' },
];

export const PRIORITY_ORDER: Record<Priority, number> = {
    'low': 0,
    'medium': 1,
    'high': 2
}

export const STATISTICS_LIST: StatisticsOption[] = [
    {label: 'Total', icon: LayoutList, color: 'text-indigo-600', type: 'total'},
    {label: 'Active', icon: Circle, color: 'text-amber-600', type: 'active'},
    {label: 'Done', icon: CheckCircle2, color: 'text-emerald-600', type: 'completed'},
];

export const FILTERS_LIST: FilterOption[] = [
    {label: 'All', value: 'all'},
    {label: 'Active', value: 'active'},
    {label: 'Completed', value: 'completed'},
]

export const SORT_LIST: SortOption[] = [
    {label: 'By date (newest)', value: 'newest'},
    {label: 'By date (oldest)', value: 'oldest'},
    {label: 'By priority (inc)', value: 'inc'},
    {label: 'By priority (dec)', value: 'dec'},
]