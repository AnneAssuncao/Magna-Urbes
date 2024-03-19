function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 15.397, lng: 0 },
      mapId: 'cd603ce1ed93935f',
      zoom: 2,
      maxZoom: 6,
      minZoom: 1.5,
      alt: 'ERROR - O MAPA NÃO CARREGOU',
    });
  
    const contentStringHangzhou = '<div id="content">' +
      '<div id="siteNotice"></div>' +
      '<h1 id="firstHeading" class="firstHeading">Hangzhou</h1>' +
      '<div id="bodyContent">' +
      "<p>época: 1.210 á 1.300D.C</p>"+
      "<p>população: 260.000 á 1.500.000 habitantes</p>"+
      "<p>Hangzhou é uma cidade da República Popular da China, capital da província de Chequião, atualmente. É um porto no rio Fushun, perto de Xangai. A atual cidade de Hangzhou, foi durante 149 anos a capital da dinastia Song do Sul .Tem cerca de 6,3 milhões de habitantes. É um centro ferroviário, industrial e turístico importante. Foi fundada em 606 sendo capital de vários reinos até a conquista mongol em 1276. Foi reconstruída, retomando a sua prosperidade e atraindo numerosos estrangeiros: árabes, persas e cristãos.Foi quase destruída em 1861 pela rebelião Taiping. A chegada da estrada de ferro em 1909 trouxe-lhe nova prosperidade. Foi ocupada pelo Japão de 1937 a 1945.</p>" +
      '<img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/83/08/74/in-front-of-yue-fei-mausoleum.jpg?w=500&h=400&s=1">' +
      '</div>' +
      '</div>';

    

      const infowindowHangzhou = new google.maps.InfoWindow({
        content: contentStringHangzhou,
        ariaLabel: "hangzhou",
      });

      const markerHangzhou = new google.maps.Marker({
        position: { lat: 30.2734316563498, lng: 120.13612222401399 },
        map,
        title: "Hangzhou"
      });
  
      markerHangzhou.addListener("click", () => {
        infowindowHangzhou.open({
          anchor: markerHangzhou,
          map,
        });
      });
  
    window.initMap = initMap;
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }
  
  