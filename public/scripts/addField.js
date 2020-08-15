// Procurar o botão
document.querySelector("#add-time")
.addEventListener('click', cloneField)
// Quando achar o botão

// Executar uma ação
function cloneField() {
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)  // Duplicar os campos. Qual campo?
    const fields = newFieldContainer.querySelectorAll("input")//Limpar os campos. Que campos?
    fields.forEach(function(field){
        field.value = ""
    })//para cada campo, limpar.
    document.querySelector("#schedule-items").appendChild(newFieldContainer)// Colocar na página. Em qual lugar da página?
}
