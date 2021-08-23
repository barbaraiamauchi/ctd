/*
    Alerts
    Documentação: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert

    alert(texto|valor);

    Prompts
    Documentação: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/prompt

    prompt(texto, valor);

    Confirm
    Documentação: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/confirm

    confirm(mensagem);
*/

/*
    Funções
    Documentação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions

    function [nomeDaFuncao](parametros1, parametro2, ...parametroN) {
        // Escopo da função.
    }

    [nomeDaFuncao](parametros1, parametro2, ...parametroN);
*/

/* 
    Lidando com tempo
    Documentação: https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals
*/

/*
    Matemáticos (valores aritmeticos para números)
    + mais
    - menos
    * vezes
    / divido
    % resto da divisão
    ** potência

    Lógicos - responder verdeiro (true) ou falso (false)
    < maior
    > menor
    <= menor ou igual
    >= maior ou igual
    == é igual?
    === é igual mesmo? 
    !=  é diferente de?

*/

// ******* Tipos de declarações *******

// Exemplo 1

// Declaração
function cumprimentar() {
    alert('Olá');
}

// Exemplo 2
// Declaração
var cumprimentar = function() {
    alert('Olá');
}

// Invocação
cumprimentar(); // Chamamos esse processo de invocar uma função de método.
// Você pode invocar quantas vezes considerá necessário reaproveitar as instruções.
cumprimentar();
cumprimentar();
cumprimentar();

// ******* Usando parametros na função *******

// Declaração
function cumprimentar(saldacao) {
    alert(saldacao);
}

// Invocação
cumprimentar('Olá');
cumprimentar('Oi');
cumprimentar('Seja bem-vindo');
