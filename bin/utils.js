const { execSync } = require('child_process')

const run = (cmd, opts = {}) => {
  let result
  const { failMsg = '', showOutput = false } = opts

  try {
    result = execSync(cmd)
  } catch (error) {
    console.error(failMsg || `error: ${error}`)
    process.exit(1)
  }

  if (showOutput) {
    console.log(`stdout: ${result}`)
  }
}

module.exports = { run }
