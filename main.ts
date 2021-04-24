input.onButtonPressed(Button.A, function () {
    if (mode == "Start") {
        Cruser.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (mode == "Start") {
        Cruser.change(LedSpriteProperty.Y, 2)
    }
})
input.onButtonPressed(Button.B, function () {
    if (mode == "Start") {
        Cruser.change(LedSpriteProperty.X, 1)
    }
})
input.onGesture(Gesture.Shake, function () {
    if (mode == "Start") {
        if (Crusor_pos == 0) {
            if (crusor_pos_y == 1) {
                mode = "App 1"
            }
        }
    }
})
input.onGesture(Gesture.ThreeG, function () {
    if (mode == "Start") {
        Cruser.change(LedSpriteProperty.Y, -2)
    }
})
let crusor_pos_y = 0
let Crusor_pos = 0
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
Crusor_pos = Cruser.get(LedSpriteProperty.X)
crusor_pos_y = Cruser.get(LedSpriteProperty.Y)
basic.forever(function () {
    if (mode == "App 1") {
        Cruser = game.createSprite(0, 1)
        App_10 = game.createSprite(0, 0)
        App_9 = game.createSprite(1, 0)
        App_8 = game.createSprite(2, 0)
        App_7 = game.createSprite(3, 0)
        App_6 = game.createSprite(4, 0)
        App_5 = game.createSprite(0, 2)
        App_4 = game.createSprite(1, 2)
        App_3 = game.createSprite(2, 2)
        App_2 = game.createSprite(3, 2)
        App_1 = game.createSprite(4, 2)
    }
})
