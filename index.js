const employee = {name: `Pablo`, streetAddress: "Picasso St"};

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee,
        [key]: value}
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
};
function deleteFromEmployeeByKey(employee, key){
    const employee1 = {...employee};
    delete employee1[key];
    return employee1;
};
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee
};