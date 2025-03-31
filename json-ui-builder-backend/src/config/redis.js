const redis = require("redis");
const dotenv = require("dotenv");

dotenv.config();

const client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

client.on("error", (err) => console.error("Redis error:", err));

client.connect();

module.exports = client;
// This code creates a Redis client using the redis library.
// It uses environment variables to configure the connection parameters.
// The client connects to the Redis server and logs any errors that occur during the connection.