import styled, { css } from 'styled-components'

import { ThemeVariables } from '@theme/index'

import { TypographyCSSProps } from '.'

const SpanFontCSS = css<TypographyCSSProps>`
  font-style: normal;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: anywhere;
  box-sizing: border-box;

  ${(props) =>
    props.$flex &&
    css`
      flex: ${props.$flex};
    `};
  ${(props) =>
    props.$cursor &&
    css`
      cursor: ${props.$cursor};
    `};
  ${(props) =>
    props.$textAlign &&
    css`
     text-align ${props.$textAlign};
    `};
  ${(props) =>
    props.$textWrap &&
    css`
     text-wrap ${props.$textWrap};
    `};

  ${(props) =>
    props.$overflow &&
    css`
     overflow ${props.$overflow};
    `};
  ${(props) =>
    props.$clamp &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: ${props.$clamp};
    `};
  ${(props) =>
    props.$clampOrient &&
    css`
      -webkit-box-orient: ${props.$clampOrient};
    `};
  ${(props) =>
    props.$family &&
    css`
      font-family: ${props.$family};
    `};
  ${(props) =>
    props.$size &&
    css`
      font-size: ${props.$size}px;
    `};
  ${(props) =>
    props.$weight &&
    css`
      font-weight: ${props.$weight};
    `};
  ${(props) =>
    props.$height &&
    css`
      line-height: ${props.$height}px;
    `};
  ${(props) =>
    props.$color &&
    css`
      color: ${ThemeVariables[props.$color]};
    `};
  ${(props) =>
    props.$textAlign &&
    css`
      text-align: ${props.$textAlign};
    `};
  ${(props) =>
    props.$textDecoration &&
    css`
      text-decoration: ${props.$textDecoration};
    `};
  ${(props) =>
    props.$textWrap &&
    css`
      text-wrap: ${props.$textWrap};
    `}
`

export const SpanFont = styled.span<TypographyCSSProps>`
  ${SpanFontCSS}
`

export const TitleH1 = styled.h1<TypographyCSSProps>`
  ${SpanFontCSS}
`

export const TitleH2 = styled.h2<TypographyCSSProps>`
  ${SpanFontCSS}
`

export const TitleH3 = styled.h3<TypographyCSSProps>`
  ${SpanFontCSS}
`

export const TitleH4 = styled.h4<TypographyCSSProps>`
  ${SpanFontCSS}
`

export const TitleH5 = styled.h5<TypographyCSSProps>`
  ${SpanFontCSS}
`

export const TitleH6 = styled.h6<TypographyCSSProps>`
  ${SpanFontCSS}
`

export const TitleH7 = styled.span<TypographyCSSProps>`
  font-size: var(--heading-7-font-size);
  line-height: var(--heading-line-height);
  ${SpanFontCSS};
`

export const TitleH8 = styled.span<TypographyCSSProps>`
  font-size: var(--heading-8-font-size);
  line-height: var(--heading-line-height);
  ${SpanFontCSS};
`

export const TitleH9 = styled.span<TypographyCSSProps>`
  font-size: var(--heading-9-font-size);
  line-height: var(--heading-line-height);
  ${SpanFontCSS};
`
