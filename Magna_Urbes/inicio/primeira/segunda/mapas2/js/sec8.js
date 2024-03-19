function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 15.397, lng: 0 },
      mapId: 'cd603ce1ed93935f',
      zoom: 2,
      maxZoom: 6,
      minZoom: 1.5,
      alt: 'ERROR - O MAPA NÃO CARREGOU',
    });
 

  
    const contentStringKaifeng = '<div id="content">' +
      '<div id="siteNotice"></div>' +
      '<h1 id="firstHeading" class="firstHeading">Kaifeng</h1>' +
      '<div id="bodyContent">' +
      "<p><b>época: 1.102 á 1.200D.C</b></p>" +
      "<p>população: 400.000 á 442.000 habitantes</p>"+
      "<p>Kaifeng é uma cidade da República Popular da China localizada na província de Honã, às margens do Rio Amarelo.</p>" +
      "<p>Kai-feng é o atual nome de Daliang, que foi fundada em 364 a.C.. A cidade foi crescendo conforme a população chinesa se movia para o leste em busca de terras mais férteis. Durante a Dinastia Song (960-1279), chegou a possuir mais de 400,000 habitantes. Foi capital de diversas dinastias chinesas e tinha uma grande produção de porcelana, atraindo muitos imigrantes, inclusive judeus. Invasões de povos do norte e inúmeras inundações acarretaram o declínio da cidade, sendo que a mesma teve de ser reconstruída no final do século XIX, sem nunca mais, contudo, possuir a mesma importância de antes.</p>" +
      '<img src="URL_DA_IMAGEM_DO_MAPA_DE_KAIFENG" alt="Descrição da Imagem">' +
      '</div>' +
      '</div>';
  
      const contentStringHangzhou = '<div id="content">' +
      '<div id="siteNotice"></div>' +
      '<h1 id="firstHeading" class="firstHeading">Hangzhou</h1>' +
      '<div id="bodyContent">' +
      "<p><b>época: 1.102 á 1.200D.C</b></p>" +
      "<p>população: 200.000 á 1.000.000 habitantes</p>"+
      "<p>época: 1.180 á 1.200D.C</p>"+
      "<p>Hangzhou é uma cidade da República Popular da China, capital da província de Chequião, atualmente. É um porto no rio Fushun, perto de Xangai. A atual cidade de Hangzhou, foi durante 149 anos a capital da dinastia Song do Sul .Tem cerca de 6,3 milhões de habitantes. É um centro ferroviário, industrial e turístico importante. Foi fundada em 606 sendo capital de vários reinos até a conquista mongol em 1276. Foi reconstruída, retomando a sua prosperidade e atraindo numerosos estrangeiros: árabes, persas e cristãos.Foi quase destruída em 1861 pela rebelião Taiping. A chegada da estrada de ferro em 1909 trouxe-lhe nova prosperidade. Foi ocupada pelo Japão de 1937 a 1945.</p>" +
      '<img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/83/08/74/in-front-of-yue-fei-mausoleum.jpg?w=500&h=400&s=1">' +
      '</div>' +
      '</div>';

      const contentStringConstantinopla = '<div id="content">' +
      '<div id="siteNotice"></div>' +
      '<h1 id="firstHeading" class="firstHeading">Constatinopla</h1>' +
      '<div id="bodyContent">' +
      "<p><b>época: 1.127 á 1.160 D.C</b></p>" + 
      "<p><b>população: 200.000 habitantes</p>" + 
      "<p>Constantinopla, atual Istambul, foi a capital do Império Romano, do Império Bizantino, do Império Latino  e, após a tomada pelos turcos, do Império Otomano. Estrategicamente localizada entre o Corno de Ouro e o Mar de Mármara no ponto em que a Europa encontra a Ásia, a Constantinopla Bizantina havia sido a capital da Cristandade, sendo guardiã das relíquias mais sagradas da cristandade, como a Coroa de Espinhos e a Verdadeira Cruz., sucessora das antigas Grécia e Roma.Desde meados do século V até o início do XIII, Constantinopla era a maior e mais rica cidade da Europa. </p>" + 
      '<img src="https://c8.alamy.com/compes/2m9crn5/mapa-del-siglo-16th-de-bizancio-constantinopla-2m9crn5.jpg" alt="Descrição da Imagem">' +
      '</div>' +
      '</div>';

      const contentStringMarve = '<div id="content">' +
      '<div id="siteNotice"></div>' +
      '<h1 id="firstHeading" class="firstHeading">Marve</h1>' +
      '<div id="bodyContent">' +
      "<p><b>época:1.145 á 1.150D.C</b></p>" + 
      "<p><b>população: 200.000 habitantes</p>" + 
      "<p>Marve, anteriormente conhecida como Alexandria na Margiana e posteriormente Antioquia de Margiana, foi uma importante cidade-oásis na Ásia Central. Parte da histórica Rota da Seda, localizava-se próximo ao que é hoje Mary, no Turquemenistão. O sítio da antiga Marve foi declarado Patrimônio da Humanidade pela Unesco, em 1999. Era considerada uma das maiores cidades do mundo no século XII.</p>" + 
      '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Turkmenistan_Merv_city.jpg/450px-Turkmenistan_Merv_city.jpg">' +
      '</div>' +
      '</div>';

      const contentStringFez = '<div id="content">' +
      '<div id="siteNotice"></div>' +
      '<h1 id="firstHeading" class="firstHeading">Fez</h1>' +
      '<div id="bodyContent">' +
      "<p><b>época:1.170D.C</b></p>" + 
      "<p><b>população: 200.000 habitantes</p>" + 
      "<p>Fez é uma cidade do centro-norte de Marrocos. É a capital da prefeitura homónima e da região de Fez-Mequinez. Foi fundada em 789 por Mulei Idris, tendo sido a capital de Marrocos em várias ocasiões. A sua importância no passado coloca-a a par de outras grandes capitais da civilização islâmica como Tunes, Damasco, Bagdade, Córdova, Jerusalém ou Isfahan. Juntamente com Rabat, Mequinez e Marraquexe, Fez é uma das chamadas cidades imperiais de Marrocos. Situa-se 180 km a leste de Rebate e da costa atlântica, entre os cordilheiras do Rife (a norte) e do Médio Atlas (a sul).</p>" + 
      '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Bou_Inania_Madrasa_2011.jpg/413px-Bou_Inania_Madrasa_2011.jpg">' +
      '</div>' +
      '</div>';

      const contentStringBagda = '<div id="content">' +
      '<div id="siteNotice"></div>' +
      '<h1 id="firstHeading" class="firstHeading">Bagdá</h1>' +
      '<div id="bodyContent">' +
      "<p><b>época: 1.2000 D.C</b></p>" +
      "<p>população: 1.00.000 habitantes</p>"+
      "<p>Bagdá é hoje em dia a capital do Iraque e da província homônima. Com uma população de 8 milhões de habitantes, é a maior cidade do país. A sua área metropolitana conta com cerca de 9 milhões de habitantes.[4] Bagdá também é a segunda maior cidade do Sudoeste Asiático, depois de Teerã. Situa-se no centro do país, às margens do rio Tigre, e sua história remonta pelo menos ao século VIII, com possíveis origens pré-islâmicas. Antigo centro do mundo islâmico, Bagdá atualmente está no centro de conflitos violentos, desde 2003, devido à Guerra do Iraque.</p>" +
      '<img src="https://media.istockphoto.com/id/839963324/pt/vetorial/baghdad-iraq-19th-century.jpg?s=612x612&w=0&k=20&c=P0REUAEAHTue3c2t2QAXgQXXgENV6QeHyV5MCzUUt7A=" alt="Descrição da Imagem">' +
      '</div>' +
      '</div>';


  
    const infowindowHangzhou = new google.maps.InfoWindow({
      content: contentStringHangzhou,
      ariaLabel: "hangzhou",
    });

  
    const infowindowKaifeng = new google.maps.InfoWindow({
      content: contentStringKaifeng,
      ariaLabel: "kaifeng",
    });
    const infowindowConstantinopla = new google.maps.InfoWindow({
        content: contentStringConstantinopla,
        ariaLabel: "constantinopla",
      });
      const infowindowMarve = new google.maps.InfoWindow({
        content: contentStringMarve,
        ariaLabel: "marve",
      });
      const infowindowFez = new google.maps.InfoWindow({
        content: contentStringFez,
        ariaLabel: "fez",
      });
      const infowindowBagda = new google.maps.InfoWindow({
        content: contentStringBagda,
        ariaLabel: "bagda",
      });

  
    const markerHangzhou = new google.maps.Marker({
        position: { lat: 30.2734316563498, lng: 120.13612222401399 },
        map,
        title: "Hangzhou"
      });
  
    const markerKaifeng = new google.maps.Marker({
      position: { lat: 34.809290741215996, lng: 114.27495938801327 },
      map,
      title: "Kaifeng"
    });
    const markerConstantinopla = new google.maps.Marker({
        position: { lat: 41.03386175206011, lng: 28.913239085074792 },
        map,
        title: "Constantinopla"
      });
      const markerMarve = new google.maps.Marker({
        position: { lat: 37.662756567094966, lng: 62.192392711526686 },
        map,
        title: "Marve"
      });

      const markerFez = new google.maps.Marker({
        position: { lat: 34.021419896868615, lng: -5.013252056439319 },
        map,
        title: "Fez"
      });
      const markerBagda = new google.maps.Marker({
        position: { lat: 33.31042962599009, lng: 44.368245057838095 },
        map,
        title: "Bagdá"
      });
  
  
    markerHangzhou.addListener("click", () => {
      infowindowHangzhou.open({
        anchor: markerHangzhou,
        map,
      });
    });
  
    markerKaifeng.addListener("click", () => {
      infowindowKaifeng.open({
        anchor: markerKaifeng,
        map,
      });
    });
    markerConstantinopla.addListener("click", () => {
        infowindowConstantinopla.open({
          anchor: markerConstantinopla,
          map,
        });
      });
      markerMarve.addListener("click", () => {
        infowindowMarve.open({
          anchor: markerMarve,
          map,
        });
      });
      markerFez.addListener("click", () => {
        infowindowFez.open({
          anchor: markerFez,
          map,
        });
      });
      markerBagda.addListener("click", () => {
        infowindowBagda.open({
          anchor: markerBagda,
          map,
        });
      });
  
    window.initMap = initMap;
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }
  
  