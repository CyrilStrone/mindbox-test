import {
  Button,
  ButtonGroup,
  Stack,
  Typography
} from '@jenesei-software/jenesei-ui-react'
import React from 'react'

import {
  TodoConfigProps,
  TodoFilterStatePropsFilter,
  countItemsWithFalse,
  setAllIsCheckToTrue
} from '..'

const variants: TodoFilterStatePropsFilter[] = ['All', 'Active', 'Completed']

export function TodoConfig(props: TodoConfigProps) {
  const handleSetFilter = (filter: TodoFilterStatePropsFilter) => {
    props.setFilter?.(filter)
  }

  const isDisabled = React.useMemo(
    () => !props.value?.length,
    [props.value?.length]
  )

  const isDisabledSelectAll = React.useMemo(
    () =>
      (props.value ?? []).length ===
      (props.value ?? []).filter((e) => e.isCheck).length,
    [props.value]
  )

  return (
    <Stack
      flexWrap="nowrap"
      alignItems="center"
      justifyContent="space-between"
      flexDirection="row"
      w="100%"
      p="10px"
      gap="18px"
    >
      <Button width="100px" isDisabled size="mediumSmall" genre="white">
        <Typography variant="h6">
          {countItemsWithFalse(props.value)} left
        </Typography>
      </Button>
      <ButtonGroup
        position="horizontal"
        value={variants.map((e) => ({
          genre: props.filter == e ? 'product' : 'white',
          size: 'mediumSmall',
          width: 'auto',
          isHidden: e !== 'All' ? isDisabled : false,
          isDisabled: e !== 'All' ? isDisabled : false,
          onClick: () => handleSetFilter(e),
          children: <Typography variant="h6">{e}</Typography>
        }))}
      />
      <Button
        onClick={() => props.setValue(setAllIsCheckToTrue(props.value))}
        size="mediumSmall"
        genre="productBorder"
        isHidden={isDisabled || isDisabledSelectAll}
        isDisabled={isDisabled || isDisabledSelectAll}
      >
        <Typography variant="h6">Select all</Typography>
      </Button>

      <Button
        onClick={() => {
          props.setValue(null)
          handleSetFilter('All')
        }}
        isHidden={isDisabled}
        isDisabled={isDisabled}
        size="mediumSmall"
        genre="redTransparent"
      >
        <Typography variant="h6">Clear</Typography>
      </Button>
    </Stack>
  )
}
