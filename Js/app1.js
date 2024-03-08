const buttonContainer = document.querySelector(".container");

let output = "";


const btns = ["7","8","9","/","4","5","6","*","1","2","3","-",".","0","=","+"];


function createBtn(arr){
    const fragment = document. createDocumentFragment();
    const divcontainer = document.createElement("div");
    divcontainer.classList.add("keys");
    arr.forEach((ele)=>{ 
        const btn = document.createElement("button");
       btn.textContent = ele;
       btn.classList.add("btns");
       divcontainer.appendChild(btn);
       fragment.appendChild(divcontainer);
})

buttonContainer.appendChild(fragment)
}

createBtn(btns);
// ----------------calculation----------------------------------------------------------------------
function calculation(e){
    if(e == "="){
        output = eval(output);
       document.querySelector('.screen').value  = output;
 
     }
       else{
            output += e;
         document.querySelector('.screen').value = output;
       }
   
}

function clearscreen(){
    output = ""
   document.querySelector(".screen").value = output;

}   

function calFunc(event) {
    console.dir(event);                        
    if (event.target.computedRole = "button") {
      calculation(event.target.innerHTML);
    }
  }
  
  buttonContainer.addEventListener("click", calFunc);