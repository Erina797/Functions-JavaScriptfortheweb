
    const ele= document.getElementById("ele1");
    function pintar(color="green"){
        ele.style.backgroundColor=color;
    }

    pintar();

    ele.addEventListener("click", ()=>{
       return pintar("yellow");
    }
    );


