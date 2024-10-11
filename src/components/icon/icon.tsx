import { ThemeVariables } from '@theme/index'

import { LibraryIconItemProps, StyledSVG } from '.'
import IconJSON from './icon.json'

export const Icon = (props: LibraryIconItemProps) => {
  const icon = IconJSON[props.name]

  const primaryColor = ThemeVariables[props.primaryColor ?? 'grayKaren']

  if (!icon) {
    console.warn(`Icon ${props.name} not found in the library.`)
    return null
  }

  const getFillColor = (fillType?: string): string | undefined => {
    if (fillType === 'primaryColor') return primaryColor
    return undefined
  }

  const renderPaths = () =>
    icon.paths.map((path, index) => (
      <path
        key={index}
        id={'id' in path ? (path.id as string) : undefined}
        d={path.d}
        clipRule="evenodd"
        fillRule="evenodd"
        fill={'fill' in path ? getFillColor(path.fill) : undefined}
      />
    ))

  return (
    <StyledSVG
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      $size={props.size}
      $turn={props.turn}
      $order={props.order}
      className={props.className}
      onClick={props.onClick}
      {...props.styles}
    >
      {renderPaths()}
    </StyledSVG>
  )
}
