$(document).ready(readySteadyGo);

let totalMonthly = 0;

function readySteadyGo(){
    console.log('Ready Steady Go!');

    $('#submitButton').on('click', getValues);

}
console.log('Hello World!');

function getValues(){
    //console.log('Got values?');
    let employeeFirstNameInput = $('#employeeFirstName').val();
    let lastNameInput = $('#lastName').val();
    let IDNumberInput = $('#IDNumber').val();
    let jobTitleInput = $('#jobTitle').val();
    let annualSalaryInput = $('#annualSalary').val();

    $('#table-firstName').append('<td>' + employeeFirstNameInput + '</td')
    $('#table-lastName').append('<td>' + lastNameInput + '</td')
    $('#table-ID').append('<td>' + IDNumberInput + '</td')
    $('#table-title').append('<td>' + jobTitleInput + '</td')
    $('#table-annualSalary').append('<td>' + annualSalaryInput + '</td')

    $('#employeeFirstName').val('');
    $('#lastName').val('');
    $('#IDNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');

    console.log(`employeeNumber: ${employeeFirstNameInput}, lastName: ${lastNameInput}, IDNumber: ${IDNumberInput}, jobTitle: ${jobTitleInput}, annualSalary: ${annualSalaryInput}`);
// still need to append the employee information to the table
    // so I want to target the table, and the append a new <td>


    let monthlySalary = (Math.round((annualSalaryInput/12) * 100) /100);
    totalMonthly += monthlySalary;
    console.log('Monthly salary: ', monthlySalary);
    console.log('Total monthly: ', totalMonthly);
    $('#totalMonthlyOnDOM').empty();
    $('#totalMonthlyOnDOM').append(`${totalMonthly}`);

}


//$('#nameInput').val()