//Use Case 1 Ability to Check Employee is present or Absent

const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;

const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;

const WAGE_PER_HOUR = 20;

const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

// UC3    Refactor the Code to write a function to get work hours
// Function to Get Working Hours
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;

        case IS_FULL_TIME:
            return FULL_TIME_HOURS;

        default:
            return 0;
    }
}
let totalEmpHours = 0;
let totalWorkingDays = 0;
let totalEmpWage = 0;


console.log("----Employee Wage Computation-----");

// UC4 & UC5  Calculating Wages for a Month assuming 20 Working Days in a Month
while (totalEmpHours < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {

    totalWorkingDays++;


// UC1 & UC2 Ability to Calculate Daily Employee Wage based on part time or full time work

 let empCheck = Math.floor(Math.random() * 3);

    let empHours = getWorkingHours(empCheck);

    totalEmpHours += empHours;8

    let dailyWage = empHours * WAGE_PER_HOUR;

    totalEmpWage += dailyWage;

    console.log("--------------------------------------");
    console.log("Day :", totalWorkingDays);
switch (empCheck) {
        case IS_FULL_TIME:
            console.log("Status : Full Time");
            break;

        case IS_PART_TIME:
            console.log("Status : Part Time");
            break;

        default:
            console.log("Status : Absent");
    }

    console.log("Working Hours :", empHours);
    console.log("Daily Wage    : $" + dailyWage);
}
