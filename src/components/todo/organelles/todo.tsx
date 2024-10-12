import { Stack } from '@jenesei-software/jenesei-ui-react'
import React from 'react'

import {
  TodoConfig,
  TodoFilterStatePropsFilter,
  TodoList,
  TodoNew,
  TodoProps,
  addValueItem,
  updateValueAllIsCheck,
  updateValueItemIsCheck
} from '..'

export function Todo(props: TodoProps) {
  const [filter, setFilter] = React.useState<TodoFilterStatePropsFilter>('All')

  const handleUpdateValueItemIsCheck = React.useCallback(
    (id: number) => {
      props.setValue((prevValue) => updateValueItemIsCheck(id, prevValue))
    },
    [props]
  )

  const handleAddValueItem = React.useCallback(
    (newValue: string) => {
      props.setValue((prevValue) => addValueItem(newValue, prevValue))
    },
    [props]
  )

  const handleUpdateValueAllIsCheck = React.useCallback(() => {
    props.setValue((prevValue) => updateValueAllIsCheck(prevValue))
  }, [props])

  const handleSetFilter = (filter: TodoFilterStatePropsFilter) => {
    setFilter(filter)
  }
  return (
    <Stack
      flexDirection="column"
      justifyContent="flex-start"
      w="100%"
      bg="grayJanice"
      p="4px"
      style={{ borderRadius: '10px' }}
    >
      <TodoNew handleAddValueItem={handleAddValueItem} />
      <TodoList
        handleUpdateValueItemIsCheck={handleUpdateValueItemIsCheck}
        filter={filter}
        value={props.value}
      />
      <TodoConfig
        handleSetFilter={handleSetFilter}
        handleUpdateValueAllIsCheck={handleUpdateValueAllIsCheck}
        filter={filter}
        setFilter={setFilter}
        value={props.value}
        setValue={props.setValue}
      />
    </Stack>
  )
}
