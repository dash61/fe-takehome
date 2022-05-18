import { createRouteBundle } from 'redux-bundler'

import Home from '../Home'
import NotFound from '../NotFound'

export default createRouteBundle({
  '/': Home,
  '*': NotFound,
})
