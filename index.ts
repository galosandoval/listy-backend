require('dotenv').config()

const chalk = require('chalk')
const server = require('./api/server')

const PORT = process.env.PORT
console.log('port', PORT)
server.listen(PORT, () =>
  console.log(`** Running on port ${chalk.green(PORT)} **`)
)
