//Use Case 1 Ability to Check Employee is present or Absent

const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;

const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;

const WAGE_PER_HOUR = 20;

const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

 let empCheck = Math.floor(Math.random() * 3);

    let empHours = getWorkingHours(empCheck);

    totalEmpHours += empHours;8

    let dailyWage = empHours * WAGE_PER_HOUR;

    totalEmpWage += dailyWage;

    console.log("--------------------------------------");
    console.log("Day :", totalWorkingDays);
