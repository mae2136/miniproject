var projectForm = $(`#projectForm`);
var projectInfo = [];
$(`#submitProject`).on(`click`, storeInfo);

function storeInfo(event) {
    event.preventDefault();
    console.log($(`#projectName`).val());
    console.log($(`#projectType`).val());
    console.log($(`#wage`).val());
    console.log($(`#dueDate`).val());    

   projectInfo = [$(`#projectName`).val(), $(`#projectType`).val(), $(`#wage`).val(), $(`#dueDate`).val()];
  
   addInfo(projectInfo);
   clearForm();
}

function addInfo(projectInfo) {
    //days until due date, estimated total earned, and remove button
    projectInfo = extraInfo(projectInfo);
    // Create <tr>
    var newRow = $(`<tr>`);
    // Create <td> for each element of the form
    // Add information to <td> elements
    $.each(projectInfo, function (index, value) {
        newRow.append($(`<td>`).text(value));
    });
    console.log(newRow);
    // Append these to projectTable or tbody
    $(`#projectTable`).append(newRow);
}

function extraInfo(projectInfo) {
    var due = moment(projectInfo[3]);
    var today = moment();
    console.log(due);
    
}

// Event listener for remove button
function clearForm() {
    $(`#projectForm`).trigger("reset");
    console.log(`Cleared`);
}