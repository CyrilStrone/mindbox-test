import { Stack } from '@jenesei-software/jenesei-ui-react'
import styled, { css } from 'styled-components'

export const TodoListWrapper = styled(Stack)<{
  $isShow: boolean
  $isEmpty: boolean
}>`
  overflow-y: auto;
  overflow-x: hidden;
  ${(props) =>
    props.$isShow
      ? css`
          height: 100%;
          min-height: 300px;
        `
      : css`
          height: 0px;
          min-height: 0px;
        `}

  ${(props) =>
    props.$isEmpty &&
    css`
      justify-content: center;
      align-items: center;
    `}
`
