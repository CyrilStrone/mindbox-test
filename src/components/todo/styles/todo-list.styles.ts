import styled, { css } from 'styled-components'

import { Stack } from '@components/flex'

export const TodoListWrapper = styled(Stack)<{
  $isShow: boolean
  $isEmpty: boolean
}>`
  overflow-y: auto;
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
    `}
`
