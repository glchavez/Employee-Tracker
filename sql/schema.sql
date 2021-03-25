DROP DATABASE IF EXISTS company_infoDB;
CREATE database company_infoDB;

USE company_infoDB;

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  PRIMARY KEY (id),
  FOREIGN KEY(role_id) REFERENCES role(id),
  -- FOREIGN KEY(manager_id) REFERENCES role(title)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL,
  FOREIGN KEY(department_id) REFERENCES department(id)
  PRIMARY KEY (id)
);

CREATE TABLE department (
  ID INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30),
  PRIMARY KEY (id)
);