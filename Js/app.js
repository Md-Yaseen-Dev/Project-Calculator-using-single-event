let keys1 = document.querySelectorAll(".btns");
let output = "";

keys1.forEach((btn)=>{
btn.addEventListener("click", (e)=>{
    // console.log(e.target.innerHTML)
    if(e.target.innerHTML == "="){
       output = eval(output);
      document.querySelector('.screen').value  = output;

    }
      else{
           output += e.target.innerHTML;
        document.querySelector('.screen').value = output
      }
      
})
})

function clearscreen(){
 output = ""
document.querySelector(".screen").value = output;
}