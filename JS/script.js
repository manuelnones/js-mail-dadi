let userEmailElement = document.getElementById(`userEmail`);
let userIdButtonElement = document.getElementById(`userIdButton`);
let listEmails = [`manueln@email.com`, `adriana@email.com`, `simone@email.com`, `liviov@email.com`, `patrick@email.com`];
let valideEmailElement = getElementById(`valideEmail`)

userIdButtonElement.addEventListener(`click`, function () {
    let emailFound = false;

    for (let i = 0; i < listEmails.length; i++) {
        if (userEmailElement.value == listEmails[i]) {
            emailFound = true;
        };
    };
    if (emailFound) {
        document.writeln("Email corretta")
    } else {
        document.writeln("Email non valida!")
    }
});