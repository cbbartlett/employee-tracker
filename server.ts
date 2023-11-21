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
}
