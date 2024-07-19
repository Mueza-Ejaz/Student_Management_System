#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const randomNumber:number = Math.floor(20000 + Math.random() * 30000)

let myBalance : number = 0;

let answer = await inquirer.prompt(

    [

        {

            name : "students",
            type : "input",
            message : chalk.green("Enter Student Name:"),
            validate : function(value) {
               if(value.trim() !==  "") {
                   return true;

               }
                 return chalk.red("Please enter a non-empty value.");
            },

        },
        {

            name : "courses",
            type : "list",
            message : "Select the course to enrolled:",
            choices : ["MS-Excel", "HTML", "CSS", "TYPESCRIPT", "PYTHON", "AMAZON"]

        }
    ]
);

const tutionFee : {[key: string]: number} = {
       "MS-Excel" : 1500,
       "HTML"     : 2500,
       "CSS"      : 200,
       "TYPESCRIPT" : 3000,
       "PYTHON"   : 10000,
       "AMAZON"   : 35000,
}

      console.log(`\n Tution Fees: ${tutionFee[answer.courses]}/-\n`);
      console.log(`Balance: ${myBalance}\n`);

 let paymentType = await inquirer.prompt (
    [
        {
            name : "payment",
            type : "list",
            message : chalk.green("Select payment method:"),
            choices : ["Bank Transfer", "Easypaisa", "Jazzcash"]
        },
        {
           
            name : "amount",
            type : "input",
            message : "Transfer Money:",
            validate : function(value) {
                if(value.trim() !== ""){
                    return true;
                }
                  return chalk.red("Please enter a non-empty value.");
            },
        }
    ]
 );
 
 console.log(`\n You select payment method: ${paymentType.payment}\n`);

const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);

if (tutionFees === paymentAmount) {
    console.log(chalk.yellow`Congratulatons! You have successfully enrolled in ${answer.courses}.\n`);

    let ans = await inquirer.prompt(
        [
            {
                name : "select",
                type : "list",
                message : "What would you like to do next?",
                choices : ["View Status", "Exit"]
            }
        ])

        if(ans.select === "View Status"){
            console.log(chalk.green("\n******Status******\n"));
            console.log(chalk.blue`Student Name: ${answer.students}`);
            console.log(chalk.blue`Student ID: ${randomNumber}`);
            console.log(chalk.blue`Course: ${answer.courses}`);
            console.log(chalk.blue`Tution Fees Paid: ${paymentAmount}`);
            console.log(chalk.blue`Balance: ${myBalance += paymentAmount}`)     

        }else{
               console.log(chalk.green("\nExiting Student Management System:\n"));
               
        }

}else{

    console.log(chalk.red("Invalid amount due to course\n"));
    
}
 
      
      
