import { IJeneseiTheme } from '@jenesei-software/jenesei-ui-react'
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends IJeneseiTheme {}
}
