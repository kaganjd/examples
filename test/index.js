const test = require('ava')
const netlifyBuild = require('@netlify/build')
const NETLIFY_CONFIG = `${__dirname}/../netlify.toml`
const FAIL_CONFIG = `${__dirname}/../mock.toml`

test('Plugin should not run when build succeeds', async (t) => {
  const {success} = await netlifyBuild({
    config: NETLIFY_CONFIG,
  })

  t.true(success)
})

test('Plugin should run when build fails', async (t) => {
  const {success, logs} = await netlifyBuild({
    config: FAIL_CONFIG,
  })

  t.false(success)
})