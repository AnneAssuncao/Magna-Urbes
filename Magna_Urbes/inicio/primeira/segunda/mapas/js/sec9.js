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
  "<p><b>época: 400 D.C</b></p>" + 
  "<p><b>população: 500.000 á 800.000 habitantes</p>" + 
  "<p>Roma tinha uma ótima localização e ficava próximo da parte continental, perto do Rio Tibre, que fluía para o Mediterrâneo. Assim, Roma tinha acesso ao mar, mas ficava desprotegida de ataques marítimos.Os romanos se destacavam por sua engenharia e arquitetura. Eles construíram aquedutos, que levavam água para a cidade. As casas de banho públicas eram largas, prédios magníficos onde os cidadãos iam diariamente se exercitar e se banhar. Outras cidades se conectavam com Roma através de avenidas pavimentadas. O Fórum de Roma era o coração da cidade. Era um local para reuniões públicas, assim como para julgamentos e celebrações de vitórias na guerra. Era lá também onde ocorria as campanhas políticas e eleições.</p>" + 
  '<img src="https://www.tricurioso.com/wp-content/uploads/2018/12/fatos-curiosos-sobre-a-roma-antiga.jpg" alt="Descrição da Imagem">' +
  '</div>' +
  '</div>';

  
  const contentStringConstantinopla = '<div id="content">' +
  '<div id="siteNotice"></div>' +
  '<h1 id="firstHeading" class="firstHeading">Constatinopla</h1>' +
  '<div id="bodyContent">' +
  "<p><b>época: 340 á 361 D.C</b></p>" + 
  "<p><b>população: 300.000 habitantes</p>" + 
  "<p>Constantinopla, atual Istambul, foi a capital do Império Romano, do Império Bizantino, do Império Latino  e, após a tomada pelos turcos, do Império Otomano. Estrategicamente localizada entre o Corno de Ouro e o Mar de Mármara no ponto em que a Europa encontra a Ásia, a Constantinopla Bizantina havia sido a capital da Cristandade, sendo guardiã das relíquias mais sagradas da cristandade, como a Coroa de Espinhos e a Verdadeira Cruz., sucessora das antigas Grécia e Roma.Desde meados do século V até o início do XIII, Constantinopla era a maior e mais rica cidade da Europa. </p>" + 
  '<img src="https://c8.alamy.com/compes/2m9crn5/mapa-del-siglo-16th-de-bizancio-constantinopla-2m9crn5.jpg" alt="Descrição da Imagem">' +
  '</div>' +
  '</div>';



  const infowindowRoma = new google.maps.InfoWindow({
    content: contentStringRoma,
    ariaLabel: "roma",
  });
  const infowindowConstantinopla = new google.maps.InfoWindow({
    content: contentStringConstantinopla,
    ariaLabel: "constantinopla",
  });



  const markerRoma = new google.maps.Marker({
    position: { lat: 41.883375349627514, lng: 12.502336563828738 },
    map,
    title: "Roma"
  });
  const markerConstantinopla = new google.maps.Marker({
    position: { lat: 41.03386175206011, lng: 28.913239085074792 },
    map,
    title: "Constantinopla"
  });
  


  markerRoma.addListener("click", () => {
    infowindowRoma.open({
      anchor: markerRoma,
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
