import { Stack } from '@jenesei-software/jenesei-ui-react'
import styled, { css } from 'styled-components'

export const TodoConfigListTypeItem = styled(Stack)<{ $isActive: boolean }>`
  cursor: pointer;
  border-radius: 4px;
  ${(props) =>
    props.$isActive
      ? css`
          border: 1px solid black;
        `
      : css`
          border: 1px solid white;
        `}
`
