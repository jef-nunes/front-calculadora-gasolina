// Referenciar elementos
const input1 = document.getElementById("input-1");
const input2 = document.getElementById("input-2");
const input3 = document.getElementById("input-3");
const btnSend = document.getElementById("btn-send-form-0");

// Eventos

btnSend.addEventListener("click", calcularTotal());
// Calcular total a ser gasto com gasolina em R$
function calcularTotal()
{
    let a = Number(input1.value);
    let b = Number(input2.value);
    let c = Number(input3.value);
    let total = (a/b)*c
    alert('R$ '+total.toFixed(2))
}

// Vincular o evento de envio do formulario
