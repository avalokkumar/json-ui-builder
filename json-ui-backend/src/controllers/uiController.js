const UiModel = require("../models/UiModel");
const uiService = require("../services/uiService");

exports.generateUI = async (req, res) => {
  try {
    const { jsonData, layout, colorScheme, fontSize } = req.body;

    const uiData = uiService.createUI(jsonData, layout, colorScheme, fontSize);

    const savedUi = await UiModel.create(uiData);

    res.status(201).json({ message: "UI Generated Successfully", data: savedUi });
  } catch (error) {
    console.error("Error generating UI:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.exportUI = async (req, res) => {
  try {
    const { id } = req.params;
    const uiData = await UiModel.findById(id);

    if (!uiData) return res.status(404).json({ error: "UI Not Found" });

    // Simulate HTML export
    const htmlContent = `<html><body>${JSON.stringify(uiData.jsonData)}</body></html>`;
    res.setHeader("Content-Disposition", "attachment; filename=ui_export.html");
    res.status(200).send(htmlContent);
  } catch (error) {
    res.status(500).json({ error: "Error exporting UI" });
  }
};