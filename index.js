const employee = {
    name: "Landen"
}

function updateEmployeeWithKeyAndValue(employee,key,value) {
    const newEmployee = {...employee}
    newEmployee["streetAddress"] = "11 Broadway"

    return newEmployee
}