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
    "name" VARCHAR(255) NOT NULL,
    "cedula" VARCHAR(255) NOT NULL,
    "age" INTEGER NOT NULL,
    "email" VARCHAR(255) NOT NULL,
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
INSERT INTO users (username, name, cedula, age, email, password, role_id) VALUES
('colin75', 'Jenny Freeman', '975850154', 67, 'tinagarcia@example.org', '@uhNv90%U9', 1),
('jeverett', 'Terry Snow', '653800768', 50, 'greenmason@example.net', ')1nPSxGFxR', 1),
('ramireztara', 'Bonnie Christensen', '748103169', 30, 'acostamartin@example.com', '#kmRY8y_D9', 1),
('ibryant', 'Daniel Bell', '248728526', 36, 'michaeldixon@example.net', '50F@z!q6(y', 1),
('martindaniel', 'Courtney Olson', '60090582', 55, 'lisa55@example.net', '17ECjYhM_q', 3),
('kristamoreno', 'Jeremy Moore', '616738564', 85, 'jamessanders@example.org', '0S#2!9Wd$&', 1),
('wilsonchristopher', 'Amy Wong', '153849479', 18, 'jose30@example.com', ')o4+5JdyBi', 2),
('sheila07', 'Joseph Johnson', '804534566', 21, 'zbryant@example.net', '@XpVIux^+6', 2),
('wgreen', 'April Harvey', '103737943', 76, 'mayadam@example.com', '^90WTQpsn_', 2),
('russellmitchell', 'Kathryn Davis', '280636086', 63, 'pattersonjohn@example.com', '&$3IzMBw2o', 1),
('jamesmaldonado', 'Matthew Maxwell', '479659409', 89, 'ecohen@example.com', 'fwx%1Yp&3+', 1),
('amy42', 'Brenda Jenkins', '500847897', 73, 'ericmack@example.net', 'XLO*9QWzFc', 3),
('jlogan', 'Christine Harrison', '330717423', 54, 'pjohnson@example.com', 'Y!0S(YoO_N', 2),
('pricekaren', 'Xavier Weiss', '324123493', 31, 'johnschneider@example.org', 'KTl98JBm(O', 2),
('ygonzalez', 'Jennifer Reynolds', '677852826', 39, 'michellejohnson@example.net', '2AgC$Rbf!Y', 3),
('tinascott', 'Glenda Murphy', '754535760', 41, 'katie12@example.net', '!4X^C*Cjmb', 3),
('xgonzalez', 'Harry Gordon', '201741889', 82, 'david47@example.net', 's9Hr)Ygl_2', 3),
('andersenelizabeth', 'Angela Bautista', '934567063', 87, 'kellypaul@example.org', 'p9XPxK#B!8', 2),
('albertmoran', 'Justin Ward', '374171289', 18, 'veronica29@example.net', 'nejQ2RVj_7', 1),
('walkerwilliam', 'Amber Arnold', '143577768', 70, 'saundersalexander@example.org', '**!c2NLp4+', 1),
('andrea44', 'Kevin Fox', '244338601', 31, 'sherry49@example.net', '(&ASfdu$k7', 3),
('andersonerica', 'Kevin Salinas', '330570241', 64, 'chadchan@example.net', 'k)3Cu&Y1$K', 2),
('ehoward', 'Autumn Valdez', '171199072', 19, 'icampbell@example.net', 'q+W0+DUu7$', 3),
('carterrobert', 'David Patterson', '13801598', 50, 'lvaughn@example.org', 'd+hB4Qdgub', 3),
('kerri75', 'John Perez', '670879683', 70, 'hendrixjennifer@example.net', '4lcVHdxg#9', 1),
('stevenharper', 'Katrina Branch', '203487203', 80, 'carrie65@example.net', '+B42KeE1Q*', 2),
('imurray', 'Tanya Tucker', '776950397', 23, 'peter62@example.org', 'Np1QEaSq_1', 1),
('lrodriguez', 'Helen Hernandez', '611729987', 73, 'martinezjames@example.org', '@7V2gg6V7q', 2),
('beckyodom', 'Deborah Russell', '90195078', 70, 'ebailey@example.com', '&u(g*Hjp0U', 2),
('monteslinda', 'Noah Thompson', '657845557', 24, 'vcooper@example.com', 'djQG)u^k^1', 3),
('sjohnson', 'James Walker', '250160279', 56, 'richardwebster@example.net', 'qe0wN^*vW%', 3),
('tyoung', 'Karen Morse', '956405079', 84, 'leblanccheryl@example.net', 'a^P512Jq_b', 3),
('taylor50', 'Kevin Ruiz', '172720523', 42, 'elizabethnorris@example.org', 'F)6)RIFh0#', 2),
('monicasullivan', 'Ryan Turner', '337285289', 39, 'fwilliams@example.net', '2!L3hJDpT#', 3),
('david89', 'Christopher Sandoval', '331959645', 87, 'jjohnson@example.org', ')_bFPtotb6', 2),
('anthony97', 'Leah Evans', '136090629', 25, 'riveramichael@example.org', '%cAd4oYt!*', 1),
('jameswhitney', 'Maxwell Wong', '310204983', 44, 'tylerhuang@example.org', '*8CJ$pZkES', 2),
('ericmcdaniel', 'Anne Burgess', '292995043', 44, 'montoyaapril@example.org', '16L#qiup&C', 1),
('ynichols', 'Jacob Jones', '940466177', 48, 'stephen77@example.org', '2_0XY9wEPB', 2),
('ljones', 'Candace Bruce', '988910325', 73, 'robert21@example.net', '*1H%W1&USo', 2),
('gbaxter', 'Tracey Serrano', '663054674', 24, 'wellskyle@example.com', '(8Lr1Bsmn*', 2),
('vponce', 'Jennifer Hayes', '588406418', 86, 'steelejohn@example.com', '!2VZA0Tjsm', 3),
('ericking', 'Michelle Robinson', '834393166', 57, 'joshuamartinez@example.org', '$f6HGjkK8q', 1),
('tiffanyzimmerman', 'Theresa Bradley', '41514359', 83, 'ramireztiffany@example.net', '9D1wJDwW+0', 2),
('robertdiaz', 'Kevin Wise', '487030656', 51, 'rruiz@example.org', '#3N%We$7)^', 2),
('ywheeler', 'Carrie Velez', '335683700', 50, 'jose79@example.net', 'rc152INc7$', 1),
('richard64', 'Rachel Martinez', '877806575', 71, 'james78@example.org', '8K6GEMxHm!', 2),
('ericnicholson', 'Eric Reed', '442537270', 47, 'madisondavila@example.org', '#zwVs)Y3Y5', 2),
('madison03', 'Douglas Parrish Jr.', '590301877', 57, 'benjaminho@example.com', 'MD3uRt7x_B', 2),
('acook', 'Susan Cantrell', '448508195', 59, 'ndaniel@example.net', '&b4PvBdFqI', 2),
('patricia95', 'James Woods', '125364706', 35, 'cummingsnicolas@example.org', 'cKnyJAbj!9', 3),
('amandacarrillo', 'Casey Patel', '13773662', 68, 'susanberg@example.org', '@dBY)9uc7N', 2),
('deanna05', 'Joshua Mack', '169260987', 81, 'thompsonamanda@example.net', 'K#^1GnGoIG', 1),
('kgreene', 'Kathryn Tanner', '990916706', 88, 'jenniferpittman@example.com', 'MmG&j8NDT$', 3),
('jeremy61', 'Alexis Brown', '685324239', 36, 'tinaweber@example.org', '(6Wa%F!cMG', 2),
('hessyvonne', 'Miranda Howell', '94437955', 70, 'mary35@example.net', '$f8ANcuwIk', 1),
('samuel21', 'Rebecca Little', '205923501', 29, 'williamsrenee@example.com', 'Y+ZH2RzXwC', 3),
('cartermichele', 'Patricia Mcneil', '637717361', 39, 'wrich@example.com', '%dXOEUGE3f', 2),
('millerbrian', 'Danielle Lee', '411699241', 77, 'lindsaypowers@example.org', '8o$9FLiKt(', 1),
('cheryl34', 'Teresa Reynolds', '795953096', 18, 'christopher83@example.org', '^BhCtkSn2D', 1),
('owilliams', 'Jean Petersen', '946243967', 41, 'meltonrodney@example.org', '@60U5Sfb4E', 3),
('lisa34', 'Cheryl Watson DDS', '878529578', 25, 'ygreen@example.org', 'S$5g5YMm80', 2),
('calhounbrandy', 'Christine Williams', '958606149', 50, 'wheelersean@example.com', '^42xTaC9ND', 3),
('murraytheresa', 'Jay Jones', '739424243', 81, 'mark63@example.org', '5%%Y47Fw30', 1),
('alexandra59', 'Wayne Banks', '774688471', 59, 'duncanjonathan@example.com', 'yXVMY$h9@4', 2),
('conniehughes', 'Yolanda Lopez', '761341543', 54, 'jwhite@example.net', 'x1SI8mOP&L', 1),
('rmontes', 'Keith Black', '581221015', 30, 'vasqueznatasha@example.org', '3)*4fYm4aF', 1),
('vprice', 'Sara Marsh', '429220973', 25, 'miranda88@example.org', 'A68tQSWz%A', 2),
('benjaminrusso', 'Maxwell Donovan', '379507627', 55, 'colleenberger@example.net', '#8AV8o8p62', 3),
('priceryan', 'Betty Hudson', '941944686', 46, 'otorres@example.com', '!q%CkmMcD7', 3);

