import type { Task } from '../types'

type TaskCardProps = {
    task: Task
}

export default function TaskCard({ task }: TaskCardProps) {
    return (
        <div>
            <span>{task.tag}</span>
            <p>{task.title}</p>
        </div>
    )
}