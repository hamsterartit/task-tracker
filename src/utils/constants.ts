import type {FilterOption, PriorityOption, StatisticsOption} from "./types.ts";
import {CheckCircle2, Circle, LayoutList} from "lucide-react";

export const PRIORITY_LIST: PriorityOption[] = [
    { label: 'Low', value: 'low', level: 0 },
    { label: 'Medium', value: 'medium', level: 1 },
    { label: 'High', value: 'high', level: 2 },
];

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