import { useState } from 'react'

import { TodoConfig } from '../molecules/todo-config'
import { TodoNew } from '../molecules/todo-new'
import { TodoList } from '../molecules/todo-list'

import '../styles/todo.css'

export interface TodoValueProps {
  text: string
  isCheck: boolean
  date?: Date
  author?: string
}
export interface TodoListProps {
  value: TodoValueProps[] | null
  setValue: React.Dispatch<React.SetStateAction<TodoValueProps[] | null>>
  iconTodoListItem?: React.ReactNode
  isShow: boolean
  filter: "All" | "Active" | "Completed"
}
export interface TodoConfigProps {
  value: TodoValueProps[] | null
  setValue: React.Dispatch<React.SetStateAction<TodoValueProps[] | null>>
  filter: "All" | "Active" | "Completed"
  setFilter: React.Dispatch<React.SetStateAction<"All" | "Active" | "Completed">>
}
export interface TodoListPropsItem {
  id: number
  iconTodoListItem?: React.ReactNode
  value: TodoValueProps
  toggleIsCheckByKey(id: number): void
}
export interface TodoNewProps {
  placeholder?: string
  iconTodoNew?: React.ReactNode
  isShow: boolean
  isSetShow: React.Dispatch<React.SetStateAction<boolean>>
  value: TodoValueProps[] | null
  setValue: React.Dispatch<React.SetStateAction<TodoValueProps[] | null>>
}
interface TodoProps {
  value: TodoValueProps[] | null
  setValue: React.Dispatch<React.SetStateAction<TodoValueProps[] | null>>

  defaultValue?: TodoValueProps[]
  className?: string
  placeholder?: string
  iconTodoNew?: React.ReactNode
  iconTodoListItem?: React.ReactNode
}
export function Todo(props: TodoProps) {
  const [isShow, isSetShow] = useState<boolean>(true)
  const [filter, setFilter] = useState<"All" | "Active" | "Completed">('All')
  return (
    <div className={props.className ? (props.className + " Todo") : "Todo"}>
      <TodoNew isShow={isShow} isSetShow={isSetShow} value={props.value} setValue={props.setValue} />
      <TodoList filter={filter} isShow={isShow} value={props.value} setValue={props.setValue} iconTodoListItem={props.iconTodoListItem} />
      <TodoConfig filter={filter} setFilter={setFilter} value={props.value} setValue={props.setValue} />
    </div>
  )
}
