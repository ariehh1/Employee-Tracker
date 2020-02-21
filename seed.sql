INSERT INTO department (name) 
VALUES ('Accounting'),

INSERT INTO department (name)
VALUES ('HR'),

INSERT INTO department (name)
VALUES ('Sales'),

INSERT INTO department (name)
VALUES ('Engineering'),

INSERT INTO department (name)
VALUES ('Finance'),

INSERT INTO department (name) 
VALUES ('Legal')

-- look into syntax for mulitple inserts

INSERT INTO role (title, salary, department_id)
VALUES ('Accountant', 97000, 1), ('Recruiter', 60000, 2), ('Account Executive', 85000, 3)

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Ari', 'Horowitz', 1, 1), ('Kobe', 'Bryant', 1, 1),


-- developing id's with join