document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalBackdrop = document.createElement("div");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeModal = document.querySelector(".close");

    modalBackdrop.classList.add("modal-backdrop");
    document.body.appendChild(modalBackdrop); // Adiciona o fundo escuro ao DOM

    const noticias = {
        1: {
            title: "Vini Jr. e o racismo no futebol",
            description: "Vini Jr. revelou em entrevista à CNN que o Real Madrid pode abandonar jogos em caso de racismo, reforçando sua luta por justiça no futebol."
        },
        2: {
            title: "Desafio testado na Copa do Mundo Feminina Sub-20",
            description: "Uma alternativa ao VAR, chamada 'desafio', foi testada na Copa do Mundo Feminina Sub-20, oferecendo soluções econômicas para análise de jogadas."
        }
    };

    // Adiciona evento aos botões "Ver mais"
    document.querySelectorAll(".ver-mais").forEach(button => {
        button.addEventListener("click", () => {
            const id = button.getAttribute("data-noticia");
            modalTitle.textContent = noticias[id].title;
            modalDescription.textContent = noticias[id].description;

            modal.classList.add("visible");
            modalBackdrop.classList.add("active"); // Mostra o fundo escuro
            document.body.style.overflow = "hidden"; // Desabilita o scroll
        });
    });

    // Fecha o modal
    closeModal.addEventListener("click", closeModalFunction);
    modalBackdrop.addEventListener("click", closeModalFunction);

    function closeModalFunction() {
        modal.classList.remove("visible");
        modalBackdrop.classList.remove("active"); // Esconde o fundo escuro
        document.body.style.overflow = ""; // Restaura o scroll
    }
    // Fecha o modal clicando fora do conteúdo
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("visible");
            modal.classList.add("hidden");
            modalBackdrop.classList.remove("active"); // Esconde o fundo escuro
            document.body.style.overflow = ""; // Restaura o scroll
        }
    });
});


// adicionar noticia
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("adicionar-noticia-form");
    const loginReminder = document.getElementById("login-reminder");
    const isLoggedIn = checkUserLoggedIn(); // Função fictícia para verificar login

    // Exibe o formulário ou o lembrete de login
    if (!isLoggedIn) {
        form.classList.add("hidden");
        loginReminder.classList.remove("hidden");
    }

    // Lida com o envio do formulário
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Coleta os dados do formulário
        const noticia = {
            nomeAdicionador: document.getElementById("nome-adicionador").value.trim(),
            titulo: document.getElementById("titulo-noticia").value.trim(),
            fonte: document.getElementById("fonte-noticia").value.trim(),
            tema: document.getElementById("tema-noticia").value.trim(),
            texto: document.getElementById("texto-noticia").value.trim(),
        };

        // Simula o envio para um servidor (adicione a lógica de backend real aqui)
        console.log("Notícia enviada:", noticia);
        alert("Notícia adicionada com sucesso!");

        // Redireciona para a página inicial ou limpa o formulário
        form.reset();
    });
});

// Simulação da verificação de login
function checkUserLoggedIn() {
    // Substitua esta lógica pela real (ex.: cookies, localStorage, API)
    return false; // Alterar para `true` para simular login ativo
}
