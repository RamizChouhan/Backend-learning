const Form = document.getElementById("UserForm");

Form.addEventListener("submit", (e) => {
    e.preventDefault();

    const Name = document.getElementById("name").value;
    const Password = document.getElementById("password").value;

    console.log("user name :", Name);
    console.log("User password", Password);;

    sendData(Name, Password);


});

function sendData(Name, password) {
    console.log("sendData function called");
    fetch("/add-user", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name: Name,
            password: password
        })
    })
}

