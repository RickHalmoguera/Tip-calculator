const billInput = document.getElementById("billInput")
const pplInput = document.getElementById("pplInput")
const customInput =  document.getElementById("customInput")
const pplError = document.getElementById("pplError")
const btns= document.querySelectorAll(".btn")
const tipDisplay = document.getElementById("tipDisplay")
const totalDisplay = document.getElementById("totalDisplay")
const resetBtn = document.getElementById("resetBtn")

let billValue = 0
let pplValue = 0
let percentageValue = 0

const resetAll = ()=>{
billValue = 0
pplValue = 0
percentageValue = 0
btns.forEach(btn => {
    btn.classList.remove("selected")
    customInput.classList.remove("selected")})

tipDisplay.innerText = "$ 0.0"
totalDisplay.innerText = "$ 0.0"
customInput.value = ""
} 

const displayResult =()=>{
    if(billValue > 0 && pplValue > 0 && percentageValue > 0){
        console.log(pplValue)
        let tipValue = billValue * percentageValue / 100
        let totalValue = (billValue + tipValue) / pplValue
        tipDisplay.innerText = `$ ${tipValue}`
        totalDisplay.innerText= `$ ${totalValue}`
    }
}

const updateBill = ()=>{
    billValue = parseInt(billInput.value)
}

const clearBtnsStyle = (e)=>{
    btns.forEach(btn => {
        btn.classList.remove("selected")
        customInput.classList.remove("selected")
        document.getElementById(e.target.id).classList.add("selected")
    });
}

const checkPercentage = (e)=>{
    
    if(e.target.id =="5%"){
        percentageValue = 5
        customInput.value = ""
        clearBtnsStyle(e)
        
    }else if(e.target.id =="10%"){
        percentageValue = 10
        customInput.value = ""
        clearBtnsStyle(e)
        
    }else if(e.target.id =="15%"){
        percentageValue = 15
        customInput.value = ""
        clearBtnsStyle(e)
        
    }else if(e.target.id =="25%"){
        percentageValue = 25
        customInput.value = ""
        clearBtnsStyle(e)
        
    }else if(e.target.id =="50%"){
        percentageValue = 50
        customInput.value = ""
        clearBtnsStyle(e)
    }else if(e.target.id =="customInput"){
        percentageValue = 0
        clearBtnsStyle(e)
    }

    displayResult()

}

const updatePercentage = ()=>{
    percentageValue = customInput.value
    displayResult()
}

const checkPpl = ()=>{
    pplValue = pplInput.value
    if (pplValue <= 0){
        pplInput.style.border = "1px solid red"
        pplError.classList.remove("hidden")
    }else{
        pplInput.style.border = "none"
        pplError.classList.add("hidden")
    }

    displayResult()
}

checkPpl()

billInput.addEventListener("input",updateBill)
document.addEventListener("click", checkPercentage)
customInput.addEventListener("input", updatePercentage)
pplInput.addEventListener("input",checkPpl)
resetBtn.addEventListener("click",resetAll)
