//Esto agrega el valor a la pantalla
function agregar(valor){
    document.getElementById("pantalla").value += valor;
}

//Esto borra los valores de la pantalla
function borrar(){
    document.getElementById("pantalla").value = '';
}

//Esto realiza los cálculos
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado;
}