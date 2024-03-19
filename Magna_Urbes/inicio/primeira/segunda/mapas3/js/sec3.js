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
      "<p>época: 1.700 á 1.775 D.C</p>"+
      "<p>população: 650.000 á 1.000.000 de habitantes</p>"+
      "<p>Pequim é atualmente a capital da República Popular da China. É a capital nacional mais populosa do mundo, com mais de 21 milhões de habitantes .Combinando arquiteturas de estilo moderno e tradicional, Pequim é uma das cidades mais antigas do mundo, com uma rica história que remonta a mais de três milênios. Como a última das -Quatro Grandes Capitais Antigas da China-, tem sido o centro político do país durante a maior parte dos últimos oito séculos. Com montanhas ao redor da cidade em três lados, além das antigas muralhas internas e externas, foi estrategicamente posicionada e desenvolvida para ser a residência do imperador e, portanto, era o local perfeito para a capital imperial. A cidade é também conhecida por seus palácios, templos, parques, jardins, túmulos, muros e portões opulentos.No século XV, Pequim havia tomado essencialmente sua forma atual. A muralha da cidade Ming continuou a servir até os tempos modernos, quando foi derrubada e o 2º anel viário foi construído em seu lugar.[43] Acredita-se geralmente que Pequim foi a cidade mais populosa do mundo durante a maior parte dos séculos XV, XVI, XVII e XVIII.</p>" +
      '<img src="https://www.tudosobrepequim.com/f/china/pekin/guia/ciudad-prohibida.jpg">' +
      '</div>' +
      '</div>';

      const contentStringConstantinopla = '<div id="content">' +
    '<div id="siteNotice"></div>' +
    '<h1 id="firstHeading" class="firstHeading">Constatinopla</h1>' +
    '<div id="bodyContent">' +
    "<p><b>época: 1.700 D.C</b></p>" + 
    "<p><b>população: 700.000 habitantes</p>" + 
    "<p>Constantinopla, atual Istambul, foi a capital do Império Romano, do Império Bizantino, do Império Latino  e, após a tomada pelos turcos, do Império Otomano. Estrategicamente localizada entre o Corno de Ouro e o Mar de Mármara no ponto em que a Europa encontra a Ásia, a Constantinopla Bizantina havia sido a capital da Cristandade, sendo guardiã das relíquias mais sagradas da cristandade, como a Coroa de Espinhos e a Verdadeira Cruz., sucessora das antigas Grécia e Roma.Desde meados do século V até o início do XIII, Constantinopla era a maior e mais rica cidade da Europa. </p>" + 
    '<img src="https://c8.alamy.com/compes/2m9crn5/mapa-del-siglo-16th-de-bizancio-constantinopla-2m9crn5.jpg" alt="Descrição da Imagem">' +
    '</div>' +
    '</div>';

    const contentStringAiutaia = '<div id="content">' +
    '<div id="siteNotice"></div>' +
    '<h1 id="firstHeading" class="firstHeading">Aiutaia</h1>' +
    '<div id="bodyContent">' +
    "<p><b>época: 1.700 D.C</b></p>" + 
    "<p><b>população: 1.000.000 habitantes</p>" + 
    "<p>Aiutaia é a capital da província tailandesa de Aiutaia. Foi fundada em 1350 pelo rei U-Tongue,No século XVII, Ayutthaya, também conhecida como Sião, floresceu como uma cidade cosmopolita e poliglota, com uma população diversificada. A cidade era governada por reis curiosos e abertos ao mundo, buscando a orientação de conselheiros japoneses, árabes e europeus. Os papéis de gênero eram relativamente progressivos.O declínio de Ayutthaya foi abrupto, ocorrendo em 1767 com a invasão birmanesa, que saqueou e destruiu a cidade. Sião se recuperou ao sul, em uma cidade chamada Krung Thep, conhecida como Bangkok. Até hoje, a Tailândia é o único país da região que nunca foi formalmente colonizado por uma potência europeia. A cidade de Ayutthaya é considerada como Patrimônio Mundial da UNESCO, a cidade é praticamente uma cidade de ruínas, sendo caracterizada por restos de torres e mosteiros budistas.</p>" + 
    '<img src="https://res.klook.com/image/upload/c_fill,w_1265,h_712/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/i7ogdzuvjjzh4yjnsenv.webp">' +
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
      const infowindowAiutaia = new google.maps.InfoWindow({
        content: contentStringAiutaia,
        ariaLabel: "Aiutaia",
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

      const markerAiutaia = new google.maps.Marker({
        position: { lat: 14.376389526327635, lng: 100.58799891367845 },
        map,
        title: "Aiutaia"
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
      markerAiutaia.addListener("click", () => {
        infowindowAiutaia.open({
          anchor: markerAiutaia,
          map,
        });
      });
   
   
  
    window.initMap = initMap;
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }
  
  