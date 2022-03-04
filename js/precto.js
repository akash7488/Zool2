mouseOver =() => document.getElementById('book2').style.color="skyblue";   
mouseOut = () => document.getElementById('book2').style.color="black";

mouseOver2 = () => document.getElementById("book3").style.color="skyblue";
mouseOut2 = () => document.getElementById("book3").style.color="black";

mouseOver3 = () => document.getElementById("book4").style.color="skyblue";
mouseOut3 = () => document.getElementById("book4").style.color="black";

mouseOver4 = () => document.getElementById("book5").style.color="skyblue";
mouseOut4 = () => document.getElementById("book5").style.color="black";



function onClick1() {
    var divs = document.getElementById('drop1');
    divs.classList.toggle("show");
}

function onClick2(){
    var div = document.getElementById("drop2")
    div.classList.toggle("show");
    
}
