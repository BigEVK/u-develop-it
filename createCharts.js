CREATE TABLE candidates (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    industry_connected BOOLEAN NOT NULL
    );

INSERT INTO candidates (first_name, last_name, industry_connected)
VALUES 
('Virginia', 'Woolf', 1),
('Piers', 'Gaveston', 0),
('Charles', 'LeRoi', 1),
('Katherine', 'Mansfield', 1),
('Dora', 'Carrington', 0),
('Edward', 'Bellamy', 0),
('Montague', 'Summers', 1),
('Octavia', 'Butler', 1),
('Unica', 'Zurn', 1);