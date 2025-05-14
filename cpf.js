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
    // resto do calculo anterios e comprando se o digito é diferente do 9 e 10 digito 
    if(resto !== parseInt(cpf.substring(9,10))){
        return false; 
    }

    //validação do segundo dv
    soma = 0;
    for(let i = 1;i <=10 ; i++){
        soma += parseInt(cpf.substring(i -1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if(resto ===10 || resto === 11){
        resto = 0;   
    }
    if(resto !== parseInt(cpf.substring(10,11))){
        return false;
    }
    //valido retorna true 
    return true;
}
// addeventlistener é um mecanismo para escuta 
document.getElementById("cpfform").addEventListener("submit", function(e){
    e.preventDefault();
    const cpfInput =  document.getElementById("cpf").value;
    const messageDiv =  document.getElementById("message");


    if(validarCpf(cpfInput)){
        messageDiv.textContent = " CPF Valido";
        messageDiv.className = " message success";
    } else{
        messageDiv.textContent = "CPF invalido" ;
        messageDiv.className=" message error";
    }
    messageDiv.style.display = "block";

});