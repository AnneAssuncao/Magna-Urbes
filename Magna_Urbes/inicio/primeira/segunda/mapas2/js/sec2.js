function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 15.397, lng: 0 },
      mapId: 'cd603ce1ed93935f',
      zoom: 2,
      maxZoom: 6,
      minZoom: 1.5,
      alt: 'ERROR - O MAPA NÃO CARREGOU',
    });
  
    const contentStringCtesifonte = '<div id="content">' +
    '<div id="siteNotice"></div>' +
    '<h1 id="firstHeading" class="firstHeading">Ctesifonte</h1>' +
    '<div id="bodyContent">' +
    "<p><b>época:570 á 600 D.C</b></p>" + 
    "<p><b>população: 500.000 habitantes</p>" + 
    "<p>Ctesifonte foi uma das grandes cidades da Mesopotâmia e a capital do Império Arsácida e de seu sucessor, o Império Sassânida, por mais de 800 anos, localizada no antigo reino da Pérsia. Acredita-se que tenha sido a maior cidade de seu tempo, entre 570 a 630. Sua primeira menção é no Livro de Esdras, no Velho Testamento.  Localizada a 33 quilômetros ao sudeste da moderna Bagdá, Iraque,[3] nas margens do rio Tigre. Ctesifonte foi fundada no final dos anos 120 aC.Foi construído no local de um acampamento militar estabelecido em frente a Selêucia por Mitrídates I da Pártia.No reinado de Gotarzes, vi Ctesifonte atingir o auge como centro político e comercial.A cidade tornou-se a capital do Império por volta de 58 aC durante o reinado de Orodes II.Gradualmente, a cidade se fundiu com a antiga capital helenística de Selêucia e outros assentamentos próximos para formar uma metrópole cosmopolita. </p>" + 
    '<img src="https://www.searaagape.com.br/archofcziphon.jpg">' +
    '</div>' +
    '</div>';
  
    const contentStringConstantinopla = '<div id="content">' +
  '<div id="siteNotice"></div>' +
  '<h1 id="firstHeading" class="firstHeading">Constatinopla</h1>' +
  '<div id="bodyContent">' +
  "<p><b>época: 600 D.C</b></p>" + 
  "<p><b>população: 600.000 habitantes</p>" + 
  "<p>Constantinopla, atual Istambul, foi a capital do Império Romano, do Império Bizantino, do Império Latino  e, após a tomada pelos turcos, do Império Otomano. Estrategicamente localizada entre o Corno de Ouro e o Mar de Mármara no ponto em que a Europa encontra a Ásia, a Constantinopla Bizantina havia sido a capital da Cristandade, sendo guardiã das relíquias mais sagradas da cristandade, como a Coroa de Espinhos e a Verdadeira Cruz., sucessora das antigas Grécia e Roma.Desde meados do século V até o início do XIII, Constantinopla era a maior e mais rica cidade da Europa. </p>" + 
  '<img src="https://c8.alamy.com/compes/2m9crn5/mapa-del-siglo-16th-de-bizancio-constantinopla-2m9crn5.jpg" alt="Descrição da Imagem">' +
  '</div>' +
  '</div>';
  
  const contentStringXian = '<div id="content">' +
  '<div id="siteNotice"></div>' +
  '<h1 id="firstHeading" class="firstHeading">Xian</h1>' +
  '<div id="bodyContent">' +
  "<p><b>época: 600 D.C</b></p>" + 
  "<p><b>população: 600.000 habitantes</p>" + 
  "<p>Xian, no passado chamada Chang'an,foi uma localização proeminente durante a Dinastia Shang. E mais tarde se tornou a capital sob a Dinastia Zhou Ocidental. Retornando a ser capital novamente sob a Dinastia Han e atingiu o seu apogeu durante este período quando a Dinastia Han abriu a Rota da Seda, conectando a Ásia, África e Europa. Chang'an estava localizada em uma das extremidades da Rota da Seda, tornando-se o local mais conectado do Império Han e atraindo comerciantes de todo o mundo. Em 200 a.C., Chang'an tinha 400.000 habitantes, tornando-se provavelmente a maior cidade da época.</p>" + 
  '<img src="https://miro.medium.com/v2/resize:fit:1064/1*y7FJ5i1sIAzdtkJFeSRN6w.jpeg">' +
  '</div>' +
  '</div>';
  
      const infowindowCtesifonte = new google.maps.InfoWindow({
        content: contentStringCtesifonte,
        ariaLabel: "ctesifonte",
      });

      const infowindowConstantinopla = new google.maps.InfoWindow({
        content: contentStringConstantinopla,
        ariaLabel: "constantinopla",
      });
  
      const infowindowXian = new google.maps.InfoWindow({
        content: contentStringXian,
        ariaLabel: "Xian",
      });
    
  
    const markerCtesifonte = new google.maps.Marker({
      position: { lat: 33.09373244331449, lng: 44.580190819593334 },
      map,
      title: "Ctesifonte"
    });
  
    const markerConstantinopla = new google.maps.Marker({
        position: { lat: 41.03386175206011, lng: 28.913239085074792 },
        map,
        title: "Constantinopla"
      });
  
      const markerXian = new google.maps.Marker({
        position: { lat: 34.135506014991435, lng: 108.89374994853526 },
        map,
        title: "Xian"
      });
  
    markerCtesifonte.addListener("click", () => {
      infowindowCtesifonte.open({
        anchor: markerCtesifonte,
        map,
      });
    });
  
    markerConstantinopla.addListener("click", () => {
        infowindowConstantinopla.open({
          anchor: markerConstantinopla,
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
  
  