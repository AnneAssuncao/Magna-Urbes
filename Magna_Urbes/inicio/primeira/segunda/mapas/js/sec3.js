function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 15.397, lng: 0 },
    mapId: 'cd603ce1ed93935f',
    zoom: 2,
    maxZoom: 6,
    minZoom: 1.5,
    alt: 'ERROR - O MAPA NÃO CARREGOU',
  });

  const contentStringPataliputra = '<div id="content">' +
    '<div id="siteNotice"></div>' +
    '<h1 id="firstHeading" class="firstHeading">Pataliputra</h1>' +
    '<div id="bodyContent">' +
    "<p><b>época: 300 AC á 200AC</b></p>" +
    "<p><b>população: 350.000 habitantes</b></p>" +
    "<p>Pataliputra, atual Patna, era uma cidade na Índia antiga. Sua boa localização levou governantes de sucessivas dinastias a basear sua capital administrativa aqui, desde os Nandas, Mauryans, Shungas e Guptas até Palas. Foi uma das primeiras cidades do mundo a ter uma forma altamente eficiente de autogoverno local. Era um grande centro comercial, atraindo mercadores e intelectuais de toda a Índia. Foi palco de dois importantes conselhos budistas e também era um próspero centro budista, com vários mosteiros importantes. A cidade era cercada por uma parede de madeira perfurada com aberturas através das quais as flechas podiam ser disparadas e tinha 64 portões. O palácio Pataliputra mostrava influências de artesãos empregados da Pérsia.</p>" +
    '<img src="https://pbs.twimg.com/media/FAoemkHXEBEUPTN?format=jpg&name=small" ' +
    '</div>' +
    '</div>';
  const contentStringCartago = '<div id="content">' +
    '<div id="siteNotice"></div>' +
    '<h1 id="firstHeading" class="firstHeading">Cartago</h1>' +
    '<div id="bodyContent">' +
    "<p><b>época: 300 AC</b></p>" +
    "<p><b>população: 500.000 á 700.000 habitantes</b></p>" +
    "<p>Cartago ficava no lado oriental do Lago de Túnis, no que hoje é a Tunísia. Foi um dos centros comerciais mais importantes naquele território e uma das cidades mais ricas do mundo clássico. A cidade se encontrava no meio das rotas comerciais do Mediterrâneo e evoluiu de uma colônia fenícia cananeia para a capital de um império púnico que dominou grandes partes do sudoeste do Mediterrâneo durante o primeiro milênio aC. Entre os séculos V e III a.C. envolveu-se em frequentes guerras com a Grécia e a Sicília. Foi nesta última que Cartago teve seu primeiro choque com Roma, e as três Guerras Púnicas acabaram com a destruição da cidade em 146 a.C.</p>" +
    '<img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Carthage_National_Museum_representation_of_city.jpg" ' +
    '</div>' +
    '</div>';

  const infowindowPataliputra = new google.maps.InfoWindow({
    content: contentStringPataliputra,
    ariaLabel: "pataliputra",
  });
  const infowindowCartago = new google.maps.InfoWindow({
    content: contentStringCartago,
    ariaLabel: "Cartago",
  });

  const markerPataliputra = new google.maps.Marker({
    position: { lat: 25.595010407784716, lng: 85.11866233384033 },
    map,
    title: "Pataliputra"
  });
  const markerCartago = new google.maps.Marker({
    position: { lat: 36.864012313816865, lng: 10.32510142699839 },
    map,
    title: "Cartago"
  });

  markerPataliputra.addListener("click", () => {
    infowindowPataliputra.open({
      anchor: markerPataliputra,
      map,
    });
  });
  markerCartago.addListener("click", () => {
    infowindowCartago.open({
      anchor: markerCartago,
      map,
    });
  });

  window.initMap = initMap;
}
