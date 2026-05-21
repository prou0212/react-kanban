# React Kanban Board

A drag-and-drop task management board built with React and TypeScript.

## Features

- Drag and drop tasks between columns using @dnd-kit
- Three columns: To Do, In Progress, and Done
- Color coded task tags (Feature, Bug, Docs)
- Dark mode UI

## Tech Stack

- React
- TypeScript
- CSS
- @dnd-kit/core

## Getting Started

### Installation

```bash
npm install
```

### Run the app

```bash
npm run dev
```

Then open http://localhost:5173 in your browser.

## Project Structure

```
src/
  components/    # TaskCard, Column, Board
  hooks/         # useTasks custom hook
  types/         # TypeScript type definitions
```
