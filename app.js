const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];

let userInput = '';


const runCommand = function (e) {
  e.preventDefault();
  const userInput = prompt('enter a command');
  switch (userInput){
    case 'print':
      let htmlStr = '';
      employeeList.forEach(e => renderEmployee(e));
      break;
    case 'lookup':
        userName = prompt('username');
        employeeList.forEach(e => userName.toLowerCase() === e.name.toLowerCase() );
        break;
    case 'contains':
          userName = prompt('username');
          employeeList.forEach(e => e.name.toLowerCase.inludes(userName))
          break;
    case 'verify':
      render('verify');
      let userName = $('input').val();
      render(employeeList.some(e=>e.name.toLowerCase() === userName.toLowerCase()) ? 'yes' : 'no');
      break;
    case 'update':
      userName = prompt('username');
      let field = prompt('what field would you like to update');
      let value = prompt('what would you like to updated');
      const index = employeeList.findIndex(e => e.name.toLowerCase() ===)
      employeeList[index][field] = value;
      employeeList.forEach(e => renderEmployee(e))
      break;
    case 'delete':
      userName = prompt('username');
      const index = employeeList.findIndex(e => e.name.toLowerCase() === userName.toLowerCase() )
      employeeList.splace(0, index);
      employeeList.forEach(e => renderEmployee(e))
      break;
    case 'add':
      userName = prompt('username');
      let officeNum = prompt('office number');
      let PhoneNum = prompt('phone number');
      employeeList.push({
        name: userName,
        officeNum: officeNum,
        phoneNum: phoneNum
      })
      employeeList.forEach(e => renderEmployee(e))
      break;
      default:
        render('invalid command');
  }
      }
  // if (userInput === 'print') {
  //   for (let i = 0; i < employeeList.length; i++) {
  //     render(employeeList[i].name)
  //     render(employeeList[i].officeNum);
  //     render(employeeList[i].phoneNum);
  //   }
  // }

  if (userInput === 'verify') {
    const verifyUser = prompt('enter an employee name');
    let msg = 'false';
    for (let i = 0; i < employeeList.length; i++) {
      if (verifyUser === employeeList[i].name) {
        msg = 'true';
      }
      render(msg);
    }
  }

  if (userInput === 'lookup') {
    const lookupUser = prompt('enter an employee name');
    for (let i = 0; i < employeeList.length; i++) {
      if (lookupUser === employeeList[i].name) {
        render(employeeList[i].name)
        render(employeeList[i].officeNum);
        render(employeeList[i].phoneNum);
      }
    }
  }

  if (userInput === 'contains') {
    const containsName = prompt('enter a partial name');
    for (let i = 0; i < employeeList.length; i++) {
      if (employeeList[i].name.match(containsName)) {
        render(employeeList[i].name)
        render(employeeList[i].officeNum);
        render(employeeList[i].phoneNum);
      }
    }
  }

  if (userInput === 'update') {
    const updateUser = prompt('enter a name to update');
    const updateField = prompt('What field would you like to update?');
    const updateValue = prompt('enter the new info');
    for (let i = 0; i < employeeList.length; i++) {
      if (updateUser === employeeList[i].name) {
        employeeList.find(updateField);
        employeeList.fill(updateValue);
      }
    }
    for (let i = 0; i < employeeList; i++) {
      render(employeeList[i]);
    }
  }

  if (userInput === 'add') {
    // function addUser(employeeList) {
    const userName = prompt('enter new employee name');
    const userOffice = prompt('enter new employee office');
    const userPhone = prompt('enter new employee phone number');

    const newEmployee = {
      name: userName,
      officeNum: userOffice,
      phoneNum: userPhone
    }
    employeeList.push(newEmployee);

    for (let i = 0; i < employeeList.length; i++) {
      render(employeeList[i].name)
      render(employeeList[i].officeNum)
      render(employeeList[i].phoneNum)

    }
  }

  if (userInput === 'delete')
    const deleteUser = prompt('enter an employee name');
  employeeList.filter(e => e.name === deleteUser)
  for (let i = 0; i < employeeList.length; i++) {
    if (deleteUser === employeeList[i].name) {
      employeeList.splice(e => e.employeeList.forEach(e => e.name, e.officeNum, e.phoneNum))

    }
  }
}

const verify = function () {
  command = 'verify'
  $('input').addClass('show');
}

const render = function(htmlStr){
  $('#list').htmlStr(htmlStr);
}

const print = function () {
  command = 'print';
  $('input').removeClass('show');
}
$('#verify').on('click', verify);
$('#print').on('click', print);
$('#submit').on('click', runCommand);