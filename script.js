function mostrarCuriosidade(inseto) {

const elemento = document.getElementById(inseto);

const curiosidades = {

    borboleta:
        "As asas das borboletas são cobertas por milhares de pequenas escamas que ajudam a criar seus incríveis padrões de cores.",

    besouro:
        "Alguns besouros possuem uma aparência metálica causada pela maneira como sua estrutura corporal reflete a luz.",

    joaninha:
        "As cores fortes de muitas joaninhas podem funcionar como um aviso para predadores de que elas não são uma refeição agradável.",

    mariposa:
        "Existem mariposas com padrões que lembram olhos, folhas e até cascas de árvores, ajudando-as a se esconder no ambiente."
};

if (elemento.style.display === "block") {

    elemento.style.display = "none";

} else {

    elemento.textContent = curiosidades[inseto];

    elemento.style.display = "block";
}


}