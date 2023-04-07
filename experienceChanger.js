function changePalette1(){
    document.getElementById("sidebarp").style.backgroundColor = "";
    document.getElementById("sidebarp").style.color = "";
    document.getElementById("sidebarp").style.borderColor = "";
    document.getElementById("widget").style.backgroundColor = "";
    document.body.style.backgroundColor = "";
    document.getElementById("section1").style.color = "";
    document.getElementById("table1").style.backgroundColor = "";
    document.getElementById("table1").style.color = "";
    document.getElementById("contactinfo").style.color = "";
    document.getElementById("text1").style.color = "";
    let tableHeader = document.getElementsByTagName("th");
    let tableText = document.getElementsByTagName("td");
    for(let i=0; i<tableHeader.length; i++){
        tableHeader[i].style.color = "";
    }
    for(let j=0; j<tableText.length; j++){
        tableText[j].style.color = "";
    }
}
function changePalette2(){
    document.getElementById("sidebarp").style.backgroundColor = "rgb(82, 0, 163)";
    document.getElementById("sidebarp").style.color = "rgb(0,255,191)";
    document.getElementById("sidebarp").style.borderColor = "rgb(82, 0, 163)";
    document.getElementById("widget").style.backgroundColor = "rgb(82, 0, 163)";
    document.body.style.backgroundColor = "rgb(255, 174, 200)";
    document.getElementById("section1").style.color = "rgb(155, 0, 108)";
    document.getElementById("table1").style.backgroundColor = "rgb(155, 0, 108)";
    document.getElementById("text1").style.color = "rgb(155, 0, 108)";
    document.getElementById("table1").style.color = "rgb(0,255,191)"
    document.getElementById("contactinfo").style.color = "rgb(0,255,191)";
    let tableHeader = document.getElementsByTagName("th");
    let tableText = document.getElementsByTagName("td");
    for(let i=0; i<tableHeader.length; i++){
        tableHeader[i].style.color = "white";
    }
    for(let j=0; j<tableText.length; j++){
        tableText[j].style.color = "white";
    }

}

function changePalette3(){
    document.getElementById("sidebarp").style.backgroundColor = "rgb(30, 255, 0)";
    document.getElementById("sidebarp").style.color = "black"
    document.getElementById("sidebarp").style.borderColor =  "rgb(30, 255, 0)";
    document.getElementById("widget").style.backgroundColor = "rgb(30, 255, 0)";
    document.getElementById("widget").style.bordercolor =   "rgb(30, 255, 0)";
    document.body.style.backgroundColor = "rgb(0, 31, 153)";
    document.getElementById("section1").style.color = "rgb(0, 255, 251)";
    document.getElementById("text1").style.color =  "rgb(0, 255, 251)";
    document.getElementById("table1").style.backgroundColor = "rgb(0, 255, 251)";
    document.getElementById("table1").style.color = "black"
    document.getElementById("contactinfo").style.color = "black";
    let tableHeader = document.getElementsByTagName("th");
    let tableText = document.getElementsByTagName("td");
    for(let i=0; i<tableHeader.length; i++){
        tableHeader[i].style.color = "black";
    }
    for(let j=0; j<tableText.length; j++){
        tableText[j].style.color = "black";
    }
}

const colorButton1 = document.getElementById("palette1")
const colorButton2 = document.getElementById("palette2")
const colorButton3 = document.getElementById("palette3")

colorButton1.addEventListener("click", changePalette1);
colorButton2.addEventListener("click", changePalette2);
colorButton3.addEventListener("click", changePalette3);





//calculatButton.addEventListener("click", calculateRemainder);

