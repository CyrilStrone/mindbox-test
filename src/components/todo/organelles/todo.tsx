import { useState } from 'react'

import { TodoConfig } from '../molecules/todo-config'
import { TodoNew } from '../molecules/todo-new'
import { TodoList } from '../molecules/todo-list'

import '../styles/todo.css'

interface TodoValueStateProps {
  value: TodoValueProps[] | null
  setValue: React.Dispatch<React.SetStateAction<TodoValueProps[] | null>>
}
interface TodoShowStateProps {
  isShow: boolean
  isSetShow?: React.Dispatch<React.SetStateAction<boolean>>
}
type TodoFilterStatePropsFilter = "All" | "Active" | "Completed";
interface TodoFilterStateProps {
  filter: TodoFilterStatePropsFilter
  setFilter?: React.Dispatch<React.SetStateAction<"All" | "Active" | "Completed">>
}
export interface TodoValueProps {
  text: string
  isCheck: boolean
  date?: Date
  author?: string
}
export interface TodoListProps extends TodoValueStateProps, TodoShowStateProps, TodoFilterStateProps {
  iconTodoListItem?: React.ReactNode
}
export interface TodoConfigProps extends TodoValueStateProps, TodoFilterStateProps { }
export interface TodoListPropsItem {
  id: number
  iconTodoListItem?: React.ReactNode
  value: TodoValueProps
  toggleIsCheckByKey(id: number): void
}
export interface TodoNewProps extends TodoValueStateProps, TodoShowStateProps {
  placeholder?: string
  iconTodoNew?: React.ReactNode
}
interface TodoProps extends TodoValueStateProps {
  defaultValue?: TodoValueProps[]
  className?: string
  placeholder?: string
  iconTodoNew?: React.ReactNode
  iconTodoListItem?: React.ReactNode
}

export function Todo(props: TodoProps) {
  const [isShow, isSetShow] = useState<boolean>(true)
  const [filter, setFilter] = useState<TodoFilterStatePropsFilter>('All')
  return (
    <div className={props.className ? (props.className + " Todo") : "Todo"}>
      <TodoNew isShow={isShow} isSetShow={isSetShow} value={props.value} setValue={props.setValue} />
      <TodoList filter={filter} isShow={isShow} value={props.value} setValue={props.setValue} iconTodoListItem={props.iconTodoListItem} />
      <TodoConfig filter={filter} setFilter={setFilter} value={props.value} setValue={props.setValue} />
    </div>
  )
}
