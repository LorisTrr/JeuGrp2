var config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 450 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var button;



function preload(){
    
    this.load.image('fond', "assets/Images/donjon.jpg");
}

function create() {
    this.add.image(window.innerWidth / 2 , window.innerHeight / 2, 'fond');
}


function update(){
var button = document.getElementById('boutton')
button.addEventListener('click', function(){
    button.style.display= 'none';
});
}