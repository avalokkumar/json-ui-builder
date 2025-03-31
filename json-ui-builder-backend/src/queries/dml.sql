USE json_ui_builder;

-- Insert mock data into users table
INSERT INTO users (name, email, password, role) VALUES
('Alice', 'alice@example.com', 'password123', 'admin'),
('Bob', 'bob@example.com', 'password123', 'user'),
('Charlie', 'charlie@example.com', 'password123', 'user');

-- Insert mock data into projects table
INSERT INTO projects (name, description, user_id) VALUES
('Project Alpha', 'Description for Project Alpha', 1),
('Project Beta', 'Description for Project Beta', 2),
('Project Gamma', 'Description for Project Gamma', 3);

-- Insert mock data into components table
INSERT INTO components (name, type, project_id) VALUES
('Header', 'UI', 1),
('Footer', 'UI', 1),
('Sidebar', 'UI', 2),
('Main Content', 'UI', 3);

-- Insert mock data into ui_configurations table
INSERT INTO ui_configurations (project_id, json_data) VALUES
(1, '{"theme": "dark", "layout": "grid"}'),
(2, '{"theme": "light", "layout": "flex"}'),
(3, '{"theme": "dark", "layout": "single-column"}');

-- Insert mock data into customizations table
INSERT INTO customizations (ui_configuration_id, customization_data) VALUES
(1, '{"fontSize": "14px", "color": "blue"}'),
(2, '{"fontSize": "16px", "color": "green"}'),
(3, '{"fontSize": "12px", "color": "red"}');

-- Insert mock data into export_history table
INSERT INTO export_history (ui_configuration_id, export_format, export_data) VALUES
(1, 'HTML', '{"content": "<html>...</html>"}'),
(2, 'CSS', '{"content": "body { background: white; }"}'),
(3, 'JS', '{"content": "console.log(\'Hello World\');"}');
