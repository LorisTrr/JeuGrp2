var config = {
    type: Phaser.AUTO,
    width: 1920 ,
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

function preload(){
    this.load.image('fond','assets/Images/donjon.jpg' )
}

function create(){
    this.add.image(400, 300, 'fond');
}

function update(){

}