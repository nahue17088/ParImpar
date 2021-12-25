function par(){
    let numero = Number(("Ingresa un numero: "))
    swal("Par o Impar:", {
        content: "input",
    })
    .then((numero) => {
    if (numero%2 == 0) {
        swal("el numero es par")
    } else{
        swal("el numero es impar")
    }
    });
}

par()


