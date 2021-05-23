CREATE DATABASE employee_trackerDB; 

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,
 departmentName NOT NULL VARCHAR(30), 
);

CREATE TABLE roles (
id INT NOT NULL AUTO_INCREMENT,
 title NOT NULL VARCHAR(30), 
 salary NOT NULL DECIMAL(19,2)
 FOREIGN KEY (department_id) REFERENCES deoartment(id)
);

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT,
 firstName NOT NULL VARCHAR(30),
 lastName NOT NULL VARCHAR(30),
FOREIGN KEY (roles_id) REFERENCES roles(id)
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);
