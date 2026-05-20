import { useTasks } from '../hooks/useTasks'
import type { Column } from '../types'
import ColumnComponent from './Column'
import { DndContext, type DragEndEvent } from '@dnd-kit/core'
import '../App.css'

/** Main board component that holds all columns and tasks */
export default function Board() {

    const { tasks, moveTask } = useTasks()

  // These never change so no useState needed
  const columns: Column[] = [
    { id: 'todo', label: 'To Do' },
    { id: 'prog', label: 'In Progress' },
    { id: 'done', label: 'Done' },
  ]

  function handleDragEnd(event: DragEndEvent) {
  const { active, over } = event
  if (over && active.id !== over.id) {
    moveTask(Number(active.id), String(over.id))
  }
}
  
return (
  <DndContext onDragEnd={handleDragEnd}>
    <div className="board">
      {columns.map(column => (
        <ColumnComponent
          key={column.id}
          column={column}
          tasks={tasks.filter(task => task.column === column.id)}
        />
      ))}
    </div>
  </DndContext>
)
}