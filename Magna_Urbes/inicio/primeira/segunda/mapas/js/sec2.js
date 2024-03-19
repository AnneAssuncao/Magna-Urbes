function initMap() {
  const mapOptions = {
    center: { lat: 15.397, lng: 0 },
    mapId: 'cd603ce1ed93935f',
    zoom: 2,
    maxZoom: 6,
    minZoom: 1.5,
    alt: 'ERROR - O MAPA NÃO CARREGOU',
  };

  const map = new google.maps.Map(document.getElementById("map"), mapOptions);

  const contentStringAlexandria = '<div id="content">' +
    '<div id="siteNotice"></div>' +
    '<h1 id="firstHeading" class="firstHeading">Alexandria</h1>' +
    '<div id="bodyContent">' +
    "<p><b>época: AC</b></p>"+
    "<p> população: 300.000 habitantes</p>" +
    "<p>Alexandria é uma cidade do Egito, sendo atualmente a segunda mais populosa do país, com uma população de cerca de 5,2 milhões de habitantes. É o local onde fica a famosa Biblioteca de Alexandria, o farol de alexandria, (uma das sete maravilhas do mundo antigo), </p>" +
    "<p>as catacumbas de Kom el Shoqafa (uma das sete maravilhas do mundo medieval)e onde prosperou a escola de Alexandria .Nos tempos antigos, Alexandria foi uma das cidades mais importantes do mundo. </p>" +
    "<p>Foi fundada em torno de um pequeno vilarejo em 331 a.C. por Alexandre, o Grande. Permaneceu como capital do Egito durante mil anos, até à conquista muçulmana do Egito.</p>" +
    '<img src="https://www.guiageografico.com/egito/alexandria/imagens/alexandria-antiga.jpg" alt="Descrição da Imagem">' +
    '</div>' +
    '</div>';

  const contentXiadu = '<div id="content">' +
    '<div id="siteNotice"></div>' +
    '<h1 id="firstHeading" class="firstHeading">Xiadu</h1>' +
    '<div id="bodyContent">' +
    "<p><b>época: 400 A.C</b></p>" + 
    "<p>Xiadu é uma das cidades importantes no estado de Yan, na China, que se tornou a capital do reino em 311. Prosperando na época das Primaveras e Outonos e  Estados Combatentes. Era dividida em bairros, contendo palácios, laboratórios, área residencial, cemitérios e rios,estruturas para ritos religiosos, fundições para produzir bronze e ferro e uma casa da moeda, oficinas de materiais cerâmicos e armas.</p>" + 
    "<p> A estrutura urbana rectangular sugere que a cidade foi cuidadosamente planeada.Os pesquisadores acreditam que, assim como ocorria com as outras cidades chinesas da época, o mercado de Xiadu era controlado pelo estado.</p>" + 
    '<img src="https://socientifica.com.br/wp-content/uploads/2022/10/image-57.png.webpg" alt="Descrição da Imagem">' +
    '</div>' +
    '</div>';

  const infowindowAlexandria = new google.maps.InfoWindow({
    content: contentStringAlexandria,
    ariaLabel: "alexandria",
  });

  const infowindowXiadu = new google.maps.InfoWindow({
    content: contentXiadu,
    ariaLabel: "xiadu",
  });

  const markerAlexandria = new google.maps.Marker({
    position: { lat: 31.225179720701057, lng: 29.96928752008863 },
    map,
    title: "Alexandria"
  });

  const markerXiadu = new google.maps.Marker({
    position: { lat: 39.616908, lng: 116.056 }, 
    map,
    title: "Xiadu"
  });

  markerAlexandria.addListener("click", () => {
    infowindowAlexandria.open({
      anchor: markerAlexandria,
      map,
    });
  });

  markerXiadu.addListener("click", () => {
    infowindowXiadu.open({
      anchor: markerXiadu,
      map,
    });
  });

  window.initMap = initMap;
}
