-- Ensure the database exists
CREATE DATABASE IF NOT EXISTS json_ui_builder;
USE json_ui_builder;

-- Drop tables if they already exist (to avoid errors on re-run)
DROP TABLE IF EXISTS export_history;
DROP TABLE IF EXISTS customizations;
DROP TABLE IF EXISTS ui_configurations;
DROP TABLE IF EXISTS components;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS users;

-- Users Table (First, since others depend on it)
CREATE TABLE users (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('user', 'admin') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Projects Table (Depends on users)
CREATE TABLE projects (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    user_id BIGINT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Components Table (Depends on projects)
CREATE TABLE components (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL,
    project_id BIGINT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- UI Configurations Table (Depends on projects)
CREATE TABLE ui_configurations (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    project_id BIGINT UNSIGNED NOT NULL UNIQUE, -- One project should have only one UI configuration
    json_data JSON NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Customizations Table (Depends on ui_configurations)
CREATE TABLE customizations (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    ui_configuration_id BIGINT UNSIGNED NOT NULL,
    customization_data JSON NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ui_configuration_id) REFERENCES ui_configurations(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Export History Table (Depends on ui_configurations)
CREATE TABLE export_history (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    ui_configuration_id BIGINT UNSIGNED NOT NULL,
    export_format ENUM('HTML', 'CSS', 'JS', 'JSON') NOT NULL,
    export_data JSON NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ui_configuration_id) REFERENCES ui_configurations(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Indexes for faster queries
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_projects_user_id ON projects(user_id);
CREATE INDEX idx_projects_name ON projects(name);
CREATE INDEX idx_components_project_id ON components(project_id);
CREATE INDEX idx_ui_configurations_project_id ON ui_configurations(project_id);
CREATE INDEX idx_customizations_ui_configuration_id ON customizations(ui_configuration_id);
CREATE INDEX idx_export_history_ui_configuration_id ON export_history(ui_configuration_id);
CREATE INDEX idx_export_history_format ON export_history(export_format);