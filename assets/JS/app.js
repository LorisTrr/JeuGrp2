var config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
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
function preload(){
	this.load.spritesheet('hero', 'assets/Images/hero.png', { frameWidth: 32, frameHeight: 64 });
    this.load.spritesheet('monster1', 'assets/Images/monstre1.png', { frameWidth: 96, frameHeight: 96 });
    this.load.spritesheet('swords', 'assets/Images/monstre1.png', { frameWidth: 32, frameHeight: 32 });
	this.load.image('tiles', 'assets/Images/platformerBricks_tilesheet.png')
	this.load.tilemapTiledJSON('tilemap', 'assets/Images/test.json')
}

function create() {
	const map = this.make.tilemap({ key: 'tilemap' })
	const tileset = map.addTilesetImage('platformerBricks_tilesheet', 'tiles')
	map.createLayer('Calque de Tuiles 1', tileset)
	const plateformes = map.createStaticLayer("Calque de Tuiles 2",tileset);  
	map.createLayer('Calque de Tuiles 3', tileset)
	

	player = this.physics.add.sprite(100, 400, 'hero');
    sword = this.physics.add.staticGroup();
    sword.create(player.x, player.y, [ { key: 'hero', frame: 11 } ]);
    monster = this.physics.add.sprite(1800,800, 'monster1');

	plateformes.setCollisionByProperty({ solide: true }); 
	this.physics.add.collider(player, plateformes);
	this.physics.add.collider(monster, plateformes);
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
	// see if enemy and player within 400px of each other

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

    if (cursors.up.isDown)
    {
        player.setVelocityY(-300);
    }
	if (enemy.x < LEFT && enemy.body.velocity.x < 0) {
		enemy.setVelocityX(speed); if (speed < MAX) speed += INC;
	 } 
	else if (enemy.x > RIGHT && enemy.body.velocity.x > 0) {
			enemy.setVelocityX(-speed); 
			if (speed < MAX) speed += INC;
		}
}