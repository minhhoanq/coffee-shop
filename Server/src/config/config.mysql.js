
const dev = {
    app: {
        port: process.env.URL_SERVER || 5000,
    },
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.URL_SERVER || 5000,
        name: process.env.DB_NAME || 'coffee_store_db',
    }
}

const production = {
    app: {
        port: process.env.URL_SERVER || 5000,
    },
    db: {
        host: process.env.DB_HOST || '127.0.0.1',
        port: process.env.URL_SERVER || 27017,
        name: process.env.DB_NAME || 'database_production',
    }
}

const config = { dev, production}
const env = process.env.NODE_ENV || 'dev'

module.exports = config[env]