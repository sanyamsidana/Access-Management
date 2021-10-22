
class User {
    constructor(username){
        this.username = username;
    } 
}

// available pages for which access can be granted to users.
const links = ["one.html","two.html","three.html"];

// creating admin user
if (localStorage.getItem('Users') == null){
    let users =  [new User("admin")];
    localStorage.setItem("Users",JSON.stringify(users));
}
if (localStorage.getItem('userAccess') == null){
    let userAccess =  {"admin":["one.html","two.html","three.html"]};
    localStorage.setItem("userAccess",JSON.stringify(userAccess));
}

var users = JSON.parse(localStorage.getItem('Users'));
var userAccess = JSON.parse(localStorage.getItem('userAccess'));

var updatedLinks = []
var currentuser = ""

function addUser(username){
    let user =  new User(username);
    users.push(user);
    // storing in local storage so that data persist.
    localStorage.setItem("Users",JSON.stringify(users));
}
function signUpUser() {
    let username = document.getElementById("username").value.toLowerCase();
    let exist = isUserExist(username);
    // addUser only if not exist.
    if (exist == false){
        addUser(username);
        alert ("sign-up successfull!");
    }
    else{
        alert ("username not available!");
    }
}

function isUserExist(username) {
    for(let i=0;i<users.length;i++){
        if(users[i].username == username){
            return true;
        }
    }
    return false;
}

function redirectToIndex(){
    window.location.replace("./index.html");
}

function redirectToUser(){
    window.location.replace("./user.html?user=" + document.getElementById("username").value.toLowerCase());
}

function redirectToone(username){
    window.location.replace("./one.html?user=" + username);
}
function redirectTotwo(username){
    window.location.replace("./two.html?user=" + username);
}
function redirectTothree(username){
    window.location.replace("./three.html?user=" + username);
}
