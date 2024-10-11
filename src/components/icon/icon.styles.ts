import styled, { css } from 'styled-components'

import { FlexContainerAndItemAndBasic } from '@components/flex'

import { ThemeSize } from '@theme/index'

import { StyledLibraryIconItemProps } from '.'

export const StyledSVG = styled.svg<StyledLibraryIconItemProps>`
  ${(props) => css`
    height: ${ThemeSize[props.$size].heightIcon + 4}px;
    width: ${ThemeSize[props.$size].heightIcon + 4}px;
    transform: rotate(${props.$turn || 0}deg);
  `}
  ${(props) =>
    props.$order ||
    css`
      order: ${props.$order};
    `}
  transition: all ${(props) => props.theme.transition};
  & path {
    transition: all ${(props) => props.theme.transition};
  }
  ${FlexContainerAndItemAndBasic};
`
