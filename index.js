// Referenciar elementos
const input1 = document.getElementById("input-1");
const input2 = document.getElementById("input-2");
const input3 = document.getElementById("input-3");
const btnSend = document.getElementById("btn-send-form-0");

// Eventos
// Calcular total a ser gasto com gasolina em R$
function calcularTotal()
{
    console.log(`Inputs\n1:${input1.value}, 2:${input2.value}, 3:${input3.value}`);
        let total = Number(input1.value)/Number(input2.value)
        total *= Number(input3.value);
        console.log(total);
}

// Vincular o evento de envio do formulario
btnSend.addEventListener("click", calcularTotal());
