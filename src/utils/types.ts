export interface TaskItem {
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