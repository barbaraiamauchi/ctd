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
function cotacao(){

var nomeDoUsuario = prompt('Qual o seu nome?');

var quantidadeDolares = prompt('Quantos dólares ele gostaria de cotar?');

window.confirm(`Voce confirma o valor de ${quantidadedeDolares}`);

if (confirmacaoValor==true){
    var saudar = alert(`Olá ${nomeDoUsuario}. US$ ${quantidadeDolares} valem R$ ${quantidadeDolares * cotacaoDolarHoje} hoje.`);
}
else {
    cotacao();
}
}


