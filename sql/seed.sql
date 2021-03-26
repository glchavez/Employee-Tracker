USE company_infoDB;

INSERT INTO employee
(first_name,
last_name,
role_id,
manager_id)
VALUES
("Richard", "Smith", 3, 3),
("Peter", "Pan", 4, 3),
("Sarah", "Snow", 1, NULL),
("Daniel", "Davidson", 2, 3);

INSERT INTO role
(title,
salary,
department_id)
VALUES
("Manager", "115000.50", 1),
("HR Specialist", "57000.80", 2),
("Engineer", "80000.50", 3),
("Engineer", "85500.30", 3);

INSERT INTO department
(name)
VALUES
("Administration"),
("Human Resources"),
("Development");