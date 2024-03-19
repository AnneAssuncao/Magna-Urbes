function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 15.397, lng: 0 },
      mapId: 'cd603ce1ed93935f',
      zoom: 2,
      maxZoom: 6,
      minZoom: 1.5,
      alt: 'ERROR - O MAPA NÃO CARREGOU',
    });
  
    const contentStringBagda = '<div id="content">' +
      '<div id="siteNotice"></div>' +
      '<h1 id="firstHeading" class="firstHeading">Bagdá</h1>' +
      '<div id="bodyContent">' +
      "<p><b>época: 935 a 1.000 D.C</b></p>" +
      "<p>população: 1,1 milhão/ 1,2 milhão</p>"+
      "<p>Bagdá é hoje em dia a capital do Iraque e da província homônima. Com uma população de 8 milhões de habitantes, é a maior cidade do país. A sua área metropolitana conta com cerca de 9 milhões de habitantes.[4] Bagdá também é a segunda maior cidade do Sudoeste Asiático, depois de Teerã. Situa-se no centro do país, às margens do rio Tigre, e sua história remonta pelo menos ao século VIII, com possíveis origens pré-islâmicas. Antigo centro do mundo islâmico, Bagdá atualmente está no centro de conflitos violentos, desde 2003, devido à Guerra do Iraque.</p>" +
      '<img src="https://media.istockphoto.com/id/839963324/pt/vetorial/baghdad-iraq-19th-century.jpg?s=612x612&w=0&k=20&c=P0REUAEAHTue3c2t2QAXgQXXgENV6QeHyV5MCzUUt7A=" alt="Descrição da Imagem">' +
      '</div>' +
      '</div>';
  
    const contentStringCordova = '<div id="content">' +
      '<div id="siteNotice"></div>' +
      '<h1 id="firstHeading" class="firstHeading">Córdova</h1>' +
      '<div id="bodyContent">' +
      "<p><b>época: 935 á 1.000 D.C</b></p>" +
      "<p>população: 350.000</p>"+
      "<p>Córdova é um município da província homónima, na comunidade autónoma da Andaluzia, na Espanha.</p>" +
      "<p>O povoado que viria a dar origem à cidade de Córdova ganhou importância no ano de 206 a.C., quando foi conquistado pelos romanos. A cidade se tornou, então, a capital da província da Hispânia Ulterior (posteriormente, Hispânia Bética). Moradores famosos da cidade nessa época foram Marco Aneu Sêneca, Séneca e Lucano.</p>" +
      '</div>' +
      '</div>';
  
    const contentStringKaifeng = '<div id="content">' +
      '<div id="siteNotice"></div>' +
      '<h1 id="firstHeading" class="firstHeading">Kaifeng</h1>' +
      '<div id="bodyContent">' +
      "<p><b>época: 1.000D.C</b></p>" +
      "<p>Kaifeng é uma cidade da República Popular da China localizada na província de Honã, às margens do Rio Amarelo.</p>" +
      "<p>Kai-feng é o atual nome de Daliang, que foi fundada em 364 a.C.. A cidade foi crescendo conforme a população chinesa se movia para o leste em busca de terras mais férteis. Durante a Dinastia Song (960-1279), chegou a possuir mais de 400,000 habitantes. Foi capital de diversas dinastias chinesas e tinha uma grande produção de porcelana, atraindo muitos imigrantes, inclusive judeus. Invasões de povos do norte e inúmeras inundações acarretaram o declínio da cidade, sendo que a mesma teve de ser reconstruída no final do século XIX, sem nunca mais, contudo, possuir a mesma importância de antes.</p>" +
      '<img src="URL_DA_IMAGEM_DO_MAPA_DE_KAIFENG" alt="Descrição da Imagem">' +
      '</div>' +
      '</div>';
  
    const infowindowBagda = new google.maps.InfoWindow({
      content: contentStringBagda,
      ariaLabel: "bagda",
    });
  
    const infowindowCordova = new google.maps.InfoWindow({
      content: contentStringCordova,
      ariaLabel: "cordova",
    });
  
    const infowindowKaifeng = new google.maps.InfoWindow({
      content: contentStringKaifeng,
      ariaLabel: "kaifeng",
    });
  
    const markerBagda = new google.maps.Marker({
      position: { lat: 33.31042962599009, lng: 44.368245057838095 },
      map,
      title: "Bagdá"
    });
  
    const markerCordova = new google.maps.Marker({
      position: { lat: 37.89817499375756, lng: -4.785688089679313 }, 
      map,
      title: "Córdova"
    });
  
    const markerKaifeng = new google.maps.Marker({
      position: { lat: 34.809290741215996, lng: 114.27495938801327 },
      map,
      title: "Kaifeng"
    });
  
    markerBagda.addListener("click", () => {
      infowindowBagda.open({
        anchor: markerBagda,
        map,
      });
    });
  
    markerCordova.addListener("click", () => {
      infowindowCordova.open({
        anchor: markerCordova,
        map,
      });
    });
  
    markerKaifeng.addListener("click", () => {
      infowindowKaifeng.open({
        anchor: markerKaifeng,
        map,
      });
    });
  
    window.initMap = initMap;
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }
  
  