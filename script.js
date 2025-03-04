document.addEventListener("DOMContentLoaded", function () {
    let titulo = document.getElementById("titulo"); 
    let cores = [
        "#FF0000",
        "#32CD32", 
        "#00ccff", 
        "#FFFF00", 
        "linear-gradient(90deg, #008C45 33%, #FFFFFF 33%, #FFFFFF 66%, #FF8200 66%)"
    ]; 
    let indice = 0;
    setInterval(function () {
        if (indice < 4) {
            titulo.style.color = cores[indice]; 
            titulo.style.background = "none"; 
        } else {
            titulo.style.background = cores[indice]; 
            titulo.style.webkitBackgroundClip = "text"; 
            titulo.style.backgroundClip = "text";
            titulo.style.color = "transparent"; 
        }
        
        indice = (indice + 1) % cores.length; 
    }, 1000); 
});
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("Contato").addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (nome === "") {
            alert("Não esqueça de colocar seu nome!");
            return;
        }

        if (email === "") {
            alert("Por favor, insira seu e-mail para que eu possa te responder!");
            return;
        }

        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!regexEmail.test(email)) {
            alert("Opa! Esse e-mail não parece válido. Tente novamente!");
            return;
        }

        if (mensagem === "") {
            alert("Escreva sua mensagem! Vou adorar ler o que tem para me dizer!");
            return;
        }

        alert("Mensagem enviada com sucesso!");
        this.submit();
    });
});
