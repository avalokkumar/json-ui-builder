exports.success = (res, data) => {
  res.status(200).json({ success: true, data });
};

exports.created = (res, data) => {
  res.status(201).json({ success: true, data });
};

exports.error = (res, message, status = 500) => {
  res.status(status).json({ success: false, message });
};

exports.notFound = (res, message) => {
  res.status(404).json({ success: false, message });
};

exports.validationError = (res, errors) => {
  res.status(422).json({ success: false, errors });
};

exports.unauthorized = (res, message) => {
  res.status(401).json({ success: false, message });
};

exports.forbidden = (res, message) => {
  res.status(403).json({ success: false, message });
};