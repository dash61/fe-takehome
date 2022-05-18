import React from 'react'
import { createRoot } from 'react-dom/client'

import cache from '~/IO/Cache'

import App from './App'
import createStore from './bundles'
import Root from './Root'

cache.getAll().then((data) => {
  if (data) {
    // eslint-disable-next-line no-console
    console.debug('hydrating store from cache:', data)
  }

  const store = createStore({
    ...data,
  })

  const container = document.getElementById('app')
  const root = createRoot(container)
  const app = (
    <React.StrictMode>
      <Root App={App} store={store} />
    </React.StrictMode>
  )

  root.render(app)
})
