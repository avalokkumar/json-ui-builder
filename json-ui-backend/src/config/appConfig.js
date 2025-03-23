const { db } = require("../models/UiModel");

module.exports = {
  appName: 'JSON UI Builder',
  port: process.env.PORT || 3000,

  db: {
    url: process.env.DATABASE_URL,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  },
    cors: {
        origin: process.env.CORS_ORIGIN || '*'
    },
    jwt: {
        secret: process.env
    }
};
