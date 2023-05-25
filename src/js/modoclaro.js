// Botão Alterar Tema

const botaotema = document.getElementById("tema")

const main = document.querySelector("main")

const mainimage = document.querySelector(".main-image")

tema.addEventListener("click", () => {
    main.classList.toggle("modo-claro");
    if (main.classList.contains("modo-claro")) {
    botaotema.src = "../images/sun.png";
    mainimage.src = "../images/main-image-claro.png";
} else {
    botaotema.src = "../images/moon.png";
    mainimage.src = "../images/main-image.png";
}
});
