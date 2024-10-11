import { ITheme, IThemeSize, TThemeSize, ThemeVariablesKeys } from '.'

export const ThemeVariables: Record<ThemeVariablesKeys, string> = {
  transparent: 'transparent',
  black100: '#000000;',
  black80: 'rgba(0 0 0 / 0.8)',
  black60: 'rgba(0 0 0 / 0.6)',
  black50: 'rgba(0 0 0 / 0.5)',
  black40: 'rgba(0 0 0 / 0.4)',
  black10: 'rgba(0 0 0 / 0.1)',
  black05: 'rgba(0 0 0 / 0.05)',
  grayJanice: '#f2f2f7',
  grayKaren: '#e5e5ea',
  grayMonica: '#c7c7cc',
  graySandra: '#d1d1d6',
  grayPatricia: '#484848',
  graySarah: '#737373',
  grayStassie: '#8D8D8F',
  whiteStandard: '#ffffff',
  greenGoogle: '#34a853',
  green100: '#34a853',
  green25: 'rgba(52 168 83 / 0.25)',
  green10: 'rgba(52 168 83 / 0.1)',
  yellowGoogle: '#fbbc04',
  redGoogle: '#ea4335',
  red100: '#ff4141',
  red25: 'rgba(255 65 65 / 0.25)',
  red10: 'rgba(255 65 65 / 0.1)',
  blueGoogle: '#4285f4',
  blueRest: '#4195d2',
  blueActive: 'rgba(65 149 210 / 0.1)',
  blueHover: 'rgba(23 105 165 / 0.8)',
  blueFocus: '#1769a5',
  blueBr: '#0975a6',
  amnezia: '#222224'
}

export const Theme: ITheme = {
  transition: '0.3s ease',
  transitionDuration: '0.3s',
  transitionTimingFunction: 'ease',
  screens: {
    mobile: { width: '850px' },
    tablet: { width: '1290px' },
    other: true
  },
  fontFamily: 'Inter',
  effects: {
    input: {
      default: 'inset 0px 0px 4px rgba(0, 0, 0, 0.20)'
    },
    toggle: {
      active: '0 0 10px 0 rgba(0 0 0 / 0.4)',
      hover: '0 0 2px 0 rgba(0 0 0 / 0.2)',
      rest: ' 0 0 2px 1px rgba(0 0 0 / 0.1)'
    },
    button: {
      playstation: '0px 0px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
    }
  },
  palette: ThemeVariables
}

export const ThemeSize: Record<TThemeSize, IThemeSize> = {
  large: {
    height: 46,
    heightIcon: 20,
    radius: 6,
    padding: 16,
    font: 20
  },
  largeMedium: {
    height: 42,
    heightIcon: 18,
    radius: 6,
    padding: 14,
    font: 18
  },
  medium: {
    height: 38,
    heightIcon: 16,
    radius: 6,
    padding: 12,
    font: 16
  },
  mediumSmall: {
    height: 34,
    heightIcon: 14,
    radius: 6,
    padding: 10,
    font: 14
  },
  small: {
    height: 30,
    heightIcon: 12,
    radius: 8,
    padding: 8,
    font: 12
  }
}
