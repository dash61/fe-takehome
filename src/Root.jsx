import '@ui/Theme/main.css'

import PropTypes from 'prop-types'
import { ReduxBundlerProvider } from 'redux-bundler-hook'

import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import theme from '@ui/Theme'

function Root({ App, store }) {
  return (
    <ReduxBundlerProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ReduxBundlerProvider>
  )
}

Root.propTypes = {
  App: PropTypes.elementType.isRequired,
  store: PropTypes.shape({
    auth: PropTypes.shape({
      authenticated: PropTypes.bool.isRequired,
    }),
  }).isRequired,
}

export default Root
