var config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 610,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 450 },
            debug: false
        }
    },
    key: "sceneA",
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var button;



function preload(){
    
    this.load.image('plateform1', "assets/Images/plateform1.png");
    this.load.spritesheet('hero', 'assets/Images/hero.png', { frameWidth: 32, frameHeight: 64 });
    this.load.spritesheet('monster1', 'assets/Images/monstre1.png', { frameWidth: 96, frameHeight: 96 });
    this.load.spritesheet('swords', 'assets/Images/monstre1.png', { frameWidth: 32, frameHeight: 32 });
}

function create() {
    this.scene.pause("SceneA");
    platforms = this.physics.add.staticGroup();
    platforms.create(200 ,600, 'plateform1')
    platforms.create(600 ,600, 'plateform1')
    platforms.create(1000 ,600, 'plateform1')
    platforms.create(1400 ,600, 'plateform1')

    player = this.physics.add.sprite(100, 400, 'hero');
    sword = this.physics.add.staticGroup();
    sword.create(player.x, player.y, [ { key: 'hero', frame: 11 } ]);
    monster = this.physics.add.sprite(300,400, 'monster1');
    
    console.log(player);

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    monster.setCollideWorldBounds(true);
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(monster, platforms);
    this.physics.add.collider(player, monster);

    cursors = this.input.keyboard.createCursorKeys();

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('hero', { start: 25, end: 32 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'hero', frame: 11 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('hero', { start: 17, end: 23 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key:"monster",
        rames: this.anims.generateFrameNumbers('monster1', { start: 4, end: 6 }),
        frameRate: 10,
        repeat: -1
    })
        


}


function update(){
    var button = document.getElementById('boutton')
    button.addEventListener('click', function(){
        button.style.display= 'none';
    });

if (cursors.left.isDown)
    {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);

        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down)
    {
        player.setVelocityY(-300);
    }
}