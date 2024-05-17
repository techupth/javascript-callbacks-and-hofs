// Exercise #1: For Each Function

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// employeeSalaries.forEach((salaries) => console.log(salaries));
const forEach = (array,callback) => {
  for (let i = 0; i < array.length;i++ ){
    let salary = array[i];
    newEmployeeSalaries.push(callback(salary));
  }
}
function plus(num) {
  return num + 5000;
}
forEach(employeeSalaries,plus)

console.log(newEmployeeSalaries); 
