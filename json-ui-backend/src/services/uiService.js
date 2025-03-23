const UiModel = require('../models/UiModel');

exports.getUI = () => {
  return UiModel.find();
};

exports.createUI = (uiData) => {
  const ui = new UiModel(uiData);
  return ui.save();
};

exports.createUI = (jsonData, layout, colorScheme, fontSize) => {
    return {
      jsonData,
      layout,
      colorScheme,
      fontSize,
    };
  };
  