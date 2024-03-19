function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 15.397, lng: 0 },
      mapId: 'cd603ce1ed93935f',
      zoom: 2,
      maxZoom: 6,
      minZoom: 1.5,
      alt: 'ERROR - O MAPA NÃO CARREGOU',
    });
  
    const contentStringRoma = '<div id="content">' +
    '<div id="siteNotice"></div>' +
    '<h1 id="firstHeading" class="firstHeading">Roma</h1>' +
    '<div id="bodyContent">' +
    "<p><b>época: 280 á 300 D.C</b></p>" + 
    "<p><b>população: 500.000 á 1.000.000 habitantes</p>" + 
    "<p>Roma tinha uma ótima localização e ficava próximo da parte continental, perto do Rio Tibre, que fluía para o Mediterrâneo. Assim, Roma tinha acesso ao mar, mas ficava desprotegida de ataques marítimos.Os romanos se destacavam por sua engenharia e arquitetura. Eles construíram aquedutos, que levavam água para a cidade. As casas de banho públicas eram largas, prédios magníficos onde os cidadãos iam diariamente se exercitar e se banhar. Outras cidades se conectavam com Roma através de avenidas pavimentadas. O Fórum de Roma era o coração da cidade. Era um local para reuniões públicas, assim como para julgamentos e celebrações de vitórias na guerra. Era lá também onde ocorria as campanhas políticas e eleições.</p>" + 
    '<img src="https://www.tricurioso.com/wp-content/uploads/2018/12/fatos-curiosos-sobre-a-roma-antiga.jpg" alt="Descrição da Imagem">' +
    '</div>' +
    '</div>';



    const infowindowRoma = new google.maps.InfoWindow({
      content: contentStringRoma,
      ariaLabel: "roma",
    });
  


    const markerRoma = new google.maps.Marker({
      position: { lat: 41.883375349627514, lng: 12.502336563828738 },
      map,
      title: "Roma"
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
  