import platform from '../img/platform_1.png'
import platform_wide from '../img/platform_wide.png'
import platform_thin from '../img/platform_thin.png' 
import clouds from '../img/clouds.png'
import sea from '../img/sea.png'
import background from '../img/background.png'
import night_city from '../img/far-grounds.png'
import night_city_2 from '../img/night_city_2.png'
import music from '../audio/music.mp3'


import spriteRunRight from '../img/spriteRunRight.png'
import spriteRunLeft from '../img/spriteRunLeft.png'
import spriteStandRight from '../img/spriteStandRight.png'
import spriteStandLeft from '../img/spriteStandLeft.png'
import spriteGoomba from '../img/spriteGoomba.png'


const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

const musicAudio = new Audio(music)

document.addEventListener('click', function() {
  // Play the audio when the document is clicked
  musicAudio.play();
});


canvas.width = 1024
canvas.height = 576

const gravity = 1.5

class Player {
    constructor() {
      this.speed = 7
        this.position = {
            x: 75,
            y: 250
        }
        this.velocity = {
            x: 0,
            y: 1
        }
        this.width = 66
        this.height = 150

        this.image = createImage(spriteStandRight)
        this.frames = 0
        this.sprites = {
          stand: {
            right: createImage(spriteStandRight),
            left: createImage(spriteStandLeft),
            cropWidth: 177,
            width: 66
          },
          run: {
            right: createImage(spriteRunRight),
            left: createImage(spriteRunLeft),
            cropWidth: 340.875,
            width: 127.875
          }
        }

        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 177
    }

    draw() {
      c.drawImage(
        this.currentSprite, 
        this.currentCropWidth * this.frames,
        0,
        this.currentCropWidth,
        400,
        this.position.x, 
        this.position.y, 
        this.width, 
        this.height
        )
    }

    update() {
        this.frames ++ 
        if(this.frames > 59 && this.currentSprite === this.sprites.stand.right) 
        this.frames = 0
        else if(this.frames > 59 && this.currentSprite === this.sprites.stand.left) 
        this.frames = 0
        else if (this.frames > 29 && this.currentSprite === this.sprites.run.right) 
        this.frames = 0
        else if (this.frames > 29 && this.currentSprite === this.sprites.run.left) 
        this.frames = 0
        this.draw()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if (this.position.y + this.height + 
          this.velocity.y <= canvas.height)
          this.velocity.y += gravity

    }
}

class Platform {
    constructor({x, y, image}) {
        this.position = {
            x,
            y
        }

        this.image = image
        if(this.image === platformWideImage){
        this.width = 280
        this.height = image.height
        }
        else if (this.image === platformImage){
          this.width = 80
          this.height = 20
        }
        else if (this.image === platformThinImage){
          this.width = 10
          this.height = 20
        }
    }

    draw() {
      c.drawImage(this.image, this.position.x,
         this.position.y)
    }
}

class Generics {
  constructor({x, y, image}) {
      this.position = {
          x,
          y
      }

      this.image = image
      this.width = image.width
      this.height = image.height
  }

  draw() {
    c.drawImage(this.image, this.position.x,
       this.position.y)
  }
}

function createImage(imageSrc) {
const image = new Image()
image.src = imageSrc
return image
}

class Goomba {
  constructor({position, velocity, distance = {
    limit: 50,
    traveled: 0
  }}) {
    this.position = {
      x: position.x,
      y: position.y
    }
    this.velocity = {
      x: velocity.x,
      y: velocity.y
    }

    this.width = 43.33
    this.height = 50

    this.image = createImage(spriteGoomba)
    this.frames = 0

    this.distance = distance
  }

  draw() {
    c.drawImage(
      this.image, 
      130 * this.frames,
      0,
      130,
      150,
      this.position.x, 
      this.position.y, 
      this.width, 
      this.height
      )
  }

  update(){
    this.frames ++
    if (this.frames >= 58) this.frames = 0
    this.draw()

    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    if (this.position.y + this.height + 
      this.velocity.y <= canvas.height)
      this.velocity.y += gravity

      //goomba movement back and forth 

      this.distance.traveled += Math.abs(this.velocity.x) 

      if (this.distance.traveled > this.distance.limit) {
        this.distance.traveled = 0
        this.velocity.x = -(this.velocity.x)
      }
  }
}

let platformImage = createImage(platform)
let platformWideImage = createImage(platform_wide)
let platformThinImage = createImage(platform_thin)

let player = new Player()
let goombas = [
  new Goomba({
    position: {
      x: 400, 
      y: 450
    },
    velocity: {
      x: -1.5, 
      y: 0
    },
    distance: {
      limit: 500,
      traveled: 0
    }
  }),
  new Goomba({
    position: {
      x: 1500, 
      y: 400
    },
    velocity: {
      x: -1.5, 
      y: 0
    },
    distance: {
    limit: 200,
    traveled: 0 
    }
  }),
  new Goomba({
    position: {
      x: 3000, 
      y: 400
    },
    velocity: {
      x: -1.5, 
      y: 0
    },
    distance: {
    limit: 225,
    traveled: 0 
    }
  }),
  new Goomba({
    position: {
      x: 3600, 
      y: 400
    },
    velocity: {
      x: -1.5, 
      y: 0
    },
    distance: {
    limit: 225,
    traveled: 0 
    }
  })
]

