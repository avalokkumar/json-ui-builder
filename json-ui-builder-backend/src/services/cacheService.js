const redisClient = require('../config/redis');

exports.setCache = async (key, value, ttl) => {
  await redisClient.set(key, JSON.stringify(value), { EX: ttl });
};

exports.getCache = async (key) => {
  const data = await redisClient.get(key);
  return data ? JSON.parse(data) : null;
};
