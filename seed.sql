INSERT INTO department (name) 
VALUES ('Accounting'), ('HR')
-- look into syntax for mulitple inserts

INSERT INTO role (title, salary, department_id)
VALUES ('Manager', 150000, 1), ('Engineer', 78000, 2), ('Developer', 98000, 1)

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Ari', 'Horowitz', 1, 1);


-- developing id's with join