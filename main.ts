controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (randompick == 0) {
        info.changeScoreBy(1)
    }
    generate()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (randompick == 0) {
        info.changeScoreBy(1)
    }
    generate()
})
function generate () {
    randompick = randint(0, 1)
    if (randompick == 0) {
        mySprite.sayText("Push A")
    } else {
        mySprite.sayText("Push B")
    }
}
let randompick = 0
let mySprite: Sprite = null
game.splash("Push A or B as directed")
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . f f f f f f . f f f f f f . 
    . f f 3 3 3 3 f f f 3 3 3 3 f f 
    . f 3 3 3 3 3 3 f 3 3 3 3 3 3 f 
    . f 3 3 3 3 3 3 3 3 3 3 1 3 3 f 
    . f 3 3 3 3 3 3 3 3 3 1 3 3 3 f 
    . f 3 3 3 3 3 b b b 1 3 3 3 3 f 
    . f 3 3 3 3 b b b b b 3 3 3 3 f 
    . f f 3 3 b b b b b b b 3 3 f f 
    . . f f 3 b b b b b b b 3 f f . 
    . . . f f b b b b b b b f f . . 
    . . . . f f b b b b b f f . . . 
    . . . . . f f b b b f f . . . . 
    . . . . . . f f b f f . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
info.startCountdown(20)
