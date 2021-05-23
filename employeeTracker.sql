CREATE DATABASE employee_trackerDB; 

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,
 departmentName NOT NULL VARCHAR(30), 
);

CREATE TABLE roles (
id INT NOT NULL AUTO_INCREMENT,
 title NOT NULL VARCHAR(30), 
 salary NOT NULL DECIMAL(19,2)
 FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT,
 firstName NOT NULL VARCHAR(30),
 lastName NOT NULL VARCHAR(30),
FOREIGN KEY (roles_id) REFERENCES roles(id)
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);

INSERT INTO department (departmentName) 
VALUES ("Sales") , ("Engineering") , ("Finance") , ("Legal")

INSERT INTO roles (title, salary, rolesID)
VALUES ("Sales Lead", 10000, 1)

INSERT INTO roles (title, salary, rolesID)
VALUES ("Sales Person", 80000, 1)

INSERT INTO roles (title, salary, rolesID)
VALUES ("Lead Engineer", 150000, 2)

INSERT INTO roles (title, salary, rolesID)
VALUES ("Software Engineer", 120000, 2)

INSERT INTO roles (title, salary, rolesID)
VALUES ("Accountant", 125000, 3)

INSERT INTO roles (title, salary, rolesID)
VALUES ("Legal Team Lead", 250000, 4)

INSERT INTO roles (title, salary, rolesID)
VALUES ("Lawyer", 190000, 4)

