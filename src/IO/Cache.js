import ms from 'milliseconds'
import { getConfiguredCache } from 'money-clip'

const CACHE_VERSION = 1

const cache = getConfiguredCache({
  version: CACHE_VERSION,
  maxAge: ms.days(30),
  name: 'user-data',
})

export default cache
