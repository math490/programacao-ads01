// let inputNome = document.getElementById("nome").value;
// let inputNome2 = document.getElementById("nome");

// console.log("1ª Variável: " + inputNome);
// console.log("2ª Variável: " + inputNome2);
// inputNome2.value = "novo valor";
// inputNome2.style.backgroundColor = "red";

// // 1ª Forma de seleção de elementos DOM
// let nome1 = document.getElementById("nome");

// // 2ª Forma de seleção de elementos DOM
// let nome2 = document.querySelector('#nome');

// // 3ª Forma de seleção de elementos DOM
// let nome3 = nome;

// console.log(nome1.id, nome2.id, nome3.id)

const formulario = document.getElementById("form1");

formulario.onsubmit = function(event) {
    event.preventDefault();
    
    let nome = document.getElementById("nome");
    
    if (nome.value.lengh <= 5) {
        let span1 = document.getElementById("mens1");
        span1.innerHTML = "<p>O nome deve ter mais de 5 caracteres!</p>";
        span1.style.backgroundColor = "yellow";
        return false;
    };

    let serie = document.getElementById("serie")
    if (serie.value == "Selecione...") {
        serie.setCustomValidity("Selecione uma Série");
        serie.validity = false;
    } else {
        serie.setCustomValidity("");
        serie.validity = true;
    };

    return true;

};
