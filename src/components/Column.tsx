import type { Task, Column } from '../types'

import TaskCard from './TaskCard'

type ColumnProps =  {
    column: Column,
    tasks: Task[]
}

/** Displays a column with its label and list of task cards */
export default function Column({ column, tasks }: ColumnProps) {
    return (
        <div className="column">
            <h2>{column.label}</h2>
            {tasks.map(task => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    )
}