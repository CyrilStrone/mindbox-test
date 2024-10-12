interface TodoValueStateProps {
  value: TodoValueProps[] | null
  setValue: React.Dispatch<React.SetStateAction<TodoValueProps[] | null>>
}

interface TodoFilterStateProps {
  filter: TodoFilterStatePropsFilter
  setFilter?: React.Dispatch<
    React.SetStateAction<'All' | 'Active' | 'Completed'>
  >
}

export type TodoFilterStatePropsFilter = 'All' | 'Active' | 'Completed'

export interface TodoValueProps {
  text: string
  isCheck: boolean
}

export interface TodoListProps {
  value: TodoValueProps[] | null
  filter: TodoFilterStatePropsFilter
  handleUpdateValueItemIsCheck: (id: number) => void
}

export interface TodoConfigProps
  extends TodoValueStateProps,
    TodoFilterStateProps {
  handleUpdateValueAllIsCheck: () => void
  handleSetFilter: (filter: TodoFilterStatePropsFilter) => void
}

export interface TodoNewProps {
  handleAddValueItem: (newValue: string) => void
}

export interface TodoProps extends TodoValueStateProps {}
