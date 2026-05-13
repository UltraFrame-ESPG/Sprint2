function logar(){

    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if(email == "admin@gmail.com" && senha == "123"){

        mostrarMensagem("Acesso liberado!");

        setTimeout(() => {
            window.location.href = "./src/pages/home.html";
        }, 2000);

    }else{

        mostrarMensagem("Email ou senha incorretos!");

    }

}
function mostrarMensagem(texto){

    let msg = document.getElementById("mensagem");

    msg.innerHTML = texto;
    msg.style.opacity = "1";

    setTimeout(() => {
        msg.style.opacity = "0";
    }, 3000);

}

const esqueciSenha = document.getElementById('esqueci-senha');

esqueciSenha.addEventListener('click', (e) => {
    e.preventDefault(); 

    const emailAdmin = prompt("Digite seu e-mail de administrador para recuperar a senha:");
    
    if (emailAdmin) {   
        if (emailAdmin == "admin@gmail.com") {
            alert("Sucesso! As instruções de recuperação foram enviadas para " + emailAdmin);
        } else {
            alert("Erro: Digite um e-mail válido.");
        }
    }
});
