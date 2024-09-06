// const calcularAnoDeNascimento = function(idade, mesDeNascimento, imprimir){
//     const mesAtual = 9
//     let anoDeNascimento = 2024 - idade
//     if(mesDeNascimento > mesAtual) anoDeNascimento--
//     imprimir(anoDeNascimento)
// }

// let imprimirAnoDeNascimento = anoDeNascimento => {
//     console.log ('Seu ano de nascimento é: ' + anoDeNascimento)
// }

// calcularAnoDeNascimento(21, 6, imprimirAnoDeNascimento)

function multiplicar(multiplicador){
    return function(numero){
        return numero * multiplicador
    }
}

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar(4)

console.log(dobrar(3))
console.log(triplicar(3))
console.log(quadruplicar(3))