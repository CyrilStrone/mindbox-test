import { FlexContainerAndItemAndBasicProps } from '@components/flex'

import { TThemeSize, ThemeVariablesKeys } from '@theme/index'

export interface BaseLibraryIconProps {
  className?: string
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void
  size: TThemeSize
  primaryColor?: ThemeVariablesKeys
  styles?: FlexContainerAndItemAndBasicProps
  turn?: number
  order?: number
}

export type LibraryIconItemProps = {
  name: TLibraryIconNameString
} & BaseLibraryIconProps

export interface StyledLibraryIconItemProps
  extends FlexContainerAndItemAndBasicProps {
  $size: LibraryIconItemProps['size']
  $turn?: LibraryIconItemProps['turn']
  $order?: LibraryIconItemProps['order']
}

export enum LibraryIconName {
  New
}
export type TLibraryIconNameString = keyof typeof LibraryIconName
