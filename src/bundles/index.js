import {
  appTimeBundle,
  composeBundlesRaw,
  createDebugBundle,
  createReactorBundle,
  createUrlBundle,
} from 'redux-bundler'
import online from 'redux-bundler/dist/online-bundle'

import routes from './routes'

export default composeBundlesRaw(
  // redux bundler stuff
  appTimeBundle,
  createDebugBundle({
    logSelectors: false,
    logState: false,
    actionFilter: (action) => action && action.type !== 'APP_IDLE',
  }),
  createReactorBundle(),
  createUrlBundle(),
  online,
  routes,
)
