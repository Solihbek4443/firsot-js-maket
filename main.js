const eldropdownF = document.querySelector(".first__dropdown__menu")
const elbtnclick  = document.querySelector(".dropdown__menu")
const eldropdownS = document.querySelector(".second__dropdown__menu")
const elbtnclickS  = document.querySelector(".dropdown__menu__sec")


eldropdownF.addEventListener("click", ()=>{
    if(elbtnclick.style.display === "none"){
        elbtnclick.style.display = "block" 
    }else{
        elbtnclick.style.display = "none"
    }
})

eldropdownS.addEventListener("click", ()=>{
    if(elbtnclickS.style.display === "none"){
        elbtnclickS.style.display = "block" 
    }else{
        elbtnclickS.style.display = "none"
    }
})