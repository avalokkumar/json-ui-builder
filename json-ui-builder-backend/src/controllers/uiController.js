const uiService = require('../services/uiService');
const exportService = require('../services/exportService');
const responseHandler = require('../utils/responseHandler');

exports.processJson = async (req, res, next) => {
  try {
    const result = await uiService.processJson(req.body);
    responseHandler.success(res, result);
  } catch (error) {
    next(error);
  }
};

exports.renderUi = async (req, res, next) => {
  try {
    const { json, structure } = req.body;
    const renderedUi = await uiService.renderUi(json, structure);
    responseHandler.success(res, { renderedUi });
  } catch (error) {
    next(error);
  }
};

exports.customizeUi = async (req, res, next) => {
  try {
    const { json, customization } = req.body;
    const customizedUi = await uiService.customizeUi(json, customization);
    responseHandler.success(res, { customizedUi });
  } catch (error) {
    next(error);
  }
};

exports.livePreview = async (req, res, next) => {
  try {
    const { json, customization } = req.body;
    const preview = await uiService.generateLivePreview(json, customization);
    responseHandler.success(res, { preview });
  } catch (error) {
    next(error);
  }
};

exports.exportUi = async (req, res, next) => {
  try {
    const { json, format } = req.body;
    const exportedData = await exportService.exportUi(json, format);
    responseHandler.success(res, { exportedData });
  } catch (error) {
    next(error);
  }
};
