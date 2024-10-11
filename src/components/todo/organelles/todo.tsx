import React from 'react'

import { Stack } from '@components/flex'

import {
  TodoConfig,
  TodoFilterStatePropsFilter,
  TodoList,
  TodoNew,
  TodoProps
} from '..'

export function Todo(props: TodoProps) {
  const [isShow, isSetShow] = React.useState<boolean>(true)
  const [filter, setFilter] = React.useState<TodoFilterStatePropsFilter>('All')

  return (
    <Stack
      flexDirection="column"
      justifyContent="flex-start"
      w="100%"
      bg="graySandra"
    >
      <TodoNew
        isShow={isShow}
        isSetShow={isSetShow}
        value={props.value}
        setValue={props.setValue}
      />
      <TodoList
        filter={filter}
        isShow={isShow}
        value={props.value}
        setValue={props.setValue}
        iconTodoListItem={props.iconTodoListItem}
      />
      <TodoConfig
        filter={filter}
        setFilter={setFilter}
        value={props.value}
        setValue={props.setValue}
      />
    </Stack>
  )
}
