INSERT INTO department (department_name)
VALUES ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Sales");
       ("Human Resources");
       ("Marketing");
       ("Customer Service");
       ("Maintenance"),

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1),
       ("Lead Engineer", 80000, 2),
       ("Software Engineer", 150000, 3),
       ("Account Manager", 120000, 4),
       ("Accountant", 160000, 5),
       ("Lawyer", 125000, 6),
       ("Legal Team Lead", 250000, 7),
       ("Lawyer", 190000, 8);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Edelgard", "von Hresvelg", 1, 1),
       ("Hubert", "von Vestra", 2, 2),
       ("Ferdinand", "von Aegir", 3, 3)
       ("Linhardt", "von Hevring", 4, 4)
       ("Caspar", "von Bergliez", 5, 5)
       ("Bernadetta", "von Varley", 6, 6)
       ("Dorothea", "Arnault", 7, 7)
       ("Petra", "Macneary", 8, 8);
