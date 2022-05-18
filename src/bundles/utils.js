import {
  compose,
  join,
  map,
  partialRight,
  prepend,
  reverse,
  toUpper,
  unapply,
} from 'ramda'

import { camelize as camelizeRaw, underscore as underscoreRaw } from 'inflection'

export const DEFAULT_ASYNC_ACTIONS = ['started', 'succeeded', 'failed']

const camelize = partialRight(camelizeRaw, [true])
const underscore = join('_')

export const constantize = compose(toUpper, underscore)

export const getActionType = compose(constantize, unapply(reverse))

export const getAsyncActionTypes = (type, name, ...args) => {
  const typePrefix = getActionType(type, name, ...args)
  return DEFAULT_ASYNC_ACTIONS.reduce(
    (acc, asyncAction) => ({
      ...acc,
      [asyncAction]: constantize([typePrefix, asyncAction]),
    }),
    { prefix: typePrefix },
  )
}

export const getActionCreatorName = compose(
  camelize,
  underscore,
  prepend('do'),
  map(underscoreRaw),
  unapply(reverse),
)

export const getAsyncActionIdentifiers = (...args) => ({
  types: getAsyncActionTypes(...args),
  actionName: getActionCreatorName(...args),
})
