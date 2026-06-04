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
const nome = document.getElementById("nome");
const span1 = document.getElementById("mens1");
const serie = document.querySelector("#serie");
const turnos = document.getElementsByName("turno");
const enviar = document.getElementById("enviar")
const ativs = Array.from(document.getElementsByClassName("w3-checkbox"))

formulario.onsubmit = function(event) {
    event.preventDefault();
    
    if (nome.value.length <= 5) {
        span1.innerHTML = "O nome deve ter mais de 5 caracteres!";
        span1.style.backgroundColor = "red";
        return false;
    };

    if (serie.value == "Selecione...") {
        serie.setCustomValidity("Selecione uma Série");
        serie.validity = false;
    } else {
        serie.setCustomValidity("");
        serie.validity = true;
    };

    turno_selecionado = false;
    for(let i = 0; i < turnos.length; i++){
        if(turnos[i].checked){
            turno_selecionado = true;
        }
    }
    if(turno_selecionado == false){
        return false;
    }

    let atividades = "";
    ativs.forEach(element => {
        if(element.checked){
            if(atividades !== ""){
                atividades += ", " + element.name;
            }else {
                atividades += element.name;
            }
        }
    });

    return true;

};
