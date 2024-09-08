function Pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();
        // se campoPesquisa for uma string sem nada
        if (campoPesquisa=="") {
            section.innerHTML = "<p> Nada foi encontrado</p>"
            return
        }
        campoPesquisa=campoPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo="";
    let descricao = "";
    let tags="";
    // Itera sobre cada dado na lista de resultados
    for (let dado of dados) {
        titulo=dado.titulo.toLowerCase()
        descricao=dado.descricao.toLowerCase()
        tags=dado.tags.toLowerCase()

        //se titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)||tags.includes(campoPesquisa))
            
           //cria um novo elemento 
            resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a> </h2>
            <p class="descricao-meta">${dado.descricao}.</p> <a href="${dado.link}" target="_blank">mais informações</a> </div>
    `;
if(!resultados){
    resultados="Nada foi encontrado :( essa palavra não está na nossa base "

}

}
section.innerHTML = resultados;
}
                //

       
    



