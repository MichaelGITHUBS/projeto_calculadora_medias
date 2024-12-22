document.addEventListener("DOMContentLoaded", function() {
    
    const form = document.getElementById("formCadastro");
    const tabelaContatos = document.getElementById("tabelaContatos").getElementsByTagName("tbody")[0];

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

       
        const nome = document.getElementById("user").value;
        const telefone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;

    
        if (nome === "" || telefone === "" || email === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        } 

        
        const novaLinha = tabelaContatos.insertRow();

       
        const celulaNome = novaLinha.insertCell(0);
        const celulaTelefone = novaLinha.insertCell(1);
        const celulaEmail = novaLinha.insertCell(2);

       
        celulaNome.textContent = nome;
        celulaTelefone.textContent = telefone;
        celulaEmail.textContent = email;

        
        form.reset();
    });
});