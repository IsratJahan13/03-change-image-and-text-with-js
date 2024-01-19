// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

const myImage = document.querySelector("img")

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src")
    if(mySrc === "./img/firefox-icon.png") {
        myImage.setAttribute("src", "./img/Brave_icon_lionface.png");
        document.body.style.backgroundColor = "white";

    } else {
        myImage.setAttribute("src", "./img/firefox-icon.png");
        document.body.style.backgroundColor = "orange";
    }

}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");

    if (!myName) {
        setUserName();
      } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
    
}

myButton.onclick = () => {
    setUserName();
}
