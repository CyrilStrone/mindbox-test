import { Stack } from '@components/flex'
import { Typography } from '@components/typography'

import { TodoListPropsItem } from '..'

export function TodoListItem(props: TodoListPropsItem) {
  return (
    <Stack
      justifyContent="flex-start"
      alignItems="flex-start"
      w="100%"
      minH="40px"
      data-testid="TodoListItem"
    >
      <Typography
        onClick={() => props.toggleIsCheckByKey(props.id)}
        cursor="pointer"
        textDecoration={props.value.isCheck ? 'line-through' : undefined}
      >
        {props.value.text}
      </Typography>
    </Stack>
  )
}
