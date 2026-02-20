import { createTheme } from '@mantine/core'

export const theme = createTheme({
  spacing: {
    xxs: '0.425rem',
    xxxs: '0.125rem',
    xxl: '2.5rem'
  },
  colors: {
    blue: [
      '#F8FCFF', '#CFEDFF', '#A8DFFF', '#86D2FF', '#65C6FF',
      '#48BBFF', '#2DB1FF', '#008EE2', '#0076BB', '#006BAA'
    ],
    success: [
      '#E6FCF5', '#C3FAE8', '#96F2D7', '#63E6BE', '#38D9A9',
      '#20C997', '#12B886', '#0CA678', '#099268', '#087F5B'
    ]
  }
})