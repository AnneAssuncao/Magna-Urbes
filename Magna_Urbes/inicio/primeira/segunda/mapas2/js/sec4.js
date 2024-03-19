function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 15.397, lng: 0 },
      mapId: 'cd603ce1ed93935f',
      zoom: 2,
      maxZoom: 6,
      minZoom: 1.5,
      alt: 'ERROR - O MAPA NÃO CARREGOU',
    });
  

  

  const contentStringXian = '<div id="content">' +
  '<div id="siteNotice"></div>' +
  '<h1 id="firstHeading" class="firstHeading">Xian</h1>' +
  '<div id="bodyContent">' +
  "<p><b>época: 750 á 800 D.C</b></p>" + 
  "<p><b>população: 800.000 á 1.000.000 habitantes</p>" + 
  "<p>Xian, no passado chamada Chang'an,foi uma localização proeminente durante a Dinastia Shang. E mais tarde se tornou a capital sob a Dinastia Zhou Ocidental. Retornando a ser capital novamente sob a Dinastia Han e atingiu o seu apogeu durante este período quando a Dinastia Han abriu a Rota da Seda, conectando a Ásia, África e Europa. Chang'an estava localizada em uma das extremidades da Rota da Seda, tornando-se o local mais conectado do Império Han e atraindo comerciantes de todo o mundo. Em 200 a.C., Chang'an tinha 400.000 habitantes, tornando-se provavelmente a maior cidade da época.</p>" + 
  '<img src="https://miro.medium.com/v2/resize:fit:1064/1*y7FJ5i1sIAzdtkJFeSRN6w.jpeg">' +
  '</div>' +
  '</div>';

  const contentStringBagda = '<div id="content">' +
  '<div id="siteNotice"></div>' +
  '<h1 id="firstHeading" class="firstHeading">Bagdá</h1>' +
  '<div id="bodyContent">' +
  "<p><b>época: 775 á 800 D.C</b></p>" + 
  "<p><b>população: 600.000 á 700.000 habitantes</p>" + 
  "<p>Bagdá é hoje em dia a capital do Iraque e da província homônima. Com uma população de 8 milhões de habitantes, é a maior cidade do país. A sua área metropolitana conta com cerca de 9 milhões de habitantes.[4] Bagdá também é a segunda maior cidade do Sudoeste Asiático, depois de Teerã. Situa-se no centro do país, às margens do rio Tigre, e sua história remonta pelo menos ao século VIII, com possíveis origens pré-islâmicas. Antigo centro do mundo islâmico, Bagdá atualmente está no centro de conflitos violentos, desde 2003, devido à Guerra do Iraque. Em 30 de julho de 762 o califa abássida Almançor fundou a cidade.[8] Almançor acreditava que Bagdá era a cidade perfeita para ser a capital do império islâmico sob o domínio dos abássidas.</p>" + 
  '<img src="https://i0.wp.com/dunapress.com/wp-content/uploads/2023/04/Bagda1.jpg?fit=1600%2C744&ssl=1">' +
  '</div>' +
  '</div>';
      const infowindowXian = new google.maps.InfoWindow({
        content: contentStringXian,
        ariaLabel: "Xian",
     });
      const infowindowBagda = new google.maps.InfoWindow({
        content: contentStringBagda,
        ariaLabel: "bagda",
      });
  
      const markerXian = new google.maps.Marker({
        position: { lat: 34.135506014991435, lng: 108.89374994853526 },
        map,
        title: "Xian"
      });

    const markerBagdá = new google.maps.Marker({
      position: { lat: 33.09373244331449, lng: 44.580190819593334 },
      map,
      title: "bagda"
    });

  
      markerXian.addListener("click", () => {
        infowindowXian.open({
          anchor: markerXian,
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