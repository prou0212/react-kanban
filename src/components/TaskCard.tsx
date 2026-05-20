import { useDraggable } from '@dnd-kit/core'
import type { Task } from '../types'

type TaskCardProps = {
  task: Task
}

/** Displays a single task card with its tag and title */
export default function TaskCard({ task }: TaskCardProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: task.id })

  const style = transform ? {
    transform: `translate(${transform.x}px, ${transform.y}px)`
  } : undefined

  return (
    <div className="card" ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <span>{task.tag}</span>
      <p>{task.title}</p>
    </div>
  )
}