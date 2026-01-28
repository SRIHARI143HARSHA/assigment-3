function greetBtnfun(event){
    event.preventDefault();
    let name=document.getElementsByName("username")[0].value;
    
    document.querySelector("h1").textContent = "Hello, " + name;


}

document.getElementById("box-1").onclick=()=>{
    let box=document.getElementById("box-1");
    box.style.backgroundColor="red";
    box.style.color="white";
}

const box2="box-2";
document.getElementById(box2).onclick=()=>{
    let box=document.getElementById("box-2");
    box.style.backgroundColor="blue";
    box.style.color="white";

}


const box3="box-3";
document.getElementById("box-3").onclick=()=>{
    let box=document.getElementById("box-3");
    box.style.backgroundColor="green";
    box.style.color="white";
}


const box4="box-4";
document.getElementById("box-4").onclick=()=>{
    let box=document.getElementById("box-4");
    box.style.backgroundColor="yellow";
    box.style.color="white";
}
