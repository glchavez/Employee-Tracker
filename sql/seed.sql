USE company_infoDB;

INSERT INTO department
(name)
VALUES
("Administration"),
("Human Resources"),
("Development"),
("Legal");

INSERT INTO role
(title,
salary,
department_id)
VALUES
("Manager", "115000.50", 1),
("HR Specialist", "57000.80", 2),
("Legal Advisor", "80000.50", 4),
("Engineer", "85500.30", 3);

INSERT INTO employee
(first_name,
last_name,
role_id,
manager_id)
VALUES
("Sarah", "Snow", 1, NULL),
("Richard", "Smith", 3, 1),
("Peter", "Pan", 4, 1),
("Daniel", "Davidson", 2, 1);