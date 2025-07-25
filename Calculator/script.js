let buttons=document.querySelectorAll(".button")
let screen=document.querySelector("#screen")
var screenText=""

buttons.forEach(button=>{
   button.addEventListener('click',()=>{
      let val=button.textContent
      if(val=="AC"){
         screenText=""
         screen.value=screenText
      }
      else if(val=="DEL"){
         screenText=screenText.slice(0,screenText.length-1)
         screen.value=screenText
      }
      else if(val=='='){
         try{
            screenText=screen.value=eval(screenText)
         }
         catch{
            screenText='Error'
            screen.value=screenText
         }
      }
      else{
         screenText+=val
         screen.value=screenText
      }
   })
})