import React from 'react'

import { Typography } from '@components/typography'

import {
  TodoListItem,
  TodoListProps,
  TodoListWrapper,
  TodoValueProps
} from '..'
import { toggleIsCheckByKey } from '../functions'

export function TodoList(props: TodoListProps) {
  const filterValue = React.useMemo(() => {
    switch (props.filter) {
      case 'All':
        return props.value ?? []
      case 'Active':
        return (props.value ?? []).filter((e) => !e.isCheck)
      case 'Completed':
        return (props.value ?? []).filter((e) => e.isCheck)
      default:
        return []
    }
  }, [props.filter, props.value])
  const isEmpty = React.useMemo(() => !filterValue.length, [filterValue])

  return (
    <TodoListWrapper
      $isShow={props.isShow}
      $isEmpty={isEmpty}
      flexDirection="column"
      alignItems="flex-start"
      flexWrap="nowrap"
      minH="300px"
      maxH="600px"
      p="8px"
    >
      {!isEmpty ? (
        filterValue.map((v: TodoValueProps, id) => (
          <TodoListItem
            id={id}
            toggleIsCheckByKey={() => toggleIsCheckByKey(id, props.setValue)}
            value={v}
            key={id}
            iconTodoListItem={props.iconTodoListItem}
          />
        ))
      ) : (
        <Typography variant="h6">No Reminders</Typography>
      )}
    </TodoListWrapper>
  )
}
