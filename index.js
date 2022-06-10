let btn = document.getElementById("copyLink");
let divLink = document.getElementById("link");
// let copiedLink = JSON.parse(sessionStorage.getItem(0));

btn.addEventListener("click", ()=>{
    // sessionStorage.setItem(0,"http://127.0.0.1:5500/addTeamMembers/addTeamMembers.html");
    // var copyLink = document.getElementById("copyLink");
    let link = divLink.innerText;

    let inputElement = document.createElement("input");
    inputElement.setAttribute("value", link);
    document.body.appendChild(inputElement);
    
    inputElement.select();

    document.execCommand("copy");

    inputElement.parentNode.removeChild(inputElement);
});