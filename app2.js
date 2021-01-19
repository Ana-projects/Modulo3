const empleado = {
    bruto: 30000,
    hijos: 2,
    pagas: 12
}

let retencion;
let netoAnual;
let netoMensual;

console.log ("-- PRÁCTICA EXTRA --");

if (empleado.bruto < 12000){
    retencion = 0;
}else if (empleado.bruto >= 12000 && empleado.bruto < 24000){
    retencion = 0.08;
}else if (empleado.bruto >= 24000 && empleado.bruto < 34000){
    retencion = 0.16;
}else if (empleado.bruto >= 34000){
    retencion = 0.3;
}

retencion = empleado.hijos > 0 ? retencion - 0.02 : retencion;
retencion = retencion > 0 ? retencion : 0;

console.log("Retención: ", retencion);

netoAnual = empleado.bruto - empleado.bruto * retencion;
netoMensual = netoAnual / empleado.pagas;

console.log("Neto anual = ", netoAnual);
console.log("Neto mensual = ", netoMensual);

