import { useDroppable } from '@dnd-kit/core'
import type { Task, Column } from '../types'
import TaskCard from './TaskCard'

type ColumnProps = {
  column: Column
  tasks: Task[]
}

/** Displays a column with its label and list of task cards */
export default function Column({ column, tasks }: ColumnProps) {
  const { setNodeRef } = useDroppable({ id: column.id })

  return (
    <div className="column" ref={setNodeRef}>
      <h2>{column.label}</h2>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}