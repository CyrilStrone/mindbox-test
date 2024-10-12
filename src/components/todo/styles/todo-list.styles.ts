import { Stack } from '@jenesei-software/jenesei-ui-react'
import styled, { css } from 'styled-components'

export const TodoListWrapper = styled(Stack)<{
  $isEmpty: boolean
}>`
  overflow-y: auto;
  overflow-x: hidden;
  ${(props) =>
    props.$isEmpty &&
    css`
      justify-content: center;
      align-items: center;
      width: 100%;
    `}
`
