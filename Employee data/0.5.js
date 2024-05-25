    function addRow(name, role, salary) {
        let table = document.getElementById("employeeTable");
        let newRow = table.insertRow(-1);
        let nameCell = newRow.insertCell(0);
        let roleCell = newRow.insertCell(1);
        let salaryCell = newRow.insertCell(2);
        nameCell.innerHTML = name;
        roleCell.innerHTML = role;
        salaryCell.innerHTML = salary;
    }
    function calculateTotalSalary() {
        let totalSalary = 0;
        let table = document.getElementById("employeeTable");
        for (let i = 1; i < table.rows.length; i++) {
            totalSalary += parseInt(table.rows[i].cells[2].innerHTML);
        }
        document.getElementById("totalSalary").innerHTML = totalSalary;
    }
    function submitForm() {
        let name = document.getElementById("empName").value;
        let role = document.getElementById("empRole").value;
        let salary = document.getElementById("empSalary").value;
        
        addRow(name, role, salary);
        calculateTotalSalary();
    }