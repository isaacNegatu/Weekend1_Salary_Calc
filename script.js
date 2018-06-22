$(document).ready(start);

class Employee{
  constructor(fName, lName, ID, title, salary){
    this.fName = fName;
    this.lName = lName;
    this.id = ID;
    this.title = title;
    this.salary = salary;
  }

  calculateMonthlyCost(){
    return parseInt(this.salary)/12;
  }

}

let employees = [];

function start(){
  eventHandler();
}

function eventHandler(){
  $('.table').on('click', '.delete', deleteClicked);
  $('#submit').click(submitClicked);
}

function deleteClicked(){
  employees = employees.filter(employee => employee.id != $(this).attr('id'));
  $(this).parentsUntil('tbody').remove();
  calculateCost();
}

function submitClicked(){
  let flag = true;
  $('input').each(function(){
    if($(this).val() == ''){
      console.log('h');

      flag = false;
    }
  });

  let tableBody = $('.tableBody');

  if(flag){

    employees.push(new Employee($('#fName').val(),$('#lName').val(),$('#ID').val(),$('#title').val(),$('#salary').val()));

    let action = $(`<td><button id=${$('#ID').val()} class="delete"><i class="fa fa-close"></i></button></td>`);
    let firstName = $(`<td>${$('#fName').val()}</td>`);
    let lastName = $(`<td>${$('#lName').val()}</td>`);
    let id = $(`<td>${$('#ID').val()}</td>`);
    let title = $(`<td>${$('#title').val()}</td>`);
    let salary = $(`<td>${$('#salary').val()}</td>`);

    let tr = $('<tr></tr>');

    console.log(tr.append([action, firstName, lastName, id, title, salary]));

    $(tableBody).append(tr);
  }

  calculateCost();

}


function calculateCost(){
  let monthlyCost = 0;

  for(let i = 0; i < employees.length; i++){
    monthlyCost+= employees[i].calculateMonthlyCost();
  }

  if(monthlyCost <= 20000){
    $('#cost').text(monthlyCost);
  }else{
    $('#cost').text(monthlyCost).css('background-color', 'rgba(255, 0, 0, 0.5)');
  }

}
