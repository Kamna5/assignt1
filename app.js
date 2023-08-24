let studentsList = [];

function notifyUserExist() {
    let alert = document.getElementById('alert-danger')
    alert.classList.remove('alert');
    alert.classList.add('alert-danger')

    setTimeout(() => {
        alert.classList.remove('alert-danger')
        alert.classList.add('alert');

    }, 2000)
}
function notifyUserAdded() {
    let alert = document.getElementById('alert-success')
    alert.classList.remove('alert');
    alert.classList.add('alert-success')

    setTimeout(() => {
        alert.classList.remove('alert-danger')
        alert.classList.add('alert');

    }, 2000)
}
function addInfo(student) {
    let checkStudent = studentsList.filter((currentstudent) => {
        return currentstudent.email == student.email;
    })
    if (checkStudent.length == 0) {
        studentsList.push(student)
        notifyUserAdded();
    }
    else {
        console.log("user already exist")

        notifyUserExist();
    }
}

function displayStudent() {
    let studentContainer = document.getElementById("students");
    studentContainer.innerHTML = " "
    studentsList.map((a) => {
        let studentDiv = document.createElement("div");
        studentDiv.classList.add("student");
        let nameElement = document.createElement("p");
        nameElement.innerText = a.name;
        let emailElement = document.createElement("p");
        emailElement.innerText = a.email;
        let InputElement = document.createElement("p");
        InputElement.innerText = "";



        studentContainer.appendChild(studentDiv);
        studentDiv.appendChild(nameElement);
        studentDiv.appendChild(emailElement);
        studentDiv.appendChild(InputElement);

    });

}
function addStudent() {

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let student = {
        name: name.value,
        email: email.value,
    };

   
    
    addInfo(student)

    displayStudent();
    console.log(student);


}
