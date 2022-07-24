$(document).ready(readySteadyGo);

let totalMonthly = 0;
let defaultValue = 0;

function readySteadyGo(){
    console.log('Ready Steady Go!');
    $('#submitButton').on('click', getValues);
    $('#submitButton').on('click', tooMuchMoney);
    //$(exists_now).on('click', exists_later, handleClickFn)
    $('#employeeTable').on('click', '#zap', urFired);
   // something to reference to that's already on the page,when we click the thing with the zap id, this function is called
   // the parent function that already exists.
}

console.log('Hello World!');

function getValues(){
    let employeeFirstNameInput = $('#employeeFirstName').val();
    let lastNameInput = $('#lastName').val();
    let IDNumberInput = $('#IDNumber').val();
    let jobTitleInput = $('#jobTitle').val();
    let annualSalaryInput = $('#annualSalary').val();
    let deleteButton = "<button id='zap'>Delete</button>";

    $('#employeeFirstName').val('');
    $('#lastName').val('');
    $('#IDNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');

    $('#tableContainer').append(`
        <tr>
            <td>${employeeFirstNameInput}</td>
            <td>${lastNameInput}</td>
            <td>${IDNumberInput}</td>
            <td>${jobTitleInput}</td>
            <td class="classOfAnnualSalary">${annualSalaryInput}</td>
            <td>${deleteButton}</td>
        </tr>
    `)
    //maybe like append a bling sign, and then remove it before removing the monthly amount salary?
    //can't get $ sign before the annual salary input without it making the monthly salary a NaN when I remove a row.

    // $('#tableContainer').append('<tbody><tr><td>' + employeeFirstNameInput + '</td></tr></tbody>')
    // $('#tableContainer').append('<tr><td>' + lastNameInput + '</td></tr>')
    // $('#tableContainer').append('<tr><td>' + IDNumberInput + '</td></tr>')
    // $('#tableContainer').append('<tr><td>' + jobTitleInput + '</td></tr>')
    // $('#tableContainer').append('<tr class="testingPetersThing"><td>' + annualSalaryInput + '</td></tr>')

    let monthlySalary = (Math.round((annualSalaryInput/12) * 100) /100);
    totalMonthly += monthlySalary;
    console.log('Monthly salary: ', monthlySalary);
    console.log('Total monthly: ', totalMonthly);
    $('#totalMonthlyOnDOM').empty();
    $('#totalMonthlyOnDOM').append(`${totalMonthly}`);

    console.log(`employeeNumber: ${employeeFirstNameInput}, lastName: ${lastNameInput}, IDNumber: ${IDNumberInput}, jobTitle: ${jobTitleInput}, annualSalary: ${annualSalaryInput}`);

};

function tooMuchMoney(){
    //if totalMonthly > 20000, turn the container holding totalMonthly red.
    if (totalMonthly >= 20000){
        console.log('TOO MUCH MONEYY')
        //https://linuxhint.com/change-css-jquery/#:~:text=You%20can%20change%20CSS%20using,by%20manipulating%20CSS%20style%20properties.
        $('#totalMonthly').css({"background-color": "red"});
    }
    
}

//remove the employee from the DOM using the delete button.
//Use .this()

//something that I want to do is have the table span the entire page.
function urFired(){
    //console.log('FIRED!!!!');
    $(this).closest('tr').remove();
    let deleteThis = $(this).closest('tr').find('.classOfAnnualSalary').text();
    //this is a stretch goal
    console.log('look here:', deleteThis);
    let intNotADirtyThing = Number(deleteThis);
    // console.log(`look here plz do not be NaN:`, intNotADirtyThing)
    // console.log(typeof(deleteThis));
    // console.log(typeof(intNotADirtyThing));
    totalMonthly = parseInt(totalMonthly - (intNotADirtyThing/12));
    $('#totalMonthlyOnDOM').empty();
    $('#totalMonthlyOnDOM').append(`${totalMonthly}`);
    if (totalMonthly < 20000){
        $('#totalMonthly').css({"background-color": "transparent"});
    };
    if (totalMonthly < 0){
        console.log('Less than zero') // okay so this is running when totalMonthly is less than zero, I just need to now make sure that if it IS less than 0, I change the number that is less than 0 to be 0.
        $('#totalMonthlyOnDOM').empty();
        $('#totalMonthlyOnDOM').append(`${defaultValue}`);
    }
    console.log(totalMonthly);
}

//so when I remove _THIS_ employee, I need to also subtract their monthly Salary from the total Monthly.

//take a look at span for the bling sign