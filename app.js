function pesquisar() {
  // Função para pesquisar dados e exibir os resultados na seção com id "resultados-pesquisa"
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //se o campoPesquisa for uma string sem nada
    if(!campoPesquisa){
        section.innerHTML = "<p>Você precisa digitar o atleta ou esporte!</p>"
return
    }

campoPesquisa = campoPesquisa.toLowerCase()

   // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";

  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    //se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
        // cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
    }
        
  }

if(!resultados ) {
resultados = "<p>Nada foi encontrado</p>"
}

  // Atribui a string com os resultados ao conteúdo da seção
  section.innerHTML = resultados;
}