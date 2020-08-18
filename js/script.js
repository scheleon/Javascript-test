var form = document.getElementById("user-form")
var totalCount = 0

function handleForm(event) {
    event.preventDefault()
} 

form.addEventListener('submit', handleForm)

function insertIntoTable(data, tableRef) {
    totalCount++
    var row = tableRef.insertRow(-1)
    var numberCell = row.insertCell(0)
    var nameCell = row.insertCell(1)
    var emailCell = row.insertCell(2)

    numberCell.innerHTML = totalCount
    nameCell.innerHTML = data.name
    emailCell.innerHTML = data.email

    nameCell.addEventListener('click', function(){
        alert('Name: ' + this.innerHTML)
    })

    emailCell.addEventListener('click', function(){
        alert('Email: ' + this.innerHTML)
    })
}

document.getElementById("submit").addEventListener("click", async function(){
    tableRef = document.getElementById('users')
    if(totalCount === 0) {
        tableRef.deleteRow(-1)
    }

    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    data = {
        name: name,
        email: email
    }

    insertIntoTable(data, tableRef)

    document.getElementById('user-form-box').style.visibility = 'hidden'
    document.getElementById('add-user').style.visibility = 'visible'
})

document.getElementById('add-user').addEventListener('click', function(){
    document.getElementById('user-form-box').style.visibility = 'visible'
    this.style.visibility = 'hidden'
})