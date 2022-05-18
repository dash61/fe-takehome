import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  base: {
    nav: '#50847B',
    header: '#f1ede6',
    medgrey: '#929292',
    darkcream: '#F1EDE6',
    lightpurple: '#865C79',
  },
  palette: {
    background: {
      default: '#F9F7F3',
    },
    primary: {
      main: '#694361',
    },
    secondary: {
      main: '#EDEDED',
    },
    accent: {
      main: '#395453',
      contrastText: '#fff',
    },
    muted: {
      main: '#456E6C',
      contrastText: '#fff',
    },
    error: {
      main: '#D16565',
    },
    warning: {
      main: '#E19147',
    },
    info: {
      main: '#00CAE3',
    },
    success: {
      main: '#33A08E',
    },
  },
  typography: {
    fontFamily: 'Lato',
  },
})

export default theme
