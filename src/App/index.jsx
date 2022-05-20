/* eslint-disable
  jsx-a11y/click-events-have-key-events,
  jsx-a11y/no-static-element-interactions */

import { useConnect } from 'redux-bundler-hook'

import { getNavHelper } from 'internal-nav-helper'

function App() {
  const { route, doUpdateUrl } = useConnect('selectRoute', 'doUpdateUrl')

  const RoutedComponent = route.component || route

  return (
    <div id="wrapper" onClick={getNavHelper(doUpdateUrl)}>
      <RoutedComponent />
    </div>
  )
}

export default App
