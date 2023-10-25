var GAMES = [
    {
        gameTitle: "Super Mario Brothers",
        gameThumbImg:"super-mario-bros-cover.jpg",
        gameFullImg:"mario_300x300.jpg",
        gameBriefDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ",
        gameDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, reiciendis nulla obcaecati eo adipisci mollitia in. Vel, necessitatibus. Exercitationem, sequi, pariatur animi explicabo quia deserunt. Expedita!",
        gamerating: "E",
    
    },

    {
        gameTitle: "EarthBound",
        gameThumbImg:"earthbound_350x507.webp",
        gameFullImg:"earthbound_300x300.jpg",
        gameBriefDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ",
        gameDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, reiciendis nulla obcaecati eo adipisci mollitia in. Vel, necessitatibus. Exercitationem, sequi, pariatur animi explicabo quia deserunt. Expedita!",
        gamerating: "E",
    
    },

    {
        gameTitle: "Captain Toad",
        gameThumbImg:"captain-toad_350x507.webp",
        gameFullImg:"captain-toad_300x300.jpg",
        gameBriefDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ",
        gameDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, reiciendis nulla obcaecati eo adipisci mollitia in. Vel, necessitatibus. Exercitationem, sequi, pariatur animi explicabo quia deserunt. Expedita!",
        gamerating: "E",
    
    },

    {
        gameTitle: "Donkey Kong",
        gameThumbImg:"donkey-kong_350x507.webp",
        gameFullImg:"donkey-kong_300x300.jpg",
        gameBriefDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ",
        gameDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, reiciendis nulla obcaecati eo adipisci mollitia in. Vel, necessitatibus. Exercitationem, sequi, pariatur animi explicabo quia deserunt. Expedita!",
        gamerating: "E",
    
    },

    {
        gameTitle: "Kirby",
        gameThumbImg:"kirby_350x507.webp",
        gameFullImg:"kirby_300x300.jpg",
        gameBriefDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ",
        gameDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, reiciendis nulla obcaecati eo adipisci mollitia in. Vel, necessitatibus. Exercitationem, sequi, pariatur animi explicabo quia deserunt. Expedita!",
        gamerating: "E",
    
    },

    {
        gameTitle: "Luigi's Mansion",
        gameThumbImg:"luigi_350x507.webp",
        gameFullImg:"luigi_300x300.jpg",
        gameBriefDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ",
        gameDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, reiciendis nulla obcaecati eo adipisci mollitia in. Vel, necessitatibus. Exercitationem, sequi, pariatur animi explicabo quia deserunt. Expedita!",
        gamerating: "E",
    
    },

    {
        gameTitle: "Mario Kart",
        gameThumbImg:"mario-kart_350x507.webp",
        gameFullImg:"mario-kart_300x300.jpg",
        gameBriefDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ",
        gameDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, reiciendis nulla obcaecati eo adipisci mollitia in. Vel, necessitatibus. Exercitationem, sequi, pariatur animi explicabo quia deserunt. Expedita!",
        gamerating: "E",
    
    },

    {
        gameTitle: "Sonic the Hedgehog",
        gameThumbImg:"Sonic_Frontiers_JP_350x507.webp",
        gameFullImg:"sonic_300x300.jpg",
        gameBriefDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ",
        gameDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, reiciendis nulla obcaecati eo adipisci mollitia in. Vel, necessitatibus. Exercitationem, sequi, pariatur animi explicabo quia deserunt. Expedita!",
        gamerating: "E",
    
    },

    {
        gameTitle: "Splatoon 3",
        gameThumbImg:"splatoon_350x507.webp",
        gameFullImg:"splatoon_300x300.jpg",
        gameBriefDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ",
        gameDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, reiciendis nulla obcaecati eo adipisci mollitia in. Vel, necessitatibus. Exercitationem, sequi, pariatur animi explicabo quia deserunt. Expedita!",
        gamerating: "E",
    
    },

    {
        gameTitle: "The Legend of Zelda",
        gameThumbImg:"zelda_350x507.webp",
        gameFullImg:"zelda_300x300.jpg",
        gameBriefDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ",
        gameDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, reiciendis nulla obcaecati eo adipisci mollitia in. Vel, necessitatibus. Exercitationem, sequi, pariatur animi explicabo quia deserunt. Expedita!",
        gamerating: "E",
    
    },
];
    


function loadData() {
  $.each(GAMES, function (idx, game){
    $("#app").append(`<div id="${idx}" <div class="game-holder">
    <h4>${game.gameTitle}</h4>
    <div class="game-image">
      <img src="images/${game.gameThumbImg}" alt="${game.gameTitle}" />
    </div>
    <div class="brief-rating">
      <div class="brief-des">
        ${game.gameBriefDescription}
      </div>
      <div class="rating">Rating: ${game.gamerating}</div>
    </div>
  </div>`);
  });

// for(let i = 0; i < GAMES.length; i++){
//     console.log(GAMES[i].gameTitle);
//     }
}

function initListeners() {}

$(document).ready(function (){
    // initListeners();
    loadData();
})