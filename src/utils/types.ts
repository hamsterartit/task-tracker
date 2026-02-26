import * as react from "react";
import type {LucideProps} from "lucide-react";

export interface Task {
    id: string;
    description: string;
    priority: Priority;
    date: number;
    completed: boolean;
}

export type Priority = 'low' | 'medium' | 'high';

export interface PriorityOption {
    label: string;
    value: Priority;
}

type Icon = react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

export type Statistics = 'total' | 'completed' | 'active';

export interface StatisticsOption {
    label: string;
    icon: Icon;
    color: string;
    type: Statistics;
}

export type Filter = 'all' | 'active' | 'completed';

export interface FilterOption {
    label: string;
    value: Filter;
}

export type Sort = 'newest' | 'oldest' | 'inc' | 'dec';

export interface SortOption {
    label: string;
    value: Sort;
}