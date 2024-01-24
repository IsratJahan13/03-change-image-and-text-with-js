// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

const myImage = document.querySelector("img");
let myHeading = document.querySelector("h1");
const myButton = document.querySelector("button");
let myContent = "Mozilla is cool";
let myName = "";

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src")
    if(mySrc === "./img/firefox-icon.png") {
        myImage.setAttribute("src", "./img/Brave_icon_lionface.png");
        document.body.style.backgroundColor = "white";
        myContent = "Is Brave cooler?"
        // myHeading.textContent = `${myContent}, ${myName}`;
        myHeading.innerHTML = myContent;
        if(myName) {
            myHeading.innerHTML = myContent + ", " + myName;
        }
        
    } else {
        myImage.setAttribute("src", "./img/firefox-icon.png");
        document.body.style.backgroundColor = "orange";
        myContent = "Mozilla is cool";
        myHeading.innerHTML = myContent;
        if (myName) {
        myHeading.innerHTML = myContent + ", " + myName;
        }
    }
}

function setUserName () {
    myName = prompt("Please enter your name.");

    if (!myName) {
        setUserName();
      } else {
        localStorage.setItem("name", myName);
        myHeading.innerHTML = myContent + ", " + myName;
        // myHeading.textContent = `${myContent}, ${myName}`;
        
    }
    
}

myButton.onclick = () => {
    setUserName();
}



