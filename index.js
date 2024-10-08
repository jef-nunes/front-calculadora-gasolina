let input1;
let input2;
let input3;
let btnSend;


function calcularTotal()
{
    console.log(`Inputs\n1:${input1.value}, 2:${input2.value}, 3:${input3.value}`);
        let total = Number(input1.value)/Number(input2.value)
        total *= Number(input3.value);
        console.log(total);
}

document.addEventListener("DOMContentLoaded",()=>{
    console.log("...")
    input1 = document.getElementById("input-1");
    input2 = document.getElementById("input-2");
    input3 = document.getElementById("input-3");
    btnSend = document.getElementById("btn-send-form-0")
    btnSend.addEventListener("click", calcularTotal());
});