const db = require('../config/db');

exports.saveUiData = async (data) => {
  const [result] = await db.execute(
    'INSERT INTO ui_configurations (project_id, json_data) VALUES (?, ?)',
    [data.project_id, JSON.stringify(data.json_data)]
  );
  return result.insertId;
};

exports.getUiConfigurationsByProjectId = async (projectId) => {
  const [rows] = await db.execute(
    'SELECT * FROM ui_configurations WHERE project_id = ?',
    [projectId]
  );
  return rows;
};
