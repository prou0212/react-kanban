import type { Task } from '../types'

type TaskCardProps = {
    task: Task
}

/** Displays a single task card with its tag and title */
export default function TaskCard({ task }: TaskCardProps) {
    return (
        <div>
            <span>{task.tag}</span>
            <p>{task.title}</p>
        </div>
    )
}