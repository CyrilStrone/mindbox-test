export interface IThemeSize {
  height: number
  heightIcon: number
  radius: number
  padding: number
  font: number
}
export type TThemeSize = 'large' | 'largeMedium' | 'medium' | 'mediumSmall' | 'small'

export interface IThemeSizeToggle {
  height: number
  width: number
  padding: number
  thumb: number
}

export interface IThemeScreens {
  mobile: { width: string }
  tablet: { width: string }
  other: boolean
}

export type TFontFamily = 'Inter' | 'Roboto'

export interface ITheme {
  transitionDuration: string
  transitionTimingFunction: string
  transition: string
  screens: IThemeScreens
  fontFamily: TFontFamily
  effects: {
    input: {
      default: string
    }
    button: {
      playstation: string
    }
    toggle: {
      rest: string
      hover: string
      active: string
    }
  }
  palette: Record<ThemeVariablesKeys, string>
}

export type ThemeVariablesKeys =
  | 'transparent'
  | 'black100'
  | 'black80'
  | 'black60'
  | 'black50'
  | 'black40'
  | 'black10'
  | 'black05'
  | 'grayJanice'
  | 'grayKaren'
  | 'grayMonica'
  | 'graySandra'
  | 'grayPatricia'
  | 'graySarah'
  | 'grayStassie'
  | 'greenGoogle'
  | 'green100'
  | 'green25'
  | 'green10'
  | 'whiteStandard'
  | 'yellowGoogle'
  | 'redGoogle'
  | 'red100'
  | 'red25'
  | 'red10'
  | 'blueGoogle'
  | 'blueRest'
  | 'blueActive'
  | 'blueHover'
  | 'blueFocus'
  | 'blueBr'
  | 'amnezia'
