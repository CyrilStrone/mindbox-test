import {
  Accordion,
  Button,
  Checkbox,
  Stack,
  Typography
} from '@jenesei-software/jenesei-ui-react'
import React from 'react'

import { TodoListProps, TodoListWrapper, TodoValueProps } from '..'

export function TodoList(props: TodoListProps) {
  const [expanded, setExpanded] = React.useState<boolean>(false)

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

  const changeExpanded = React.useCallback(() => {
    setExpanded((prevState) => !prevState)
  }, [])

  const onClickSummary = React.useCallback(() => {
    changeExpanded()
  }, [changeExpanded])

  return (
    <Stack
      flexDirection="column"
      alignItems="stretch"
      flexWrap="nowrap"
      p="8px"
    >
      <Accordion
        expanded={expanded}
        onClickSummary={onClickSummary}
        accordionDetails={
          <TodoListWrapper
            pt="12px"
            $isEmpty={isEmpty}
            flexDirection="column"
            alignItems="flex-start"
            flexWrap="nowrap"
            maxH="600px"
            gap="10px"
            maxW="100%"
          >
            {!isEmpty ? (
              filterValue.map((v: TodoValueProps, id) => (
                <Checkbox
                  key={id}
                  onChange={() => props.handleUpdateValueItemIsCheck(id)}
                  genre="grayBorder"
                  size="medium"
                  view="Square"
                  checked={v.isCheck}
                  width="100%"
                  style={{ position: 'relative' }}
                >
                  <Typography
                    variant="h6"
                    textWrap="nowrap"
                    overflow="hidden"
                    textAlign="left"
                    style={{
                      width: '-webkit-fill-available'
                    }}
                  >
                    {v.text}
                  </Typography>
                </Checkbox>
              ))
            ) : (
              <Typography variant="h6">No Reminders</Typography>
            )}
          </TodoListWrapper>
        }
        accordionSummary={
          <Button size="mediumSmall" genre="blackBorder">
            <Typography variant="h6">{expanded ? 'Close' : 'Open'}</Typography>
          </Button>
        }
        wrapperProps={{
          maxW: '100%'
        }}
      />
    </Stack>
  )
}
