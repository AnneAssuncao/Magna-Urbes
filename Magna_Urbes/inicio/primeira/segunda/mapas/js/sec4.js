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
    "<p><b>época: AC</b></p>" +
    "<p><b>população: 300.000 á 600.000 habitantes</b></p>" +
    "<p>Pataliputra, atual Patna, era uma cidade na Índia antiga. Sua boa localização levou governantes de sucessivas dinastias a basear sua capital administrativa aqui, desde os Nandas, Mauryans, Shungas e Guptas até Palas. Foi uma das primeiras cidades do mundo a ter uma forma altamente eficiente de autogoverno local. Era um grande centro comercial, atraindo mercadores e intelectuais de toda a Índia. Foi palco de dois importantes conselhos budistas e também era um próspero centro budista, com vários mosteiros importantes. A cidade era cercada por uma parede de madeira perfurada com aberturas através das quais as flechas podiam ser disparadas e tinha 64 portões. O palácio Pataliputra mostrava influências de artesãos empregados da Pérsia.</p>" +
    '<img src="https://pbs.twimg.com/media/FAoemkHXEBEUPTN?format=jpg&name=small" ' +
    '</div>' +
    '</div>';
  
      const contentStringAlexandria = '<div id="content">' +
      '<div id="siteNotice"></div>' +
      '<h1 id="firstHeading" class="firstHeading">Alexandria</h1>' +
      '<div id="bodyContent">' +
      "<p><b>época: 200 A.C</b></p>" + 
      "<p><b>população: 300.000 á 600.000 habitantes habitantes</b></p>" +
      "<p>Alexandria era um centro urbano que deu origem ao reino egípcio dos Ptolomeus. Foi fundada em 332 a.C. pelo macedônio Alexandre Magno e em pouco tempo se tornou uma das maiores cidades do mundo grego.A cidade foi a principal base marítima do Mediterrâneo, pois abrigava grandes embarcações e permitia que a cidade exportasse sua produção para todo o país. Tornou-se capital do Egito e nela foi construído grandes palácios, instituições públicas, museus, bibliotecas e templos.</p>" + 
      '<img src="https://www.guiageografico.com/egito/alexandria/imagens/alexandria-antiga.jpg" alt="Descrição da Imagem">' +
      '</div>' +
      '</div>';
       const contentStringXian = '<div id="content">' +
      '<div id="siteNotice"></div>' +
      '<h1 id="firstHeading" class="firstHeading">Xian</h1>' +
      '<div id="bodyContent">' +
      "<p><b>época: 200 A.C</b></p>" + 
      "<p><b>população: 400.000 habitantes</p>" + 
      "<p>Xian, no passado chamada Chang'an,foi uma localização proeminente durante a Dinastia Shang. E mais tarde se tornou a capital sob a Dinastia Zhou Ocidental. Retornando a ser capital novamente sob a Dinastia Han e atingiu o seu apogeu durante este período quando a Dinastia Han abriu a Rota da Seda, conectando a Ásia, África e Europa. Chang'an estava localizada em uma das extremidades da Rota da Seda, tornando-se o local mais conectado do Império Han e atraindo comerciantes de todo o mundo. Em 200 a.C., Chang'an tinha 400.000 habitantes, tornando-se provavelmente a maior cidade da época.</p>" + 
      '<img src="https://miro.medium.com/v2/resize:fit:1064/1*y7FJ5i1sIAzdtkJFeSRN6w.jpeg">' +
      '</div>' +
      '</div>';

  
    const infowindowPataliputra = new google.maps.InfoWindow({
      content: contentStringPataliputra,
      ariaLabel: "pataliputra",
    });
  
    const infowindowAlexandria = new google.maps.InfoWindow({
      content: contentStringAlexandria,
      ariaLabel: "alexandria",
    });
    const infowindowXian = new google.maps.InfoWindow({
      content: contentStringXian,
      ariaLabel: "Xian",
    });
  

  
  
    const markerPataliputra = new google.maps.Marker({
      position: { lat: 25.595010407784716, lng: 85.11866233384033 },
      map,
      title: "Pataliputra"
    });
  
    const markerAlexandria = new google.maps.Marker({
      position: { lat: 31.23927088534895, lng: 29.967914229094447 }, // Preencha com as coordenadas da CidadeX
      map,
      title: "Alexandria"
    });
    const markerXian = new google.maps.Marker({
      position: { lat: 34.135506014991435, lng: 108.89374994853526 },
      map,
      title: "Xian"
    });

  
    markerPataliputra.addListener("click", () => {
      infowindowPataliputra.open({
        anchor: markerPataliputra,
        map,
      });
    });
  
    markerAlexandria.addListener("click", () => {
      infowindowAlexandria.open({
        anchor: markerAlexandria,
        map,
      });
    });
    markerXian.addListener("click", () => {
      infowindowXian.open({
        anchor: markerXian,
        map,
      });
    });
  
  
    window.initMap = initMap;
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }
  