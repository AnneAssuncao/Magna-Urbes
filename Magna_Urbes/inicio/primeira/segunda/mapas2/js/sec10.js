function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 15.397, lng: 0 },
      mapId: 'cd603ce1ed93935f',
      zoom: 2,
      maxZoom: 6,
      minZoom: 1.5,
      alt: 'ERROR - O MAPA NÃO CARREGOU',
    });
  
    const contentStringHangzhou = '<div id="content">' +
      '<div id="siteNotice"></div>' +
      '<h1 id="firstHeading" class="firstHeading">Hangzhou</h1>' +
      '<div id="bodyContent">' +
      "<p>época: 1.348 á 1.350 D.C</p>"+
      "<p>população: 473.000 habitantes</p>"+
      "<p>Hangzhou é uma cidade da República Popular da China, capital da província de Chequião, atualmente. É um porto no rio Fushun, perto de Xangai. A atual cidade de Hangzhou, foi durante 149 anos a capital da dinastia Song do Sul .Tem cerca de 6,3 milhões de habitantes. É um centro ferroviário, industrial e turístico importante. Foi fundada em 606 sendo capital de vários reinos até a conquista mongol em 1276. Foi reconstruída, retomando a sua prosperidade e atraindo numerosos estrangeiros: árabes, persas e cristãos.Foi quase destruída em 1861 pela rebelião Taiping. A chegada da estrada de ferro em 1909 trouxe-lhe nova prosperidade. Foi ocupada pelo Japão de 1937 a 1945.</p>" +
      '<img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/83/08/74/in-front-of-yue-fei-mausoleum.jpg?w=500&h=400&s=1">' +
      '</div>' +
      '</div>';

      const contentStringNanquim = '<div id="content">' +
      '<div id="siteNotice"></div>' +
      '<h1 id="firstHeading" class="firstHeading">Nanquim</h1>' +
      '<div id="bodyContent">' +
      "<p>época:  1.358 á 1.400D.C</p>"+
      "<p>população: 473.000 á 1.000.000 de habitantes</p>"+
      "<p>Nanquim, capital da província oriental de Jiangsu na China, está aproximadamente 300 km acima do rio Yangtze em relação à cidade de Xangai. Ela foi a capital nacional durante parte da dinastia Ming. Muitos monumentos e pontos turísticos permanecem, inclusive o portal Zhonghua (Portal da China),  ocupando um lugar de destaque na história e na cultura chinesas, tendo sido a capital de várias dinastias, reinos e governos republicanos chineses que datam do século III até 1949[4]uma parte preservada do imenso muro do século 14 que protegia a entrada ao sul da velha cidade. Nanquim, uma das cidades mais importantes do país há mais de mil anos, é reconhecida como uma das quatro grandes capitais da China. </p>" +
      '<img src="https://mega.ibxk.com.br/2021/12/05/05193301053011.jpg">' +
      '</div>' +
      '</div>';

      const contentStringCairo = '<div id="content">' +
      '<div id="siteNotice"></div>' +
      '<h1 id="firstHeading" class="firstHeading">Cairo</h1>' +
      '<div id="bodyContent">' +
      "<p>época:  1.315 á 1.325 D.C</p>"+
      "<p>população: 432.000 á 500.000 de habitantes</p>"+
      "<p>O Cairo, capital do Egito, é a maior cidade do mundo árabe e da África, situada nas margens do rio Nilo. Fundada em 969, passou por várias invasões antes de se tornar a capital soberana em 1922. O Cairo histórico, uma antiga cidade islâmica, possui mesquitas e madraçais notáveis, destacando-se como o centro do mundo islâmico desde o século X, atingindo seu auge no século XIV.      </p>" +
      '<img src="https://lh3.googleusercontent.com/p/AF1QipOoKQo7kK2Cs_yfJy0OYXpNTvsc19R4eo01ey2A=s680-w680-h510">' +
      '</div>' +
      '</div>';

    

      const infowindowHangzhou = new google.maps.InfoWindow({
        content: contentStringHangzhou,
        ariaLabel: "hangzhou",
      });
      const infowindowNanquim = new google.maps.InfoWindow({
        content: contentStringNanquim,
        ariaLabel: "nanquim",
      });
      const infowindowCairo = new google.maps.InfoWindow({
        content: contentStringCairo,
        ariaLabel: "cairo",
      });

      const markerHangzhou = new google.maps.Marker({
        position: { lat: 30.2734316563498, lng: 120.13612222401399 },
        map,
        title: "Hangzhou"
      });
      const markerNanquim = new google.maps.Marker({
        position: { lat: 31.99163235897932, lng: 118.79518324166148 },
        map,
        title: "Nanquim"
      });
      const markerCairo = new google.maps.Marker({
        position: { lat: 30.044109855615137, lng: 31.241126552184976 },
        map,
        title: "Cairo"
      });
  
      markerHangzhou.addListener("click", () => {
        infowindowHangzhou.open({
          anchor: markerHangzhou,
          map,
        });
      });
      markerNanquim.addListener("click", () => {
        infowindowNanquim.open({
          anchor: markerNanquim,
          map,
        });
      });
      markerCairo.addListener("click", () => {
        infowindowCairo.open({
          anchor: markerCairo,
          map,
        });
      });
  
    window.initMap = initMap;
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }
  
  