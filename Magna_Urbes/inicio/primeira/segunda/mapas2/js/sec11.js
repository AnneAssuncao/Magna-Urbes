function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 15.397, lng: 0 },
      mapId: 'cd603ce1ed93935f',
      zoom: 2,
      maxZoom: 6,
      minZoom: 1.5,
      alt: 'ERROR - O MAPA NÃO CARREGOU',
    });
  
    const contentStringPequim = '<div id="content">' +
      '<div id="siteNotice"></div>' +
      '<h1 id="firstHeading" class="firstHeading">Pequim</h1>' +
      '<div id="bodyContent">' +
      "<p>época: 1.450 á 1.500 D.C</p>"+
      "<p>população: 600.000 á 1.000.000 de habitantes</p>"+
      "<p>Pequim é atualmente a capital da República Popular da China. É a capital nacional mais populosa do mundo, com mais de 21 milhões de habitantes .Combinando arquiteturas de estilo moderno e tradicional, Pequim é uma das cidades mais antigas do mundo, com uma rica história que remonta a mais de três milênios. Como a última das -Quatro Grandes Capitais Antigas da China-, tem sido o centro político do país durante a maior parte dos últimos oito séculos. Com montanhas ao redor da cidade em três lados, além das antigas muralhas internas e externas, foi estrategicamente posicionada e desenvolvida para ser a residência do imperador e, portanto, era o local perfeito para a capital imperial. A cidade é também conhecida por seus palácios, templos, parques, jardins, túmulos, muros e portões opulentos.No século XV, Pequim havia tomado essencialmente sua forma atual. A muralha da cidade Ming continuou a servir até os tempos modernos, quando foi derrubada e o 2º anel viário foi construído em seu lugar.[43] Acredita-se geralmente que Pequim foi a cidade mais populosa do mundo durante a maior parte dos séculos XV, XVI, XVII e XVIII.</p>" +
      '<img src="https://www.tudosobrepequim.com/f/china/pekin/guia/ciudad-prohibida.jpg">' +
      '</div>' +
      '</div>';

      const contentStringNanquim = '<div id="content">' +
      '<div id="siteNotice"></div>' +
      '<h1 id="firstHeading" class="firstHeading">Nanquim</h1>' +
      '<div id="bodyContent">' +
      "<p>época: 1.420D.C</p>"+
      "<p>população: ? de habitantes</p>"+
      "<p>Nanquim, capital da província oriental de Jiangsu na China, está aproximadamente 300 km acima do rio Yangtze em relação à cidade de Xangai. Ela foi a capital nacional durante parte da dinastia Ming. Muitos monumentos e pontos turísticos permanecem, inclusive o portal Zhonghua (Portal da China),  ocupando um lugar de destaque na história e na cultura chinesas, tendo sido a capital de várias dinastias, reinos e governos republicanos chineses que datam do século III até 1949[4]uma parte preservada do imenso muro do século 14 que protegia a entrada ao sul da velha cidade. Nanquim, uma das cidades mais importantes do país há mais de mil anos, é reconhecida como uma das quatro grandes capitais da China. </p>" +
      '<img src="https://mega.ibxk.com.br/2021/12/05/05193301053011.jpg">' +
      '</div>' +
      '</div>';

      

    

      const infowindowPequim = new google.maps.InfoWindow({
        content: contentStringPequim,
        ariaLabel: "pequim",
      });
      const infowindowNanquim = new google.maps.InfoWindow({
        content: contentStringNanquim,
        ariaLabel: "nanquim",
      });
      

      const markerPequim = new google.maps.Marker({
        position: { lat: 39.99069659254849, lng: 116.18026208326452 },
        map,
        title: "Pequim"
      });
      const markerNanquim = new google.maps.Marker({
        position: { lat: 31.99163235897932, lng: 118.79518324166148 },
        map,
        title: "Nanquim"
      });
     
  
      markerPequim.addListener("click", () => {
        infowindowPequim.open({
          anchor: markerPequim,
          map,
        });
      });
      markerNanquim.addListener("click", () => {
        infowindowNanquim.open({
          anchor: markerNanquim,
          map,
        });
      });
   
  
    window.initMap = initMap;
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }
  
  