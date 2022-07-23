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
    let deleteButton = "<button>Delete employee</button>";


    // $('#table-firstName').append('<tr><td>' + employeeFirstNameInput + '</td></tr>')
    // $('#table-lastName').append('<tr><td>' + lastNameInput + '</td></tr>')
    // $('#table-ID').append('<tr><td>' + IDNumberInput + '</td></tr>')
    // $('#table-title').append('<tr><td>' + jobTitleInput + '</td></tr>')
    // $('#table-annualSalary').append('<tr><td>' + annualSalaryInput + '</td></tr>')
    // $('table-deleteButton').append('<tr><td>' + deleteButton + '</td></tr>')

    // $('#tableContainer').append('<td>' + employeeFirstNameInput + '</td>')
    // $('#tableContainer').append('<td>' + lastNameInput + '</td>')
    // $('#tableContainer').append('<td>' + IDNumberInput + '</td>')
    // $('#tableContainer').append('<td>' + jobTitleInput + '</td>')
    // $('#tableContainer').append('<td>' + annualSalaryInput + '</td>')
    // $('#tableContainer').append('<td>' + deleteButton + '</td>')

    $('#tableContainer').append(`
        <tr>
            <td>${employeeFirstNameInput}</td>
            <td>${lastNameInput}</td>
            <td>${IDNumberInput}</td>
            <td>${jobTitleInput}</td>
            <td>${annualSalaryInput}</td>

        </tr>
    `)

    // $('#table-annualSalary').empty();
    // $('#table-firstName').append('<td>' + employeeFirstNameInput + '</td>')
    // $('#table-lastName').append('<td>' + lastNameInput + '</td>')
    // $('#table-ID').append('<td>' + IDNumberInput + '</td>')
    // $('#table-title').append('<td>' + jobTitleInput + '</td>')
    // $('#table-annualSalary').append('<td>' + annualSalaryInput + '</td>')
    //maybe this has to be in another function?
    

    // still need to append the employee information to the table
    // so I want to target the table, and the append a new <td>
    // it's appending to the table, but not starting a new line. 
    // I think I need to add it to a container not just a specific row.

    $('#employeeFirstName').val('');
    $('#lastName').val('');
    $('#IDNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');

    console.log(`employeeNumber: ${employeeFirstNameInput}, lastName: ${lastNameInput}, IDNumber: ${IDNumberInput}, jobTitle: ${jobTitleInput}, annualSalary: ${annualSalaryInput}`);

    let monthlySalary = (Math.round((annualSalaryInput/12) * 100) /100);
    totalMonthly += monthlySalary;
    console.log('Monthly salary: ', monthlySalary);
    console.log('Total monthly: ', totalMonthly);
    $('#totalMonthlyOnDOM').empty();
    $('#totalMonthlyOnDOM').append(`${totalMonthly}`);

}
//https://www.geeksforgeeks.org/how-to-add-table-row-in-a-table-using-jquery/
//markup = "<tr><td> + information + </td></td>"
//tableBody = $("table tbody")
//tableBody.append(markup)

/*
    markupFirstName = (`<tr><td> + ${employeeFirstNameInput} + </td></tr>`)
    markupLastName = "<tr><td> +lastNameInput+ </td></tr>" 
    markupIDNumber = "<tr><td> +IDNumberInput+ </td></tr>" 
    markupJobTitle = "<tr><td> +jobTitleInput+ </td></tr>" 
    markupAnnualSalary = "<tr><td> +annualSalaryInput+ </td></tr>"  

    tableBody = $("table tbody")
    tableBody.append(markupFirstName);
*/


//$('#nameInput').val()