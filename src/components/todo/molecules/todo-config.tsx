import { Stack } from '@components/flex'
import { Typography } from '@components/typography'

import {
  TodoConfigListTypeItem,
  TodoConfigProps,
  TodoFilterStatePropsFilter
} from '..'
import { countItemsWithFalse, setAllIsCheckToTrue } from '../functions'

export function TodoConfig(props: TodoConfigProps) {
  const handleSetFilter = (filter: TodoFilterStatePropsFilter) => {
    props.setFilter?.(filter)
  }

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
      <Stack p="4px 6px">
        <Typography overflow="hidden" textWrap="nowrap">
          {countItemsWithFalse(props.value)} items left
        </Typography>
      </Stack>
      <Stack alignItems="center" gap="18px">
        <TodoConfigListTypeItem
          p="4px 6px"
          onClick={() => handleSetFilter('All')}
          $isActive={props.filter == 'All'}
        >
          <Typography textWrap="nowrap" overflow="hidden">
            All
          </Typography>
        </TodoConfigListTypeItem>
        <TodoConfigListTypeItem
          p="4px 6px"
          onClick={() => handleSetFilter('Active')}
          $isActive={props.filter == 'Active'}
        >
          <Typography textWrap="nowrap" overflow="hidden">
            Active
          </Typography>
        </TodoConfigListTypeItem>
        <TodoConfigListTypeItem
          p="4px 6px"
          onClick={() => handleSetFilter('Completed')}
          $isActive={props.filter == 'Completed'}
        >
          <Typography textWrap="nowrap" overflow="hidden">
            Completed
          </Typography>
        </TodoConfigListTypeItem>
      </Stack>
      <Stack p="4px 6px">
        <Typography
          overflow="hidden"
          cursor="pointer"
          textWrap="nowrap"
          onClick={() => props.setValue(setAllIsCheckToTrue(props.value))}
        >
          Select all
        </Typography>
      </Stack>
      <Stack p="4px 6px">
        <Typography
          overflow="hidden"
          cursor="pointer"
          textWrap="nowrap"
          onClick={() => props.setValue([])}
        >
          Clear
        </Typography>
      </Stack>
    </Stack>
  )
}
