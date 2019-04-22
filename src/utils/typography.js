import Typography from "typography"
import moragaTheme from "typography-theme-moraga"
moragaTheme.headerFontFamily = ['Roboto', 'sans-serif']

const typography = new Typography(moragaTheme)

export const { scale, rhythm, options } = typography
export default typography