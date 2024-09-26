function solicitarDados(){
    //Solicita o nome do usuario
    let nome = prompt("qual seu nome?")
    //Solicita a idade do usuario
    let idade = prompt("qual é sua idade?")
    //Solicita o cidade do usuario
    let cidade = prompt("qual sua cidade?")
    //Solicita o telefone do usuario
    let telefone = prompt("qual seu telefone?")


    //Exibe a saudação
    alert("Olá, "+nome+ " Você tem " +idade+ " anos, sua cidade" +cidade+ " e seu telefone é " +telefone+ "?")


    //Mostrar os dados no console
    console.log("nome do usuario: ", nome);
    console.log("idade do usuario: ", idade);
    console.log("cidade do usuario: ", cidade);
    console.log("telefone do usuario" ,telefone);
}