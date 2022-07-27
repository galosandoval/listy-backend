module.exports = {
  development: {
    client: 'pg',
    connection:
      'postgresql://postgres:bck1Kayz2vHU8sFA1fso@containers-us-west-77.railway.app:6209/railway',
    seeds: {
      directory: './data/seeds',
    },
    useNullAsDefault: true,
    pool: { min: 0, max: 7 },
    migrations: {
      directory: './data/migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
}
