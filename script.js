var selectedRow = null

function showFormulario(id) {
    var content = document.getElementById(id);
    content.style.display = "block";
}

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["nombre"] = document.getElementById("nombre").value;
    formData["correo"] = document.getElementById("correo").value;
    formData["sexo"] = document.getElementById("sexo").value;
    formData["area"] = document.getElementById("area").value;
    formData["boletin"] = document.getElementById("boletin").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nombre;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.correo;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.sexo;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.area;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.boletin;

    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.modificar;
    cell6.innerHTML = `<a onClick="onEdit(this)"><i class="fas fa-edit"></i></a>`;

    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.eliminar;
    cell7.innerHTML = `<a onClick="onDelete(this)"><i class="fas fa-trash"></i></a>`;


}

function resetForm() {
    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("sexo").value = "";
    document.getElementById("area").value = "";
    document.getElementById("boletin").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nombre").value = selectedRow.cells[0].innerHTML;
    document.getElementById("correo").value = selectedRow.cells[1].innerHTML;
    document.getElementById("sexo").value = selectedRow.cells[2].innerHTML;
    document.getElementById("area").value = selectedRow.cells[3].innerHTML;
    document.getElementById("boletin").value = selectedRow.cells[4].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nombre;
    selectedRow.cells[1].innerHTML = formData.correo;
    selectedRow.cells[2].innerHTML = formData.sexo;
    selectedRow.cells[3].innerHTML = formData.area;
    selectedRow.cells[4].innerHTML = formData.boletin;
}

function onDelete(td) {
    if (confirm('¿Está seguro de eliminar usuario?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("nombre").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}