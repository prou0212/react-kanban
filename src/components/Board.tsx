import { useState } from 'react'
import type { Task, Column } from '../types'
import ColumnComponent from './Column'
import '../App.css'

/** Main board component that holds all columns and tasks */
export default function Board() {

  // These never change so no useState needed
  const columns: Column[] = [
    { id: 'todo', label: 'To Do' },
    { id: 'prog', label: 'In Progress' },
    { id: 'done', label: 'Done' },
  ]

  // Tasks can change so we use useState
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Build login page', tag: 'feat', column: 'todo' },
    { id: 2, title: 'Fix navbar bug', tag: 'bug', column: 'prog' },
    { id: 3, title: 'Write README', tag: 'docs', column: 'done' },
  ])

  return (
    <div className="board">
      {columns.map(column => (
        <ColumnComponent
          key={column.id}
          column={column}
          tasks={tasks.filter(task => task.column === column.id)}
        />
      ))}
    </div>
  )
}