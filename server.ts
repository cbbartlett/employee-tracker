// Import module to allow ascii-art to be created
import logo from "asciiart-logo";
// Import the db module from the connection file
import db from "./config/connection";
// Import inquirer
import inquirer from "inquirer";

// Prompt begins
function dashboard() {
    inquirer
        .prompt({
            type: "list",
            message: "Select the following options to navigate the dashboard:",
            name: "option",
            choices: [
                "View ALL departments",
                "View ALL roles",
                "View ALL employees",
                "Add department",
                "Add new role",
                "Add new employee",
            ],
        })
        .then((choice) => {
            switch (choice.option) {
                case "View ALL departments":
                    departmentAll();
                    break;
                case "View ALL roles":
                    rolesAll();
                    break;
                case "View ALL employees":
                    employee();
                    break;
                case "Add department":
                    addDepartment();
                    break;
                case "Add new role":
                    addRoles();
                    break;
                case "Add new employee":
                    addEmployee();
                    break;

            }
        });
}

// Query Section

// Display all departments
function departmentAll() {
    db.query("SELECT * FROM department", function (err, results) {
        if (err) {
            console.log(err);
        } else {
            // Display the results in table format
            console.table(results);
            dashboard();
        }
    });
}

// View all roles
function rolesAll() {
    db.query("SELECT * FROM roles", function (err, results) {
        console.table(results);
        dashboard();
    });
}

// View all employees
function employee() {
    db.query("SELECT * FROM employee", function (err, results) {
        console.table(results);
        dashboard();
    })
}

// Add an employee
function addEmployee() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Please enter employee's first name.",
                name: "first_name",
            },
            {
                type: "input",
                message: "Please enter employee's last name.",
                name: "last_name",
            },
            {
                type: "input",
                message: "Please enter role ID of employee.",
                name: "role_id",

            },
            {
                type: "input"
                message: "Please enter the manager ID of employee if applicable",
                name: "manager_id",

            },
        ])
        .then((data) => {
            db.query(
                `INSERT INTO employee (first_name, last_name, role_id, mananger_id) VALUES ("{$data.first_name}","{$data.last_name}","${data.roles_id}","{$data.manager_id}")`,
                data,
                function (err, results) {
                    if (err) {
                        console.log(err);
                    }  else {
                        console.log(results);
                        dashboard();
                    }
                }
            );
        });
}

// Add a department
function addDepartment() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter the name of the department you wish to add."
                name: "department_name",
            }
        ])
        .then((data) => {
            db.query(
                `INSERT INTO department (department_name)VALUES ("${data.department_name}")`,
                data,
                function (err, results) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(results);
                        dashboard();
                    }
                }
            )
        })
}

function addRoles() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter role you wish to add.",
                name: "title",
            },
            {
                type: "number",
                message: "What is the estimated salary for this role?"
                name: "salary",
            },
            {
                type: "number",
                message: "Enter the department related to the selected role.",
                name: "department_id",
            },
        ])
        .then((data) => {
            db.query(
                `INSERT INTO roles (titles, salary, department_id)VALUES ("${data.title}","${data.salary}","${data.department_id}")`,
                data,
                function (err, results) {
                    if (err) {
                        console.log(err);
                    }   else {
                        console.log(results);
                        dashboard();
                    }
                }
            );
        });
}

// This section where I create my badass ASCII logo
console.log(
    logo({
        name: "Edel CLI",
        font: "3D-ASCII",
        linechars: "12",
        padding: "12",
        margin: "2",
        borderColor: "red",
        logoColor: "bold-red",
        textColor: "red",
    }).render()
);

dashboard();
