import { useState } from 'react'
import type { Task } from '../types'

/** Custom hook to manage task state and movement */
export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Build login page', tag: 'feat', column: 'todo' },
    { id: 2, title: 'Fix navbar bug', tag: 'bug', column: 'prog' },
    { id: 3, title: 'Write README', tag: 'docs', column: 'done' },
  ])

  function moveTask(taskId: number, newColumn: string) {
  setTasks(tasks.map(task =>
    task.id === taskId ? { ...task, column: newColumn } : task
  ))
}

  return { tasks, moveTask }
}