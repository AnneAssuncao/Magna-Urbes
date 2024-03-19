function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 15.397, lng: 0 },
    mapId: 'cd603ce1ed93935f',
    zoom: 2,
    maxZoom: 6,
    minZoom: 1.5,
    alt: 'ERROR - O MAPA NÃO CARREGOU',
  });

  const contentStringBabilonia = '<div id="content">' +
    '<div id="siteNotice"></div>' +
    '<h1 id="firstHeading" class="firstHeading">Babilônia</h1>' +
    '<div id="bodyContent">' +
    "<p><b>época: 500 AC á 400 AC</b></p>"+
    "<p> população: 150.000/ 200.000 habitantes</p>" +
    "<p>É a cidade central da civilização babilónica, na Mesopotâmia. Situada nas margens do rio Eufrates, no Iraque e a 100 km a sul de Bagdade, que hoje em dia é a capital do Iraque e da província homônima. Hoje em dia conta com uma população de 8 milhões de habitantes, é a maior cidade do país.</p>" +
    "<p>O 1.º milénio a.C. foi marcado por períodos turbulentos, que se prolongaram nas guerras provocadas pelas tentativas de controlo da região pelos reis assírios.</p>" +
    '<img src="https://www.mozaweb.com/pt/mozaik3D/TOR/okor/babiloni_varosfal/960.jpg" alt="Descrição da Imagem">' +
    '</div>' +
    '</div>';

    const contentStringrajgir = '<div id="content">' +
    '<div id="siteNotice"></div>' +
    '<h1 id="firstHeading" class="firstHeading">Rajgir</h1>' +
    '<div id="bodyContent">' +
    "<p><b>época: 460 A.C</b></p>" + 
    "<p>Rajgir, que significa 'A Cidade dos Reis', é uma cidade histórica no distrito de Nalanda em Bihar, na Índia. Antiga sede e capital de várias dinastias. A cidade também é notável no jainismo e no budismo, tanto Mahavira quanto Buda ensinaram suas crenças, se tornando um dos locais de pregação mais importantes do Buda.De grande santidade e significado para os budistas. O Gridhakuta Hill, em Rajgir, que é o que mostra a foto abaixo, foi o lugar onde Buda deixou muitos sermões. Ali que os ensinamentos de Buda foram recordados e escritos pela primeira vez.</p>" + 
    '<img src="https://viajarparaindiablog.files.wordpress.com/2015/03/gridhakutarajgir2.jpg" alt="Descrição da Imagem">' +
    '</div>' +
    '</div>';
     const contentStringLinzi = '<div id="content">' +
    '<div id="siteNotice"></div>' +
    '<h1 id="firstHeading" class="firstHeading">Linzi</h1>' +
    '<div id="bodyContent">' +
    "<p><b>população: 200.000 habitantes</p>" + 
    "<p>Linzi, originalmente chamada de Yingqiu, foi a capital do antigo estado chinês de Chi durante a dinastia Zhou. A cidade foi uma das maiores e mais ricas da China durante o período de primavera e outono.</p>" + 
    '<img src=" https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Linzi_model_2010_06_06.jpg/1024px-Linzi_model_2010_06_06.jpg" alt="Descrição da Imagem">' +
    '</div>' +
    '</div>';

  const contentStringLuoyi = '<div id="content">' +
    '<div id="siteNotice"></div>' +
    '<h1 id="firstHeading" class="firstHeading">Luoyi</h1>' +
    '<div id="bodyContent">' +
    "<p><b>população: 200.000 habitantes</p>" + 
    "<p>A região de Luoyang já era considerada sagrada desde o final do período Neolítico. Fazendo confluência entre os rios Luo e Yi era, então, considerada o centro geográfico da China. E que é conhecida como o berço do kung fu moderno e hoje em dia Luoyang conta com 6,55 milhões de habitantes e possui alguns registros que mostram a existência de civilização por lá há mais de 2700 anos.</p>" + 
    '<img src="https://pacoteturismo.com/wp-content/uploads/2019/12/Luoyang-China.jpg" alt="Descrição da Imagem">' +
    '</div>' +
    '</div>';


  const infowindowBabilonia = new google.maps.InfoWindow({
    content: contentStringBabilonia,
    ariaLabel: "babilonia",
  });

  const infowindowRajgir = new google.maps.InfoWindow({
    content: contentStringrajgir,
    ariaLabel: "rajgir",
  });
  const infowindowLinzi = new google.maps.InfoWindow({
    content: contentStringLinzi,
    ariaLabel: "Linzi",
  });

  const infowindowLuoyi = new google.maps.InfoWindow({
    content: contentStringLuoyi,
    ariaLabel: "Luoyi",
  });


  const markerBabilonia = new google.maps.Marker({
    position: { lat: 32.5964899014241, lng: 44.67449646584608 },
    map,
    title: "Babilônia"
  });

  const markerRajgir = new google.maps.Marker({
    position: { lat: 25.123108681038293, lng: 85.45858515806016 }, // Preencha com as coordenadas da CidadeX
    map,
    title: "Rajgir"
  });
  const markerLinzi = new google.maps.Marker({
    position: { lat: 36.85792328528489, lng: 118.2904938588427 },
    map,
    title: "Linzi"
  });

  const markerLuoyi = new google.maps.Marker({
    position: { lat: 34.61184565895867, lng: 112.51261988833083 },
    map,
    title: "Luoyi"
  });


  markerBabilonia.addListener("click", () => {
    infowindowBabilonia.open({
      anchor: markerBabilonia,
      map,
    });
  });

  markerRajgir.addListener("click", () => {
    infowindowRajgir.open({
      anchor: markerRajgir,
      map,
    });
  });
  markerLinzi.addListener("click", () => {
    infowindowLinzi.open({
      anchor: markerLinzi,
      map,
    });
  });

  markerLuoyi.addListener("click", () => {
    infowindowLuoyi.open({
      anchor: markerLuoyi,
      map,
    });
  });


  window.initMap = initMap;
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
}