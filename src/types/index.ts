/** Represents a single task on the board */
export type Task = { 
    id: number, 
    title: string, 
    column: string, 
    tag: string
}

/** Represents a column on the board */
export type Column = {
    id: string,
    label: string
}