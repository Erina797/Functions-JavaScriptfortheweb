const colorOne= document.getElementById("colorOne");
const colorTwo= document.getElementById("colorTwo");
const colorThree= document.getElementById("colorThree");
const colorFour= document.getElementById("colorFour");

let color= 0;

document.addEventListener('keydown', function (event) {
    if (event.key === "a") {
    color="blue";
    } else if (event.key === "s") {
    color="orange";
    } else if (event.key === "d"){
    color="black";
    }
    console.log(color);
    })

function hacerClick (){

}   

document.addEventListener("click", function (e){
    if (e.target === colorOne){
        return(colorOne.style.backgroundColor=color);
    }
    else if(e.target === colorTwo){
        return(colorTwo.style.backgroundColor=color);
    }
    else if(e.target === colorThree){
        return(colorThree.style.backgroundColor=color);
    }
    else if(e.target === colorFour){
        return(colorFour.style.backgroundColor=color);
    }
});