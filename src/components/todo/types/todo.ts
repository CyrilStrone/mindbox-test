interface TodoValueStateProps {
  value: TodoValueProps[] | null
  setValue: React.Dispatch<React.SetStateAction<TodoValueProps[] | null>>
}
interface TodoShowStateProps {
  isShow: boolean
  isSetShow?: React.Dispatch<React.SetStateAction<boolean>>
}

export type TodoFilterStatePropsFilter = 'All' | 'Active' | 'Completed'

interface TodoFilterStateProps {
  filter: TodoFilterStatePropsFilter
  setFilter?: React.Dispatch<React.SetStateAction<'All' | 'Active' | 'Completed'>>
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
export interface TodoConfigProps extends TodoValueStateProps, TodoFilterStateProps {}
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

export interface TodoProps extends TodoValueStateProps {
  defaultValue?: TodoValueProps[]
  className?: string
  placeholder?: string
  iconTodoNew?: React.ReactNode
  iconTodoListItem?: React.ReactNode
}
