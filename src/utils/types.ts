import * as react from "react";
import type {LucideProps} from "lucide-react";

export interface TaskItem {
    id: string;
    description: string;
    priority: string;
    date: number;
    completed: boolean;
}

export type Priority = 'low' | 'medium' | 'high';

export interface PriorityOption {
    label: string;
    value: Priority;
    level: number;
}

type Icon = react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

export type Statistics = 'total' | 'completed' | 'active';

export interface StatisticsOption {
    label: string;
    icon: Icon;
    color: string;
    type: Statistics;
}