let platforms = [new Platform({
  x: 0, y: 550, image: platformWideImage
}), new Platform({
    x: 300, y:550, image: platformWideImage
}), new Platform({
  x: 850, y: 300, image: platformImage
}), new Platform({
  x: 1300, y: 550, image: platformWideImage
}), new Platform({
  x: 1700, y: 300, image: platformImage
}), new Platform({
  x: 2150, y: 350, image: platformThinImage
}),new Platform({
  x: 2500, y: 250, image: platformImage
}), new Platform({
  x: 2800, y: 550, image: platformWideImage
}), new Platform({
  x: 3400, y: 550, image: platformWideImage
}), new Platform({
  x: 3900, y: 270, image: platformImage
}), new Platform({
  x: 4300, y: 550, image: platformWideImage
}), new Platform({
  x: 4600, y: 550, image: platformWideImage
}), new Platform({
  x: 4800, y: 550, image: platformWideImage
})]

let backgroundImage = [
  new Generics({
    x: -1,
    y: -1,
    image: createImage(background)
  }),
  new Generics({
    x: 1022,
    y: -1,
    image: createImage(background)
  }),
  new Generics({
    x: 2045,
    y: -1,
    image: createImage(background)
  }),
  new Generics({
    x: 3067,
    y: -1,
    image: createImage(background)
  })
]

let cloudsImage= [
  new Generics({
    x: -1,
    y: 200,
    image: createImage(clouds)
  }),
  new Generics({
    x: -1,
    y: 500,
    image: createImage(sea)
  }), 
  new Generics({
    x: 1020,
    y: 225,
    image: createImage(clouds)
  }), 
  new Generics({
    x: 1020,
    y: 500,
    image: createImage(sea)
  })
]

let cityImage = [
  new Generics({
    x: 5,
    y: 475,
    image: createImage(night_city)
  }),
  new Generics({
    x: 1450,
    y: 256,
    image: createImage(night_city)
  }),
  new Generics({
    x: 2000,
    y: 256,
    image: createImage(night_city)
  }),
  new Generics({
    x: 2700,
    y: 256,
    image: createImage(night_city_2)
  })
]

const keys = {
  right: {
    pressed: false
  }, 
  left: {
    pressed: false
  }
}

let scrollOffset = 0

function isOnTopOfPlatform({object, platform}){
  return (
     object.position.y + object.height <= platform.position.y && 
     object.position.y + object.height + object.velocity.y >= 
     platform.position.y && object.position.x + object.width
     >= platform.position.x && object.position.x < 
     platform.position.x + platform.width
  )
}

function isOnTopOfEnemy({object1, object2}){
  return (
     object1.position.y + object1.height <= object2.position.y 
     && 
     object1.position.y + object1.height + object1.velocity.y >= object2.position.y 
     && 
     object1.position.x + object1.width >= object2.position.x 
     && 
     object1.position.x <= object2.position.x + object2.width
  )
}

