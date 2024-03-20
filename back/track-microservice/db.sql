--DB-Logs_of_access

--Tabla- tracking_access -> id, user_id, name, zone_id, zone_name, access_date , status_acces

-- Crear la tabla tracking_access
CREATE TABLE tracking_access (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    zone_id INT NOT NULL,
    zone_name VARCHAR(100) NOT NULL,
    access_date  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status_access VARCHAR(50) NOT NULL
);

--Seleccionar los registros de un usuario
select * from tracking_access where upper("name") like upper('%prueba%');