--Ingresar permisos

INSERT INTO permissions (user_id, zone_id) VALUES
(1, 1),
(1, 2),
(2, 1),
(2, 2),
(3, 1),
(3, 2),
(4, 1),
(4, 2),
(5, 6),
(5, 3),
(5, 4),
(6, 1),
(6, 2),
(7, 6),
(7, 5),
(8, 6),
(8, 5),
(9, 6),
(9, 5),
(10, 1),
(10, 2),
(11, 1),
(11, 2),
(12, 6),
(12, 3),
(12, 4),
(13, 6),
(13, 5),
(14, 6),
(14, 5),
(15, 6),
(15, 3),
(15, 4),
(16, 6),
(16, 3),
(16, 4),
(17, 6),
(17, 3),
(17, 4),
(18, 6),
(18, 5),
(19, 1),
(19, 2),
(20, 1),
(20, 2),
(21, 6),
(21, 3),
(21, 4),
(22, 6),
(22, 5),
(23, 6),
(23, 3),
(23, 4),
(24, 6),
(24, 3),
(24, 4),
(25, 1),
(25, 2),
(26, 6),
(26, 5),
(27, 1),
(27, 2),
(28, 6),
(28, 5),
(29, 6),
(29, 5),
(30, 6),
(30, 3),
(30, 4),
(31, 6),
(31, 3),
(31, 4),
(32, 6),
(32, 3),
(32, 4),
(33, 6),
(33, 5),
(34, 6),
(34, 3),
(34, 4),
(35, 6),
(35, 5),
(36, 1),
(36, 2),
(37, 6),
(37, 5),
(38, 1),
(38, 2),
(39, 6),
(39, 5),
(40, 6),
(40, 5),
(41, 6),
(41, 5),
(42, 6),
(42, 3),
(42, 4),
(43, 1),
(43, 2),
(44, 6),
(44, 5),
(45, 6),
(45, 5),
(46, 1),
(46, 2),
(47, 6),
(47, 5),
(48, 6),
(48, 5),
(49, 6),
(49, 5),
(50, 6),
(50, 5),
(51, 6),
(51, 3),
(51, 4),
(52, 6),
(52, 5),
(53, 1),
(53, 2),
(54, 6),
(54, 3),
(54, 4),
(55, 6),
(55, 5),
(56, 1),
(56, 2),
(57, 6),
(57, 3),
(57, 4),
(58, 6),
(58, 5),
(59, 1),
(59, 2),
(60, 1),
(60, 2),
(61, 6),
(61, 3),
(61, 4),
(62, 6),
(62, 5),
(63, 6),
(63, 3),
(63, 4),
(64, 1),
(64, 2),
(65, 6),
(65, 5),
(66, 1),
(66, 2),
(67, 1),
(67, 2),
(68, 6),
(68, 5),
(69, 6),
(69, 3),
(69, 4),
(70, 6),
(70, 3),
(70, 4);

--Saber que usuarios son admin
select u.username, u."password", r."name" as rol, z."name" as nombre_zona, z.id as id_zona
from users u inner join roles r on u.role_id = r.id
inner join permissions p on p.user_id = u.id
inner join zones z on p.zone_id = z.id
where r."name" = 'Administrador';
--Saber que usuarios son pasajeros
select u.username, u."password", r."name" as rol, z."name" as nombre_zona, z.id as id_zona
from users u inner join roles r on u.role_id = r.id
inner join permissions p on p.user_id = u.id
inner join zones z on p.zone_id = z.id
where r."name" = 'Pasajero';
--Saber que usuarios son empleados
select u.username, u."password", r."name" as rol, z."name" as nombre_zona, z.id as id_zona
from users u inner join roles r on u.role_id = r.id
inner join permissions p on p.user_id = u.id
inner join zones z on p.zone_id = z.id
where r."name" = 'Empleado';

--Saber que usuarios tienen permisos en una zona
select * from users u inner join permissions p
on u.id = p.user_id inner join zones z on z.id = p.zone_id where z."name" = '';
/*
Terminal 1
Terminal 2
Zona de Embarque
Zona de Equipaje
Zona de Aduanas
Zona de Control de Seguridad
*/