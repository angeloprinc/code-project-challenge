// Net Salary Calculator 
// Import readline
const readline = require('readline');

// Create an interface to read user input
const sl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt user to input basic salary and benefits
sl.question('Enter basic salary: ', (basicSalary) => {
  sl.question('Enter benefits: ', (benefits) => {
    // Convert input strings to numbers
    basicSalary = parseFloat(basicSalary);
    benefits = parseFloat(benefits);

    // Calculate tax
    const taxRate = 0.3; // 30% tax rate
    const tax = (basicSalary + benefits) * taxRate;

    // NHIF deduction calculation
    const nhifRate = 0.05; // 5% NHIF rate
    const nhifDeductions = basicSalary * nhifRate;

    // NSSF deduction calculation
    const nssfRate = 0.06; // 6% NSSF rate
    const nssfDeductions = basicSalary * nssfRate;

    // Gross salary calculation
    const grossSalary = basicSalary + benefits;

    // Net salary calculation
    const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;

    // Output the results
    console.log(`Tax, {tax}`);
    console.log(`NHIF Deductions, ${nhifDeductions}`);
    console.log(`NSSF Deductions, ${nssfDeductions}`);
    console.log(`Gross Salary, ${grossSalary}`);
    console.log(`Net Salary, ${netSalary}`);
    // Close the interface to end the program
    sl.close();
  });
});