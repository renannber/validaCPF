function validarCpf(cpf){
    cpf= cpf.replace( / [^\d] + /g,"");
//codição
    if(cpf.length !==11 || /^(\d)\1+$/.test(cpf)){//expressão para ver se está sendo digitada vários números iguais 

        return false;

    }
    //criação da variavel 
    let soma = 0;
    let resto;
    //validação do primeriro DV, += é para guardar as informações 
    for(let i=1; i<= 9; i++){
        soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
    }

    resto = (soma*10) % 11;  // % mod é o resto da divisão 
    if (resto === 10 || resto === 11){
        resto = 0;
    }
    


}