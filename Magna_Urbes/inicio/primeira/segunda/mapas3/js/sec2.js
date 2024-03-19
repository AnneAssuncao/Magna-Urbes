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
      "<p>época: 1.600 á 1.637 D.C</p>"+
      "<p>população: 700.000 á 1.000.000 de habitantes</p>"+
      "<p>Pequim é atualmente a capital da República Popular da China. É a capital nacional mais populosa do mundo, com mais de 21 milhões de habitantes .Combinando arquiteturas de estilo moderno e tradicional, Pequim é uma das cidades mais antigas do mundo, com uma rica história que remonta a mais de três milênios. Como a última das -Quatro Grandes Capitais Antigas da China-, tem sido o centro político do país durante a maior parte dos últimos oito séculos. Com montanhas ao redor da cidade em três lados, além das antigas muralhas internas e externas, foi estrategicamente posicionada e desenvolvida para ser a residência do imperador e, portanto, era o local perfeito para a capital imperial. A cidade é também conhecida por seus palácios, templos, parques, jardins, túmulos, muros e portões opulentos.No século XV, Pequim havia tomado essencialmente sua forma atual. A muralha da cidade Ming continuou a servir até os tempos modernos, quando foi derrubada e o 2º anel viário foi construído em seu lugar.[43] Acredita-se geralmente que Pequim foi a cidade mais populosa do mundo durante a maior parte dos séculos XV, XVI, XVII e XVIII.</p>" +
      '<img src="https://www.tudosobrepequim.com/f/china/pekin/guia/ciudad-prohibida.jpg">' +
      '</div>' +
      '</div>';

      const contentStringConstantinopla = '<div id="content">' +
    '<div id="siteNotice"></div>' +
    '<h1 id="firstHeading" class="firstHeading">Constatinopla</h1>' +
    '<div id="bodyContent">' +
    "<p><b>época: 1.650 á 1.690 D.C</b></p>" + 
    "<p><b>população: 700.000 á 800.000 habitantes</p>" + 
    "<p>Constantinopla, atual Istambul, foi a capital do Império Romano, do Império Bizantino, do Império Latino  e, após a tomada pelos turcos, do Império Otomano. Estrategicamente localizada entre o Corno de Ouro e o Mar de Mármara no ponto em que a Europa encontra a Ásia, a Constantinopla Bizantina havia sido a capital da Cristandade, sendo guardiã das relíquias mais sagradas da cristandade, como a Coroa de Espinhos e a Verdadeira Cruz., sucessora das antigas Grécia e Roma.Desde meados do século V até o início do XIII, Constantinopla era a maior e mais rica cidade da Europa. </p>" + 
    '<img src="https://c8.alamy.com/compes/2m9crn5/mapa-del-siglo-16th-de-bizancio-constantinopla-2m9crn5.jpg" alt="Descrição da Imagem">' +
    '</div>' +
    '</div>';
  
  
      const infowindowPequim = new google.maps.InfoWindow({
        content: contentStringPequim,
        ariaLabel: "pequim",
      });
      const infowindowConstantinopla = new google.maps.InfoWindow({
        content: contentStringConstantinopla,
        ariaLabel: "constantinopla",
      });
     
      
  
      const markerPequim = new google.maps.Marker({
        position: { lat: 39.99069659254849, lng: 116.18026208326452 },
        map,
        title: "Pequim"
      });
      const markerConstantinopla = new google.maps.Marker({
        position: { lat: 41.03386175206011, lng: 28.913239085074792 },
        map,
        title: "Constantinopla"
      });
    
  
      markerPequim.addListener("click", () => {
        infowindowPequim.open({
          anchor: markerPequim,
          map,
        });
      });
      markerConstantinopla.addListener("click", () => {
        infowindowConstantinopla.open({
          anchor: markerConstantinopla,
          map,
        });
      });
   
   
  
    window.initMap = initMap;
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }
  
  