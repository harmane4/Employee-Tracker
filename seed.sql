CREATE DATABASE employee_trackerDB;
USE employee_trackerDB;
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);
CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(19, 2) NOT NULL,
  PRIMARY KEY(id),
  department_id INT NOT NULL,
  FOREIGN KEY (department_id) REFERENCES department(id)
);
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  roles_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY(id),
  FOREIGN KEY (roles_id) REFERENCES roles(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);
INSERT INTO
  department (department_name)
VALUES
  ("Sales"),
  ("Engineering"),
  ("Finance"),
  ("Legal");
INSERT INTO
  roles (title, salary, department_id)
VALUES
  ("Sales Lead", 10000, 1);
INSERT INTO
  roles (title, salary, department_id)
VALUES
  ("Sales Person", 80000, 1);
INSERT INTO
  roles (title, salary, department_id)
VALUES
  ("Lead Engineer", 150000, 2);
INSERT INTO
  roles (title, salary, department_id)
VALUES
  ("Software Engineer", 120000, 2);
INSERT INTO
  roles (title, salary, department_id)
VALUES
  ("Accountant", 125000, 3);
INSERT INTO
  roles (title, salary, department_id)
VALUES
  ("Legal Team Lead", 250000, 4);
INSERT INTO
  roles (title, salary, department_id)
VALUES
  ("Lawyer", 190000, 4);
INSERT INTO
  roles (title, salary, department_id)
VALUES
  ("Manager", 180000, 5);
INSERT INTO
  employee (first_name, last_name, roles_id, manager_id)
VALUES
  ("Elise", "Harman", 1, 1);