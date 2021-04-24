input.onButtonPressed(Button.A, function () {
    if (mode == "Start") {
        Cruser.change(LedSpriteProperty.X, 1)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (mode == "Start") {
        if (Cruser == 0) {
        	
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (mode == "Start") {
        Cruser.change(LedSpriteProperty.X, -1)
    }
})
let Cruser: game.LedSprite = null
let mode = ""
basic.showString("Welcome to Bear OS!")
mode = "Start"
Cruser = game.createSprite(0, 1)
let App_10 = game.createSprite(0, 0)
let App_9 = game.createSprite(1, 0)
let App_8 = game.createSprite(2, 0)
let App_7 = game.createSprite(3, 0)
let App_6 = game.createSprite(4, 0)
let App_5 = game.createSprite(0, 2)
let App_4 = game.createSprite(1, 2)
let App_3 = game.createSprite(2, 2)
let App_2 = game.createSprite(3, 2)
let App_1 = game.createSprite(4, 2)
