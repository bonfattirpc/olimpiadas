let dados = [
  {
    titulo: "Rayssa Leal",
    descricao: "a Fadinha, é uma skatista brasileira que conquistou o mundo com seu talento e carisma. Aos poucos anos, ela já coleciona títulos e inspira milhões de jovens.",
    link: "https://pt.wikipedia.org/wiki/Rayssa_Leal",
    tags: "skate fada sk8"
  },
  {
    titulo: "Beatriz Sousa",
    descricao: "Judoca brasileira, conhecida por sua técnica e força. Representou o Brasil em diversas competições internacionais e conquistou medalhas importantes.",
    link: "https://pt.wikipedia.org/wiki/Beatriz_Souza",
    tags: "judô técnica força"
  },
  {
    titulo: "Rebeca Andrade",
    descricao: "Ginasta brasileira, campeã olímpica e mundial. Sua versatilidade e determinação a tornaram um ícone do esporte brasileiro.",
    link: "https://pt.wikipedia.org/wiki/Rebeca_Andrade",
    tags: "ginástica campeã versatilidade"
  },
  {
    titulo: "Arthur Zanetti",
    descricao: "Ginasta brasileiro, campeão olímpico nas argolas. Conhecido por sua força e precisão.",
    link: "https://pt.wikipedia.org/wiki/Arthur_Zanetti",
    tags: "ginástica argolas força"
  },
  {
    titulo: "Thiago Braz",
    descricao: "Atleta do salto com vara, campeão olímpico. Quebrou o recorde olímpico nos Jogos do Rio 2016.",
    link: "https://pt.wikipedia.org/wiki/Thiago_Braz",
    tags: "salto com vara campeão recorde"
  },
  {
    titulo: "Mayra Aguiar",
    descricao: "Judoca brasileira, medalhista olímpica. Reconhecida por sua técnica e determinação.",
    link: "https://pt.wikipedia.org/wiki/Mayra_Aguiar",
    tags: "judô medalhista técnica"
  },
  {
    titulo: "Isaquias Queiroz",
    descricao: "Canoísta brasileiro, múltiplo medalhista olímpico. Conhecido por sua força e resistência.",
    link: "https://pt.wikipedia.org/wiki/Isaquias_Queiroz",
    tags: "canoagem medalhista força"
  },
  {
    titulo: "Martine Grael",
    descricao: "Velejadora brasileira, campeã olímpica. Filha do também velejador Torben Grael.",
    link: "https://pt.wikipedia.org/wiki/Martine_Grael",
    tags: "vela campeã olímpica"
  },
  {
    titulo: "Kahena Kunze",
    descricao: "Velejadora brasileira, campeã olímpica ao lado de Martine Grael.",
    link: "https://pt.wikipedia.org/wiki/Kahena_Kunze",
    tags: "vela campeã olímpica"
  },
  {
    titulo: "Alison dos Santos",
    descricao: "Atleta dos 400m com barreiras, medalhista olímpico. Conhecido por sua velocidade e técnica.",
    link: "https://pt.wikipedia.org/wiki/Alison_dos_Santos",
    tags: "atletismo 400m barreiras velocidade"
  },
  {
    titulo: "Ana Marcela Cunha",
    descricao: "Nadadora de maratona aquática, campeã olímpica. Reconhecida por sua resistência e estratégia.",
    link: "https://pt.wikipedia.org/wiki/Ana_Marcela_Cunha",
    tags: "natação maratona aquática resistência"
  },
  {
    titulo: "Bruno Fratus",
    descricao: "Nadador brasileiro, medalhista olímpico nos 50m livre. Conhecido por sua velocidade.",
    link: "https://pt.wikipedia.org/wiki/Bruno_Fratus",
    tags: "natação 50m livre velocidade"
  },
  {
    titulo: "Fernando Scheffer",
    descricao: "Nadador brasileiro, medalhista olímpico nos 200m livre. Reconhecido por sua técnica e velocidade.",
    link: "https://pt.wikipedia.org/wiki/Fernando_Scheffer",
    tags: "natação 200m livre técnica"
  },
  {
    titulo: "Daniel Dias",
    descricao: "Nadador paralímpico brasileiro, múltiplo medalhista. Reconhecido por sua determinação e conquistas.",
    link: "https://pt.wikipedia.org/wiki/Daniel_Dias",
    tags: "natação paralímpica medalhista"
  },
  {
    titulo: "Poliana Okimoto",
    descricao: "Nadadora de maratona aquática, medalhista olímpica. Conhecida por sua resistência e estratégia.",
    link: "https://pt.wikipedia.org/wiki/Poliana_Okimoto",
    tags: "natação maratona aquática medalhista"
  },
  {
    titulo: "Robert Scheidt",
    descricao: "Velejador brasileiro, múltiplo medalhista olímpico. Reconhecido por sua técnica e experiência.",
    link: "https://pt.wikipedia.org/wiki/Robert_Scheidt",
    tags: "vela medalhista técnica"
  },
  {
    titulo: "Adhemar Ferreira da Silva",
    descricao: "Atleta do salto triplo, bicampeão olímpico. Reconhecido por suas conquistas históricas.",
    link: "https://pt.wikipedia.org/wiki/Adhemar_Ferreira_da_Silva",
    tags: "salto triplo bicampeão histórico"
  },
  {
    titulo: "Vanderlei Cordeiro de Lima",
    descricao: "Maratonista brasileiro, medalhista olímpico. Conhecido por sua resistência e espírito esportivo.",
    link: "https://pt.wikipedia.org/wiki/Vanderlei_Cordeiro_de_Lima",
    tags: "maratona medalhista resistência"
  },
  {
    titulo: "Maurren Maggi",
    descricao: "Atleta do salto em distância, campeã olímpica. Reconhecida por sua técnica e conquistas.",
    link: "https://pt.wikipedia.org/wiki/Maurren_Maggi",
    tags: "salto em distância campeã técnica"
  },
  {
    titulo: "Joaquim Cruz",
    descricao: "Atleta dos 800m, campeão olímpico. Conhecido por sua velocidade e estratégia.",
    link: "https://pt.wikipedia.org/wiki/Joaquim_Cruz",
    tags: "atletismo 800m campeão"
  },
  {
    titulo: "Torben Grael",
    descricao: "Velejador brasileiro, múltiplo medalhista olímpico. Reconhecido por sua técnica e experiência.",
    link: "https://pt.wikipedia.org/wiki/Torben_Grael",
    tags: "vela medalhista técnica"
  },
  {
    titulo: "Serginho",
    descricao: "Jogador de vôlei, bicampeão olímpico. Conhecido por sua defesa e liderança.",
    link: "https://pt.wikipedia.org/wiki/Serginho_(v%C3%B4lei)",
    tags: "vôlei defesa liderança"
  },
  {
    titulo: "Gustavo Borges",
    descricao: "Nadador brasileiro, múltiplo medalhista olímpico. Reconhecido por sua técnica e conquistas.",
    link: "https://pt.wikipedia.org/wiki/Gustavo_Borges",
    tags: "natação medalhista técnica"
  }
];
