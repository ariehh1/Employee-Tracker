INSERT INTO department (name) 
VALUES ('Accounting'), ('HR'), ('Sales'), ('Finance'), ('Legal')
-- look into syntax for mulitple inserts

INSERT INTO role (title, salary, department_id)
VALUES ('Manager', 150000, 1), ('Engineer', 90000, 2), ('Accountant', 97000, 1)

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Ari', 'Horowitz', 1, 1), ('Kobe', 'Bryant', 1, )


-- developing id's with join