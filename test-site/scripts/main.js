// 注释

document.querySelector("h1").addEventListener("click",function() {
    alert("别戳我，我怕疼。");
});
/* 
匿名函数（箭头函数），也可写成
document.querySelector("html").addEventListener("clich",() => {
    alert("别戳我，我怕疼。");
});
*/ 

let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    //调用prompt()函数，与alert()函数类似会弹出一个对话框，
    // 但这里需要用户输入数据，并在确定后将数据存储在myName变量中。
    let myName = prompt("请输入你的名字。"); 
    if (!myName) {
        setUserName();
    } else {
        // 调用localStorage API,它可以将数据存储在浏览器中供后续获取。
        // 这里用localStorage的setItem()函数来创建一个'name'数据项，
        // 并把myName变量复制给它。
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }    
  }
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
  }
  
  myButton.onclick = function () {
    setUserName();
  };
  