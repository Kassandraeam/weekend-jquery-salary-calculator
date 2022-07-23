$(document).ready(readySteadyGo);

let totalMonthly = 0;

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
    let deleteButton = "<button id='zap'>Delete employee</button>";

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
            <td>$${annualSalaryInput}</td>
            <td>${deleteButton}</td>
        </tr>
    `)

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
    };
}

//remove the employee from the DOM using the delete button.
//Use .this()

//something that I want to do is have the table span the entire page.
function urFired(){
    console.log('FIRED!!!!');
    $(this).closest('tr').remove();
}