function init(){

 platformImage = createImage(platform)

 player = new Player()

 goombas = [
  new Goomba({
    position: {
      x: 400, 
      y: 200
    },
    velocity: {
      x: -1.5, 
      y: 0
    },
    distance: {
      limit: 500,
      traveled: 0
    }
  }),
  new Goomba({
    position: {
      x: 1500, 
      y: 400
    },
    velocity: {
      x: -1.5, 
      y: 0
    },
    distance: {
    limit: 200,
    traveled: 0 
    }
  }),
  new Goomba({
    position: {
      x: 3000, 
      y: 400
    },
    velocity: {
      x: -1.5, 
      y: 0
    },
    distance: {
    limit: 225,
    traveled: 0 
    }
  }),
  new Goomba({
    position: {
      x: 3600, 
      y: 400
    },
    velocity: {
      x: -1.5, 
      y: 0
    },
    distance: {
    limit: 225,
    traveled: 0 
    }
  })
]

platforms = [new Platform({
  x: 0, y: 550, image: platformWideImage
}), new Platform({
    x: 300, y:550, image: platformWideImage
}), new Platform({
  x: 850, y: 300, image: platformImage
}), new Platform({
  x: 1300, y: 550, image: platformWideImage
}), new Platform({
  x: 1700, y: 300, image: platformImage
}), new Platform({
  x: 2150, y: 350, image: platformThinImage
}),new Platform({
  x: 2500, y: 250, image: platformImage
}), new Platform({
  x: 2800, y: 550, image: platformWideImage
}), new Platform({
  x: 3400, y: 550, image: platformWideImage
}), new Platform({
  x: 3900, y: 270, image: platformImage
}), new Platform({
  x: 4300, y: 550, image: platformWideImage
}), new Platform({
  x: 4600, y: 550, image: platformWideImage
}), new Platform({
  x: 4800, y: 550, image: platformWideImage
})]

backgroundImage = [
  new Generics({
    x: -1,
    y: -1,
    image: createImage(background)
  }),
  new Generics({
    x: 1022,
    y: -1,
    image: createImage(background)
  }),
  new Generics({
    x: 2045,
    y: -1,
    image: createImage(background)
  }),
  new Generics({
    x: 3067,
    y: -1,
    image: createImage(background)
  })
]

cloudsImage = [
  new Generics({
    x: -1,
    y: 200,
    image: createImage(clouds)
  }),,
  new Generics({
    x: -1,
    y: 500,
    image: createImage(sea)
  }), 
  new Generics({
    x: 1020,
    y: 225,
    image: createImage(clouds)
  }), 
  new Generics({
    x: 1020,
    y: 500,
    image: createImage(sea)
  })
]

cityImage = [
  new Generics({
    x: 5,
    y: 475,
    image: createImage(night_city)
  }),
  new Generics({
    x: 1450,
    y: 256,
    image: createImage(night_city)
  }),
  new Generics({
    x: 2000,
    y: 256,
    image: createImage(night_city)
  }),
  new Generics({
    x: 2700,
    y: 256,
    image: createImage(night_city_2)
  })
]
scrollOffset = 0
}
function animate() { 
    requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)

    //updating 

    backgroundImage.forEach((backgroundImage) => {
      backgroundImage.draw()
    })

    cloudsImage.forEach((cloudsImage) => {
      cloudsImage.draw()
    })

    cityImage.forEach((cityImage) => {
      cityImage.draw()
    })
    
    platforms.forEach((platform) => {
        platform.draw()
    })

    goombas.forEach((goombas, index) => {
      goombas.update()

      if (isOnTopOfEnemy({
        object1: player,
        object2: goombas
      })) {
        player.velocity.y -= 40
          goombas.splice(index,1)
      }
      else if (
        player.position.x + player.width >= goombas.position.x
        &&
        player.position.y +player.height >= goombas.position.y
        && 
        player.position.x  <= goombas.position.x + goombas.width
        ) {
          init()
        }
    })

    player.update()
    

    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = player.speed
    } else if ((keys.left.pressed && player.position.x > 100)
      || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
        player.velocity.x = -player.speed
    } else {
        player.velocity.x = 0

        //scrolling 

        if (keys.right.pressed) {
            scrollOffset += player.speed
            platforms.forEach(platform => {
                platform.position.x -= player.speed
            })
            backgroundImage.forEach(backgroundImage => {
              backgroundImage.position.x -= player.speed * 0.01
            })
            cloudsImage.forEach(cloudsImage => {
              cloudsImage.position.x -= player.speed *0.05
            })
            cityImage.forEach(cityImage => {
              cityImage.position.x -= player.speed *0.07
            })
            goombas.forEach(goomba => {
              goomba.position.x -= player.speed
          })
        } else if (keys.left.pressed && scrollOffset > 0) {
            scrollOffset -= player.speed
            platforms.forEach(platform => {
                platform.position.x += player.speed
            })
            backgroundImage.forEach(backgroundImage => {
              backgroundImage.position.x += player.speed *0.01
            })
            cloudsImage.forEach(cloudsImage => {
              cloudsImage.position.x += player.speed *0.05
            })
            cityImage.forEach(cityImage => {
              cityImage.position.x += player.speed *0.07
            })
            goombas.forEach(goomba => {
              goomba.position.x += player.speed
          })
        }
    }

    //platform collision detection

platforms.forEach(platform => {
    if  (
      isOnTopOfPlatform({
        object: player,
        platform
      })){
        player.velocity.y = 0
      }

      goombas.forEach((goomba) => {
        if (isOnTopOfPlatform({
          object: goomba,
          platform
        })){
          goomba.velocity.y = 0
        }
      })
      
    
})

    // win condition
    if (scrollOffset > 4100){
      console.log('You Win!')
      init()
    }

    //lose condition

    if (player.position.y >= canvas.height){
      console.log('You Lose')
      init()
    }

}

animate()

addEventListener('keydown', ({keyCode}) => {
    switch (keyCode) {
        case 65:
            keys.left.pressed = true
            player.currentSprite = player.sprites.run.left
            player.currentCropWidth = player.sprites.run.cropWidth
            player.width = player.sprites.run.width
            break
        case 68:
            keys.right.pressed = true
            player.currentSprite = player.sprites.run.right
            player.currentCropWidth = player.sprites.run.cropWidth
            player.width = player.sprites.run.width
            break
        case 87:
            player.velocity.y -= 30
            break
    }
})

addEventListener('keyup', ({keyCode}) => {
    switch (keyCode) {
        case 65:
            keys.left.pressed = false
            player.currentSprite = player.sprites.stand.left
            player.currentCropWidth = player.sprites.stand.cropWidth
            player.width = player.sprites.stand.width
            break
        case 68:
            keys.right.pressed = false
            player.currentSprite = player.sprites.stand.right
            player.currentCropWidth = player.sprites.stand.cropWidth
            player.width = player.sprites.stand.width
            break
        case 87:
            break
    }
})
