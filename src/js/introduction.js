// Menu Principal

const buttonrpg = document.querySelector(".rpgbutton");

const buttonworld = document.querySelector(".worldbutton");

const buttonsystem = document.querySelector(".systembutton");

const rpg = document.querySelector(".rpg");

const world = document.querySelector(".world");

const system = document.querySelector(".system");

buttonrpg.addEventListener("click", () => {
    rpg.style.display = "block";
    world.style.display = "none";
    system.style.display = "none";
});

buttonworld.addEventListener("click", () => {
    rpg.style.display = "none";
    world.style.display = "block";
    system.style.display = "none";
});

buttonsystem.addEventListener("click", () => {
    rpg.style.display = "none";
    world.style.display = "none";
    system.style.display = "block";
});

// World Menu

const feiticeiros = document.querySelector(".feiticeiros");

const maldicoes = document.querySelector(".maldicoes");

const energia = document.querySelector(".energia");

const tecnicas = document.querySelector(".tecnicas");

const feiticeiroscontent = document.querySelector(".feiticeiroscontent");

const maldicoescontent = document.querySelector(".maldicoescontent");

const energiacontent = document.querySelector(".energiacontent");

const tecnicascontent = document.querySelector(".tecnicascontent");

feiticeiros.addEventListener("click", () => {
    if (feiticeiroscontent.style.display === "block") {
    feiticeiroscontent.style.display = "none";
    maldicoes.style.display = "block";
    energia.style.display = "block";
    tecnicas.style.display = "block";
    } else {
        feiticeiroscontent.style.display = "block";
        maldicoes.style.display = "none";
        energia.style.display = "none";
        tecnicas.style.display = "none";
    }
});

maldicoes.addEventListener("click", () => {
    if (maldicoescontent.style.display === "block") {
    maldicoescontent.style.display = "none";
    feiticeiros.style.display = "block";
    energia.style.display = "block";
    tecnicas.style.display = "block";
    } else {
        maldicoescontent.style.display = "block";
        feiticeiros.style.display = "none";
        energia.style.display = "none";
        tecnicas.style.display = "none";
    }
});

energia.addEventListener("click", () => {
    if (energiacontent.style.display === "block") {
    energiacontent.style.display = "none";
    maldicoes.style.display = "block";
    feiticeiros.style.display = "block";
    tecnicas.style.display = "block";
    } else {
        energiacontent.style.display = "block";
        maldicoes.style.display = "none";
        feiticeiros.style.display = "none";
        tecnicas.style.display = "none";
    }
});

tecnicas.addEventListener("click", () => {
    if (tecnicascontent.style.display === "block") {
    tecnicascontent.style.display = "none";
    maldicoes.style.display = "block";
    feiticeiros.style.display = "block";
    energia.style.display = "block";
    } else {
        tecnicascontent.style.display = "block";
        maldicoes.style.display = "none";
        feiticeiros.style.display = "none";
        energia.style.display = "none";
    }
});

// Menu Perícias

// Botões Perícias

const acrobacia = document.querySelector(".acrobacia");

const astucia = document.querySelector(".astucia");

const atletismo = document.querySelector(".atletismo");

const enganacao = document.querySelector(".enganacao");

const feiticaria = document.querySelector(".feiticaria");

const fortitude = document.querySelector(".fortitude");

const furtividade = document.querySelector(".furtividade");

const historia = document.querySelector(".historia");

const integridade = document.querySelector(".integridade");

const intimidacao = document.querySelector(".intimidacao");

const intuicao = document.querySelector(".intuicao");

const investigacao = document.querySelector(".investigacao");

const luta = document.querySelector(".luta");

const medicina = document.querySelector(".medicina");

const ocultismo = document.querySelector(".ocultismo");

const oficio = document.querySelector(".oficio");

const percepcao = document.querySelector(".percepcao");

const performance = document.querySelector(".performance");

const persuasao = document.querySelector(".persuasao");

const pontaria = document.querySelector(".pontaria");

const prestidigitacao = document.querySelector(".prestidigitacao");

const reflexos = document.querySelector(".reflexos");

const religiao = document.querySelector(".religiao");

const vontade = document.querySelector(".vontade");

// Conteúdo das Perícias

const acrobaciac = document.querySelector(".acrobaciac");

const astuciac = document.querySelector(".astuciac");

const atletismoc = document.querySelector(".atletismoc");

const enganacaoc = document.querySelector(".enganacaoc");

const feiticariac = document.querySelector(".feiticariac");

const fortitudec = document.querySelector(".fortitudec");

const furtividadec = document.querySelector(".furtividadec");

const historiac = document.querySelector(".historiac");

const integridadec = document.querySelector(".integridadec");

const intimidacaoc = document.querySelector(".intimidacaoc");

const intuicaoc = document.querySelector(".intuicaoc");

const investigacaoc = document.querySelector(".investigacaoc");

const lutac = document.querySelector(".lutac");

const medicinac = document.querySelector(".medicinac");

const ocultismoc = document.querySelector(".ocultismoc");

const oficioc = document.querySelector(".oficioc");

const percepcaoc = document.querySelector(".percepcaoc");

const performancec = document.querySelector(".performancec");

const persuasaoc = document.querySelector(".persuasaoc");

const pontariac = document.querySelector(".pontariac");

const prestidigitacaoc = document.querySelector(".prestidigitacaoc");

const reflexosc = document.querySelector(".reflexosc");

const religiaoc = document.querySelector(".religiaoc");

const vontadec = document.querySelector(".vontadec");

// Variáveis pra Função

var explicacaoativa = acrobaciac;

var botaoativo = acrobacia;

// Função

function ativarbotao(botao, conteudo) {
    botaoativo.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    botao.style.backgroundColor = "rgb(87, 18, 19)";
    botaoativo = botao;
    explicacaoativa.style.display = "none";
    conteudo.style.display = "block";
    explicacaoativa = conteudo;
};

// Botões

acrobacia.addEventListener("click", () => {
    ativarbotao(acrobacia, acrobaciac);
});

astucia.addEventListener("click", () => {
    ativarbotao(astucia, astuciac);
});

atletismo.addEventListener("click", () => {
    ativarbotao(atletismo, atletismoc);
});

enganacao.addEventListener("click", () => {
    ativarbotao(enganacao, enganacaoc);
});

feiticaria.addEventListener("click", () => {
    ativarbotao(feiticaria, feiticariac);
});

fortitude.addEventListener("click", () => {
    ativarbotao(fortitude, fortitudec);
});

furtividade.addEventListener("click", () => {
    ativarbotao(furtividade, furtividadec);
});

historia.addEventListener("click", () => {
    ativarbotao(historia, historiac);
});

integridade.addEventListener("click", () => {
    ativarbotao(integridade, integridadec);
});

intimidacao.addEventListener("click", () => {
    ativarbotao(intimidacao, intimidacaoc);
});

intuicao.addEventListener("click", () => {
    ativarbotao(intuicao, intuicaoc);
});

investigacao.addEventListener("click", () => {
    ativarbotao(investigacao, investigacaoc);
});

luta.addEventListener("click", () => {
    ativarbotao(luta, lutac);
});

medicina.addEventListener("click", () => {
    ativarbotao(medicina, medicinac);
});

ocultismo.addEventListener("click", () => {
    ativarbotao(ocultismo, ocultismoc);
});

oficio.addEventListener("click", () => {
    ativarbotao(oficio, oficioc);
});

percepcao.addEventListener("click", () => {
    ativarbotao(percepcao, percepcaoc);
});

performance.addEventListener("click", () => {
    ativarbotao(performance, performancec);
});

persuasao.addEventListener("click", () => {
    ativarbotao(persuasao, persuasaoc);
});

pontaria.addEventListener("click", () => {
    ativarbotao(pontaria, pontariac);
});

prestidigitacao.addEventListener("click", () => {
    ativarbotao(prestidigitacao, prestidigitacaoc);
});

reflexos.addEventListener("click", () => {
    ativarbotao(reflexos, reflexosc);
});

religiao.addEventListener("click", () => {
    ativarbotao(religiao, religiaoc);
});

vontade.addEventListener("click", () => {
    ativarbotao(vontade, vontadec);
});
