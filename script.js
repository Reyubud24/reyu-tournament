function checkCredentials() {
    var nam = document.getElementById("user");
    var pas = document.getElementById("pass");
    var uname = nam.value;
    var password = pas.value;
    if (uname == "AarushKandude1" && password == "ihave1Kwins") {
        location.href = "main.html";
    } else if(uname == "Xotik4" && password == "pkrithikreddy") {
        location.href = "main.html";   
    } else if(uname == "EliteKakashi" && password == "Kakashi69") {
        location.href = "main.html";
    } else {
        alert("Incorrect password! Access denied!");
    }
}

function notifyMe() {
    var hookname = document.getElementById("user");
    var webname = hookname.value;
    
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1213467801453596682/aj5IjbIrsqjblxT2VB2rSgX0NfyUYi0NLmCZ4fbu5TOcUDjYUms17-0No4bx-whyfNJo");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        username: webname,
        avatar_url: "",
        content: "Logged in!"
    }

    request.send(JSON.stringify(params));
}
