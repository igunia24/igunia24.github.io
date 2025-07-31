const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/las1.jpg") {
    myImage.setAttribute("src", "images/obrazek.jpg");
  } else {
    myImage.setAttribute("src", "images/las1.jpg");
  }
});


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Zobacz, ${myName}, jaki piękny las`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Zobacz, ${storedName}, jaki piękny las`;
}

// Allows user to create new usernme.
myButton.addEventListener("click", () => {
  setUserName();
});

