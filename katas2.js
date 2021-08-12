// comece a criar a sua função add na linha abaixo
function add(num1, num2) {
    return num1 + num2
}

// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(param1, param2) {
    let resultado = 0
    for (let i = 1; i <= param2; i++) {
        resultado += add(param1, 0)
    }
    if (param1 === 0 || param2 === 0) {
        resultado = 0
    }
    return resultado
}

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(par1, par2) {
    let resultadoVariante = par1
    for (i = 1; i < par2; i++) {
        resultadoVariante = multiply(resultadoVariante, par1)
    }
    if (par2 === 0 && par1 !== 0) {
        resultadoVariante = 1
    }
    return resultadoVariante
}

// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(fator) {
    let variavel = fator
    let redutor = 1
    for (i = fator; i > 1; i--) {
        variavel = multiply(variavel, (fator - redutor))
        redutor++
    }
    return variavel
}

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
