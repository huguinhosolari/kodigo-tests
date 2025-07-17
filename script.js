function calcularPropina(){
    
    const monto = parseFloat(document.getElementById("cuenta").value);
    const porcentaje = parseFloat(document.getElementById("porcentaje").value);

    if (isNaN(monto) || isNaN(porcentaje)){
        alert("Por favor, ingresa montos válidos.");

        document.getElementById("resultado").innerHTML = `
        <div class="alert alert-sucess"> <p>Datos inválidos</p> </div>`;
        //return;
    }
    else{
        const propina = monto * (porcentaje / 100);
        const total = monto + propina;
    
        document.getElementById("resultado").innerHTML = `
        <div class="alert alert-sucess">
            <p><strong>Propina:</strong> $${propina.toFixed(2)}</p>
            <p><strong>Total a pagar:</strong> $${total.toFixed(2)}</p>
         </div>
        `;
    }
   
}