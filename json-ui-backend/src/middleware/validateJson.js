exports.validateJson = (req, res, next) => {
  try {
    JSON.parse(req.body);
    next();
  } catch (e) {
    res.status(400).send('Invalid JSON');
  }
};


module.exports = (req, res, next) => {
    if (!req.body.jsonData) {
      return res.status(400).json({ error: "Missing jsonData field" });
    }
    next();
};
  