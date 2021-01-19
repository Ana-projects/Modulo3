const product = { count: 3, price: 12.55, type: "ropa" };

console.log ("-- PRÁCTICA BÁSICA --");

console.log("Price before taxes: ", product.count * product.price);
console.log("Vat: ", getVat(product));
console.log("Final price: ", getTotalVat(product));

function getTotalVat(product){
    return product.count > 0? product.count * getVat(product) : 0;
}

function getVat(product){
    switch (product.type){
        case "alimentacion": return 0.1;
        case "libro": return 0.04;
        default: return 0.21;
    }
}

//Entiendo que en este switch el break es innecesario porque con el return ya se sale de la función y por lo tanto del case correspondiente.
//El editor me lo marcaba como innecesario y lo he quitado.