/*
    Atividade: Crie uma calculadora

    Atividade I: Crie operações matemática para a calculadora.
    O controlador deve ser capaz de:
    ( X ) Multiplicar;
    ( X ) Dividir;
    ( X ) Somar;
    ( X ) Subtrair.
    
    Obs.: Crie um módulo chamado operações.js contendo as funções de callback.

    Atividade II: Crie uma função para resetar a calculadora.
    ( X ) A função deve ser capaz de zerar o valor acumulado.
    (  ) Crie a documentação da função utilizando JavaDoc.

    Atividade Bônus: Crie uma função para guardar as operações matemáticas
    (  ) A função deve guardar cada operação matemática e retornar as operações acumuladas.
    (  ) Imprima na tela as operações matemáticas realizada com o resultado final.
    (  ) Crie a documentação da função utilizando JavaDoc.

    Exemplo: 2 * 2 + 3 / 4 - 1 = 0.75

*/

const Calculadora = require('./modulos/calculadora');

const operadores = require('./modulos/operacoes');

const app = new Calculadora();


console.log('Resultado:'+ app.calcular([4,2], operadores.subtrair));
console.log('Zerando a calculadora:'+ app.reset());
console.log('Operações:');
console.log('Operações = resultado:');