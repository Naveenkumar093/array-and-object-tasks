
//for the given JSON iterate all over for loops (for , for in, for of, forEach)

var data = {
    "employees": [
      {"firstName": "John", "lastName": "Doe"},
      {"firstName": "Anna", "lastName": "Smith"},
      {"firstName": "Peter", "lastName": "Jones"}
    ]
  };
  
  // Using for loop
  for (let i = 0; i < data.employees.length; i++) {
    const employee = data.employees[i];
    console.log(employee.firstName, employee.lastName);
  }
  
  // Using for...in loop
  for (let key in data.employees) {
    const employee = data.employees[key];
    console.log(employee.firstName, employee.lastName);
  }
  
  // Using for...of loop
  for (let employee of data.employees) {
    console.log(employee.firstName, employee.lastName);
  }
  
  // Using forEach loop 
  data.employees.forEach(employee => {
    console.log(employee.firstName, employee.lastName);
  });