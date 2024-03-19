function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 15.397, lng: 0 },
    mapId: 'cd603ce1ed93935f',
    zoom: 2,
    maxZoom: 6,
    minZoom: 1.5,
    alt: 'ERROR - O MAPA NÃO CARREGOU',
  });

  const contentStringConstantinopla = '<div id="content">' +
  '<div id="siteNotice"></div>' +
  '<h1 id="firstHeading" class="firstHeading">Constatinopla</h1>' +
  '<div id="bodyContent">' +
  "<p><b>época: 410 á 500 D.C</b></p>" + 
  "<p><b>população: 400.000 á 500.000 habitantes</p>" + 
  "<p>Constantinopla, atual Istambul, foi a capital do Império Romano, do Império Bizantino, do Império Latino  e, após a tomada pelos turcos, do Império Otomano. Estrategicamente localizada entre o Corno de Ouro e o Mar de Mármara no ponto em que a Europa encontra a Ásia, a Constantinopla Bizantina havia sido a capital da Cristandade, sendo guardiã das relíquias mais sagradas da cristandade, como a Coroa de Espinhos e a Verdadeira Cruz., sucessora das antigas Grécia e Roma.Desde meados do século V até o início do XIII, Constantinopla era a maior e mais rica cidade da Europa. </p>" + 
  '<img src="https://c8.alamy.com/compes/2m9crn5/mapa-del-siglo-16th-de-bizancio-constantinopla-2m9crn5.jpg" alt="Descrição da Imagem">' +
  '</div>' +
  '</div>';

  const contentStringJiankang = '<div id="content">' +
    '<div id="siteNotice"></div>' +
    '<h1 id="firstHeading" class="firstHeading">Jiankang</h1>' +
    '<div id="bodyContent">' +
    "<p><b>época:  D.C</b></p>" +
    "<p>população: 500.000 habitantes</p>"+
    "<p>Jiankang, como era originalmente chamada, foi a principal capital do leste de Wu, por ser um importante centro comercial, cultural e intelectual e ter redes de canais  fluviais que conectavam a redes vizinhas. Tido grande destaque na dinastia Jin  e as dinastias do sul , incluindo  Chen. Suas paredes são ruínas existentes na moderna região municipal de Nanjing atualmente e seu nome foi mudado para Nanjing, pu “Capital do Sul” durante a dinastia Ming., com muitos estudiosos, artistas e escritores se reunindo lá. e se tornou a capital da China até a mudança para Pequim na Dinastia Ming. Hoje, Nanjing continua sendo uma cidade importante na China, com muitos marcos históricos e culturais que refletem sua rica história.</p>"+
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/The_Southern_Dynasties_map_of_Nanjing.jpg/300px-The_Southern_Dynasties_map_of_Nanjing.jpg"'
    '</div>' +
    '</div>';


    const contentStringLuoyang = '<div id="content">' +
    '<div id="siteNotice"></div>' +
    '<h1 id="firstHeading" class="firstHeading">Luoyang</h1>' +
    '<div id="bodyContent">' +
    "<p><b>época: 500 D.C</b></p>" +
    "<p><b>população: 500.000 habitantes</p>" + 
    "<p>A região de Luoyang já era considerada sagrada desde o final do período Neolítico. Fazendo confluência entre os rios Luo e Yi era, então, considerada o centro geográfico da China. E que é conhecida como o berço do kung fu moderno e hoje em dia Luoyang conta com 6,55 milhões de habitantes e possui alguns registros que mostram a existência de civilização por lá há mais de 2700 anos.</p>" + 
    '<img src="https://pacoteturismo.com/wp-content/uploads/2019/12/Luoyang-China.jpg" alt="Descrição da Imagem">' +
    '</div>' +
    '</div>';

    const infowindowConstantinopla = new google.maps.InfoWindow({
      content: contentStringConstantinopla,
      ariaLabel: "constantinopla",
    });

  const infowindowJiankang = new google.maps.InfoWindow({
    content: contentStringJiankang,
    ariaLabel: "jiankang",
  });

  const infowindowLuoyang = new google.maps.InfoWindow({
    content: contentStringLuoyang,
    ariaLabel: "Luoyang",
  });

  const markerConstantinopla = new google.maps.Marker({
    position: { lat: 41.03386175206011, lng: 28.913239085074792 },
    map,
    title: "Constantinopla"
  });

  const markerJiankang = new google.maps.Marker({
    position: { lat: 32.058347268065084, lng: 118.7966631189944 }, 
    map,
    title: "Jiankang (Nanjing)"
  });

  const markerLuoyang = new google.maps.Marker({
    position: { lat: 34.61184565895867, lng: 112.51261988833083 },
    map,
    title: "Luoyang"
  });

  markerConstantinopla.addListener("click", () => {
    infowindowConstantinopla.open({
      anchor: markerConstantinopla,
      map,
    });
  });

  markerJiankang.addListener("click", () => {
    infowindowJiankang.open({
      anchor: markerJiankang,
      map,
    });
  });

  markerLuoyang.addListener("click", () => {
    infowindowLuoyang.open({
      anchor: markerLuoyang,
      map,
    });
  });


  window.initMap = initMap;
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

