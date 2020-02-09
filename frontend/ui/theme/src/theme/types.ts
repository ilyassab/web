import colors from '@ui/theme/src/theme/colors'
import fontFamily from '@ui/theme/src/theme/fontFamily'

export interface Theme {
  fontFamily: typeof fontFamily,
  fontWeights: ThemeFontWeights,
  fontSizes: ThemeFontSizes,
  lineHeights: ThemeLineHeights,
  colors: typeof colors,
  borderRadius: ThemeBorderRadius,
}

export interface ThemeBorderRadius extends Array<number> {
  s?: number
  n?: number
  m?: number
}

export interface ThemeFontSizes extends Array<number> {
  s?: number
  n?: number
  m?: number
  l?: number
  xl?: number
  '2xl'?: number
  '3xl'?: number
}

export interface ThemeFontWeights extends Array<number> {
  light?: number
  normal?: number
  medium?: number
  bold?: number
}

export interface ThemeLineHeights extends Array<number> {
  xs?: number
  s?: number
  m?: number
  l?: number
}
