function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 15.397, lng: 0 },
      mapId: 'cd603ce1ed93935f',
      zoom: 2,
      maxZoom: 6,
      minZoom: 1.5,
      alt: 'ERROR - O MAPA NÃO CARREGOU',
    });
  
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

  
    const contentStringRoma = '<div id="content">' +
      '<div id="siteNotice"></div>' +
      '<h1 id="firstHeading" class="firstHeading">Roma</h1>' +
      '<div id="bodyContent">' +
      "<p><b>época: 25 A.C</b></p>" + 
      "<p><b>população: ?? habitantes</p>" + 
      "<p>Roma tinha uma ótima localização e ficava próximo da parte continental, perto do Rio Tibre, que fluía para o Mediterrâneo. Assim, Roma tinha acesso ao mar, mas ficava desprotegida de ataques marítimos.Os romanos se destacavam por sua engenharia e arquitetura. Eles construíram aquedutos, que levavam água para a cidade. As casas de banho públicas eram largas, prédios magníficos onde os cidadãos iam diariamente se exercitar e se banhar. Outras cidades se conectavam com Roma através de avenidas pavimentadas. O Fórum de Roma era o coração da cidade. Era um local para reuniões públicas, assim como para julgamentos e celebrações de vitórias na guerra. Era lá também onde ocorria as campanhas políticas e eleições.</p>" + 
      '<img src="https://www.tricurioso.com/wp-content/uploads/2018/12/fatos-curiosos-sobre-a-roma-antiga.jpg" alt="Descrição da Imagem">' +
      '</div>' +
      '</div>';
  
  
    const infowindowAlexandria = new google.maps.InfoWindow({
      content: contentStringAlexandria,
      ariaLabel: "alexandria",
    });
  
    const infowindowXian = new google.maps.InfoWindow({
      content: contentStringXian,
      ariaLabel: "xian",
    });
    const infowindowRoma = new google.maps.InfoWindow({
      content: contentStringRoma,
      ariaLabel: "roma",
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
    const markerRoma = new google.maps.Marker({
      position: { lat: 41.883375349627514, lng: 12.502336563828738 },
      map,
      title: "Roma"
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
    markerRoma.addListener("click", () => {
      infowindowRoma.open({
        anchor: markerRoma,
        map,
      });
    });

  
    window.initMap = initMap;
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }