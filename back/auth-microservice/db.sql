--DB-Auth

--Tabla- Role -> id, name_role

-- Crear la tabla Roles
CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL
);

--Tabla- Users -> id, username, password, role

-- Crear la tabla Users
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "role_id" INT NOT NULL,
    FOREIGN KEY ("role_id") REFERENCES roles(id)
);

--Tabla- Zones -> id, name

-- Crear la tabla Zones
CREATE TABLE zones (
    id SERIAL PRIMARY KEY,
    "name" VARCHAR(100) NOT NULL
);

--Tabla- Permissions -> user_id, zone_id

-- Crear la tabla Permissions
CREATE TABLE permissions (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    zone_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (zone_id) REFERENCES zones(id)
);

-- Ingresar roles
INSERT INTO roles ("name") VALUES
('Administrador'),
('Empleado'),
('Pasajero');

-- Ingresar zonas
INSERT INTO zones ("name") VALUES
('Terminal 1'),
('Terminal 2'),
('Zona de Embarque'),
('Zona de Equipaje'),
('Zona de Aduanas'),
('Zona de Control de Seguridad');

-- Ingresar usuarios
INSERT INTO users (username, "password", role_id) VALUES
('admin_aeropuerto', 'adminpass', 1),
('empleado1', 'emppass1', 2),
('empleado2', 'emppass2', 2),
('pasajero1', 'pass1', 3),
('pasajero2', 'pass2', 3);

-- Ingresar permisos
INSERT INTO permissions (user_id, zone_id) VALUES
(1, 1),
(1, 2),
(2, 3),
(3, 5),
(4, 1),
(4, 3),
(5, 4),
(5, 6);



--Mover a otra parte luego
DB-Logs_of_access
Tabla- Access -> id, id_user, username, id_zone, zone_name, date, status_acces

-- Crear la tabla Access
CREATE TABLE access (
    id SERIAL PRIMARY KEY,
    id_user INT NOT NULL,
    username VARCHAR(255) NOT NULL,
    id_zone INT NOT NULL,
    zone_name VARCHAR(100) NOT NULL,
    date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    status_access VARCHAR(50) NOT NULL,
);