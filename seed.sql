USE employee_trackerDB;

INSERT INTO department (name) 
VALUES
('Sales'),
('Accounting'),
('HR'),
('Engineering'),
('Legal'),
('Marketing');

INSERT INTO role (title, salary, department_id)
VALUES 
('Account Executive', 85000, 1),
('Sales Manager', 91000, 1),
('Accountant', 97000, 2),
('Recruiter', 64000, 3), 
('Full Stack Developer', 120000, 4),
('Lawyer', 150000, 5),
('Marketing Coordinator', 60000, 6),
('Benefits Administrator', 77000, 3),
('Marketing Manager', 80000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Ari', 'Horowitz', 2, null),
('Kobe', 'Bryant', 1, 2),
('Tiger', 'Woods', 3, 2),
('Serena', 'Williams', 5, null);
