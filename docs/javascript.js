document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalBackdrop = document.createElement("div");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeModal = document.querySelector(".close");

    modalBackdrop.classList.add("modal-backdrop");
    document.body.appendChild(modalBackdrop); // adiciona o fundo escuro ao DOM

    const noticias = {
        1: {
            title: "Vini Jr. e o racismo no futebol",
            description: "Vini Jr. revelou em entrevista à CNN que o Real Madrid pode abandonar jogos em caso de racismo, reforçando sua luta por justiça no futebol."
        },
        2: {
            title: "Desafio testado na Copa do Mundo Feminina Sub-20",
            description: "Uma alternativa ao VAR, chamada 'desafio', foi testada na Copa do Mundo Feminina Sub-20, oferecendo soluções econômicas para análise de jogadas."
        },
        3: {
            title: "Corinthians, recebe vaquinha; para pagar a arena",
            description: "Representantes do Corinthians, da Caixa Econômica Federal e da torcida organizada Gaviões da Fiel se reuniram nesta segunda-feira na Central de Conciliação da Justiça Federal de São Paulo e assinaram acordo que viabiliza a vaquinha para pagar o financiamento da Neo Química Arena."
        },
        4: {
            title: "GM/Cadillac vai se tornar a 11ª equipe da Fórmula 1 em 2026",
            description: "A Fórmula 1 anunciou nesta segunda-feira (25) que a General Motors vai se tornar a 11ª equipe do grid da categoria a partir de 2026, sob o nome GM/Cadillac. Além de se tornar nova competidora na F1, a marca americana também será fornecedora de motores a partir da temporada de 2028. Antes disso, a nova concorrente vai usar motores Ferrari, de acordo com a agência de notícias Associated Press (AP)."
        },       
        5: {
            title: "Rayssa Leal e park masculino seguem no comando do Brasil em novo ciclo olímpico do skate",
            description: "O título de Rayssa Leal, na street league, em Tóquio, e o equilíbrio no mais alto nível entre os skatistas do park masculino, no STU, em São Paulo, mostram um caminho promissor do Brasil no início deste ciclo olímpico rumo a Los Angeles 2028."
        },
        6: {
            title: "Brasileiro é campeão em torneio de poker no cruzeiro do WPT e leva R$ 780 mil",
            description: "O Brasil, enfim, conseguiu um título no WPT Voyage, evento que acontece no cruzeiro do World Poker Tour. Nesta sexta-feira, Gregory Wonsttret foi campeão do WPT Prime Voyage e faturou US$ 155,4 mil (R$ 783,5 mil) em premiação. O torneio contou com 968 entradas. O Brasil tinha dois representantes na mesa final, e foi justamente Gregory Wonsttret quem eliminou o compatriota Gustavo Carmona em sétimo lugar, com premiação de US$ 24 mil (R$ 121 mil)."
        }
    };

    // adiciona evento aos botões "ver mais"
    document.querySelectorAll(".ver-mais").forEach(button => {
        button.addEventListener("click", () => {
            const id = button.getAttribute("data-noticia");
            modalTitle.textContent = noticias[id].title;
            modalDescription.textContent = noticias[id].description;

            modal.classList.add("visible");
            modalBackdrop.classList.add("active"); // mostra o fundo escuro
            document.body.style.overflow = "hidden"; // desabilita o scroll
        });
    });

    // Fecha o modal
    closeModal.addEventListener("click", closeModalFunction);
    modalBackdrop.addEventListener("click", closeModalFunction);

    function closeModalFunction() {
        modal.classList.remove("visible");
        modalBackdrop.classList.remove("active"); // Esconde o fundo escuro
        document.body.style.overflow = ""; // restaura o scroll
    }
    // fecha o modal clicando fora do conteúdo
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("visible");
            modal.classList.add("hidden");
            modalBackdrop.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
});


// adicionar noticia
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("adicionar-noticia-form");
    const loginReminder = document.getElementById("login-reminder");
    const isLoggedIn = checkUserLoggedIn(); // função falsa para verificar login

    // exibe o formulario
    if (!isLoggedIn) {
        form.classList.add("hidden");
        loginReminder.classList.remove("hidden");
    }

    // envio do formulario
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // coleta os dados do formulário
        const noticia = {
            nomeAdicionador: document.getElementById("nome-adicionador").value.trim(),
            titulo: document.getElementById("titulo-noticia").value.trim(),
            fonte: document.getElementById("fonte-noticia").value.trim(),
            tema: document.getElementById("tema-noticia").value.trim(),
            texto: document.getElementById("texto-noticia").value.trim(),
        };

        // simula o envio para um servidor
        console.log("Notícia enviada:", noticia);
        alert("Notícia adicionada com sucesso!");

        // redireciona para a pagina inicial ou limpa o formulário
        form.reset();
    });
});

// simulação da verificação de login
function checkUserLoggedIn() {
    return true; // alterar para 'true' para simular login ativo
}

document.addEventListener("DOMContentLoaded", () => {
    // função para carregar paginas dinamicamente com AJAX
    function loadPage(url, targetElement) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro ao carregar a página: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                // atualiza o conteúdo do alvo
                document.querySelector(targetElement).innerHTML = html;
            })
            .catch(error => {
                console.error("Erro ao carregar conteúdo:", error);
                document.querySelector(targetElement).innerHTML = `<p>Erro ao carregar a página. Tente novamente mais tarde.</p>`;
            });
    }

    // gerenciar cliques em links para evitar recarregar a página
    document.querySelectorAll("a[data-ajax]").forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const url = link.getAttribute("href");
            const target = link.getAttribute("data-target"); // local onde o conteúdo será carregado
            loadPage(url, target);
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const noticias = document.querySelectorAll(".noticia-card");

    noticias.forEach(noticia => {
        const textoElement = noticia.querySelector(".noticia-texto");
        const lerMaisBtn = noticia.querySelector(".ler-mais");

        // pega o texto completo do atributo data-completo
        const textoCompleto = textoElement.getAttribute("data-completo");

        if (textoCompleto && textoCompleto.length > 100) {
            // texto resumido com 100 caracteres
            const textoResumido = textoCompleto.slice(0, 100) + "...";

            // define o texto inicial como resumido
            textoElement.textContent = textoResumido;

            // evento de clique no botão "ler mais"
            lerMaisBtn.addEventListener("click", (e) => {
                e.preventDefault();

                if (lerMaisBtn.textContent === "Ler mais") {
                    textoElement.textContent = textoCompleto; // texto completo
                    lerMaisBtn.textContent = "Ler menos"; // altera o botão
                } else {
                    textoElement.textContent = textoResumido; // volta ao texto resumido
                    lerMaisBtn.textContent = "Ler mais"; // altera o botão
                }
            });
        } else {
            // esconde o botão "ler mais" caso o texto seja curto
            lerMaisBtn.style.display = "none";
        }
    });
});


