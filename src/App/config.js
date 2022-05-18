const proxy = new Proxy(globalThis.config || {}, {
  get: (obj, prop) => obj?.[prop],
})

export default proxy
