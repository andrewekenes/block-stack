namespace SpriteKind {
    export const red = SpriteKind.create()
    export const yello = SpriteKind.create()
    export const green = SpriteKind.create()
    export const blue = SpriteKind.create()
    export const purp = SpriteKind.create()
    export const block = SpriteKind.create()
    export const cover = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (play == 0) {
        play = 1
        info.startCountdown(30)
        cover.destroy()
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (play == 0) {
        play = 1
        info.startCountdown(30)
        cover.destroy()
    }
})
scene.onOverlapTile(SpriteKind.block, assets.tile`myTile1`, function (sprite, location) {
    controller.moveSprite(sprite, 0, 0)
})
sprites.onOverlap(SpriteKind.block, SpriteKind.block, function (sprite, otherSprite) {
    controller.moveSprite(sprite, 0, 0)
    info.changeScoreBy(10)
    controller.moveSprite(otherSprite, 0, 0)
    sprite.setVelocity(0, 0)
    otherSprite.setVelocity(0, 0)
})
let mySprite: Sprite = null
let play = 0
let cover: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
cover = sprites.create(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111ffffffffffffffffffffff111ffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111ffff111ffffffffffff1111111fffffff1111fffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffff11111ffff1111fffffffffff11111111ffffff1111ff111ffffffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222ffffffff111fffff11111fff1111fffffffffff111111111fffff1111ff111ffffffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222ffffffff111ffffff1111ffff111fffffffffff111111111ffff1111fff111ffffffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222ffffffff111ffffff1111ffff111ffffffffff1111ff1111fff11111fff111f1111fffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222ffffffff111ffffff1111ffff111fffffffff11111fff111fff1111ffff111f1111fffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222ffffffff111fffff11111ffff111fffffffff1111fff1111fff1111ffff11111111fffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222ffffffff111111f11111fffff111fffffffff1111fff1111ff1111fffff1111111ffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222ffffffff111111111111fffff111fffffffff111ffff111fff1111fffff111111fffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222ffffffff11111111111ffffff111fffffffff111ffff111fff1111fffff11111ffffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222ffffffff1111111111fffffff111fffffffff111ffff111fff111fffff111111ffffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222ffffffff111ff1111ffffffff111fffffffff111ffff111fff111fffff111111ffffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222fffffff1111fff1111fffffff111fffffffff111ffff111fff111fffff111111ffffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222fffffff1111fff1111ffffff1111fffffffff111ffff111fff1111ffff1111111fffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222fffffff111fffff1111fffff1111fffffffff111ffff111fff1111ffff1111111fffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222fffffff111ffff11111fffff111ffffffffff111ffff111fff11111fff111f111fffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222fffffff111111111111fffff111ffffffffff1111ff1111ffff1111fff111f111fffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222fffffff111111111111fffff111111fffffff11111f1111ffff11111ff111f1111ffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222fffffff1111111111fffffff111111111ffff111111111ffffff11111f111ff111ffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222ffffffff1111ffffffffffff111111111fffff11111111ffffff11111f1111f111ffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222ffffffffffffffffffffffffffff11111ffffff111111ffffffff1111f1111f111ffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222ffffffffffffffffffffffffffffff111fffffffffffffffffffff111ff111f111ffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222fffffffffffffffffffff11111ffffffffffffffffffffffffffffffffff1111ffffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222fffffffffffffffffffff111111ffffffffffffffffffffffffffffffff111111fffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222fffffffffffffffffff11111111ffffffffffffffffffffffffffffffff111111fffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111ffffffffffffffffffffffffffffffff111111fffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111f111fffffff1111fffffffffffffffffffff111111fffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111f1111fffffff11111ffffffffffffffffffff111111fffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111ff1111ffffff111111fffffffffffffffffff1111111fffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222ffffffffffffffff1111ff1111fffffff1111111ffffffffffffffffff1111111fffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222ffffffffffffffff1111f11111ffffff11111111ffffffffffffffffff1111111fffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222ffffffffffffffff1111f1111fffffff11111111ffffffffffffffffff111f111fffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222ffffffffffffffff111f1111ffffffff111ff111ffffffffffffffffff111f111fffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222ffffffffffffffff11111111fffffff1111111111111111fffffffffff111f111fffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222ffffffffffffffff11111111fffff111111111111111111fffffffffff111f111fffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222ffffffffffffffff111111ffff111111111111111111111fffffffffff111f111fffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222fffffffffffffffff11111ffff1111111111111fffffffffffffffffff1111111fffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222ffffff1111fffffff11111ffff11111111f1111fffffffffffffffffff1111111fffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222ffffff11111ffffff11111ffffffff1111f1111fffffffffffffffffff111111ffffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222ffffff11111fffff1111111fffffff111ff111ffffffffffffffffffff111111ffffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222ffffff111111ffff1111111ffffff1111f1111ffffffffffffff1111ff111111ffffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222ffffff1111111ff1111f111ffffff111ff111ffffffffffff11111111f111111ffffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222fffffff111111111111f111ffffff111f1111ffff1111ffff11111111f11111111ffffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222fffffff11111111111ff1111fffff1111111ffff11111ffff11111111f111111111fffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222fffffff1111111111fff11111fff11111111fff1111111fff1111fffff1111111111ffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222fffffff1111111111ffff1111fff1111111fff11111111ff1111ffffff1111111111ffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222ffffffff1111111fffffff111fff1111111ff111111111ff1111ffffff11111f1111ffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222fffffffff11111ffffffff111fff111111ff1111111111ff111fffffff11111ff111ffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222fffffff111111fffffffff111fff111111ff11111f1111ff111fffffff11111ff111ffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222ffffff1111111ffffffff1111fff11111ff11111ff1111ff111fffffff11111ff111ffff
    fffffffffffffffffffffffffffffffffff22222222222222222222222222ffff22222222222222222222222ffffff11111111fffff111111fff1111ff111111ff111fff111fffffff1111ff1111ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111f111111111111111fff1111f1111111ff111ff1111ffffff11111ff1111ffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111ffff111111111111f1111ff1111fffff111111111111ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111ffffffff11111111111f1111111111fffff11111111111fffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111f111111111111111fff11111111111ffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111ff1111111111111111f1111111111ffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111f111111111111f111ffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffff11111111111f1111fffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111f1111fffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111ff111fffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222fffffffffffffffffffffffffff55555555555555fff555555555555fffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222ffffffffffffffffffffffffff55555555555555fff555555555555fffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222f2222ffffffffffffffffffffffffff55555555555555fff555555555555fffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fff2222fffffffffffffffffffffffff55555555555555fff555555555555fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222ffffffffffffffffffffffff55555555555555fff555555555555fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222ffffffffffffffffffffffff55555555555555fff555555555555fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222fffffffffffffffffffffff55555555555555fff555555555555fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222fff22222ffffffffffffffffffffff55555555555555fff555555555555fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffff2222ffffffffffffffffffffff55555555555555fff555555555555fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff222ffffffff222ffffffffffffffffffffff55555555555555fff555555555555fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffffff55555555555555fff555555555555fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffffff55555555555555fff555555555555fffffffffffffffffffffffffffffffffffffff
    fffffffffffffffff99999999999999fff999999999999ffffffffffffffffffffffffffffffffffffffffffffff55555555555555fff555555555555fffffffffffffffffffffffffffffffffffffff
    fffffffffffffffff99999999999999fff999999999999fffffffffffffffffffffffffff222222fffffffffffff55555555555555fff555555555555fffffffffffffffffffffffffffffffffffffff
    fffffffffffffffff99999999999999fff999999999999fffffffffffff22222ffff22222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffff99999999999999fff999999999999ffffffffff222222222fff22222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffff99999999999999fff999999999999fffffffff2222222222ff22222222fffffffffffffffff55555555555555fff555555555555fffffffffffffaaaaaaaaaaaaffaaaaaaaaafff
    fffffffffffffffff99999999999999fff999999999999ffffffff22222222222ff2222222ffffffffffffffffff55555555555555fff555555555555fffffffffffffaaaaaaaaaaaaffaaaaaaaaafff
    fffffffffffffffff99999999999999fff999999999999fffffff222222fff222ff2222222ffffffffffffffffff55555555555555fff555555555555fffffffffffffaaaaaaaaaaaaffaaaaaaaaafff
    fffffffffffffffff99999999999999fff999999999999ffffff222222ffff222ff222222fffffff222fffffffff55555555555555fff555555555555fffffffffffffaaaaaaaaaaaaffaaaaaaaaafff
    fffffffffffffffff99999999999999fff999999999999ffffff22222ffff2222ff22222fffffff222222fffffff55555555555555fff555555555555fffffffffffffaaaaaaaaaaaaffaaaaaaaaafff
    fffffffffffffffff99999999999999fff999999999999ffffff222fffff22222ff222fffffff22222222fffffff55555555555555fff555555555555fffffffffffffaaaaaaaaaaaaffaaaaaaaaafff
    fffffffffffffffff99999999999999fff999999999999ffffff222fffff2222fff222ffffff2222222222ffffff55555555555555fff555555555555fffffffffffffaaaaaaaaaaaaffaaaaaaaaafff
    fffffffffffffffff99999999999999fff999999999999ffffff222ffff2222ffff2222fffff22222222222fffff55555555555555fff555555555555fffffffffffffaaaaaaaaaaaaffaaaaaaaaafff
    fffffffffffffffff99999999999999fff999999999999ffffff222fff22222ffff2222ffff2222ffff2222fffff55555555555555fff555555555555fffffffffffffaaaaaaaaaaaaffaaaaaaaaafff
    fffffffffffffffff99999999999999fff999999999999ffffff2222222222fffff2222ffff2222fffff222fffff55555555555555fff555555555555fffffffffffffaaaaaaaaaaaaffaaaaaaaaafff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff222222222ffffff2222ffff2222fffff2222ffff55555555555555fff555555555555fffffffffffffaaaaaaaaaaaaffaaaaaaaaafff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff2222222fffffff222fffff2222fffff2222ffff55555555555555fff555555555555fffffffffffffaaaaaaaaaaaaffaaaaaaaaafff
    fffffffffffffffff99999999999999fff999999999999fffffffffffffffffffffffffffff2222222222222ffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaffaaaaaaaaafff
    fffffffffffffffff99999999999999fff999999999999fffffffffffffffffffffffffffff222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffff99999999999999fff999999999999fffffffffffffffffffffffffffff22222222222ffffffffffffffffffffffff777777777777ff7777777fffaaaaaaaaaaaaffaaaaaaaaafff
    fffffffffffffffff99999999999999fff999999999999fffffffffffffffffffffffffffff2222ff22222ffffffffffffffffffffffff777777777777ff7777777fffaaaaaaaaaaaaffaaaaaaaaafff
    fffffffffffffffff99999999999999fff999999999999fffffffffffffffffffffffffffff2222fff2222ffffffffffffffffffffffff777777777777ff7777777fffaaaaaaaaaaaaffaaaaaaaaafff
    fffffffffffffffff99999999999999fff999999999999fffffffffffffffffffffffffffff2222ffff222ffffffffffffffffffffffff777777777777ff7777777fffaaaaaaaaaaaaffaaaaaaaaafff
    fffffffffffffffff99999999999999fff999999999999fffffffffffffffffffffffffffff2222ffff222ffffffffffffffffffffffff777777777777ff7777777fffaaaaaaaaaaaaffaaaaaaaaafff
    fffffffffffffffff99999999999999fff999999999999fffffffffffffffffffffffffffff22222222222ffffffffffffffffffffffff777777777777ff7777777fffaaaaaaaaaaaaffaaaaaaaaafff
    fffffffffffffffff99999999999999fff999999999999fffffffffffffffffffffffffffff22222222222ffffffffffffffffffffffff777777777777ff7777777fffaaaaaaaaaaaaffaaaaaaaaafff
    fffffffffffffffff99999999999999fff999999999999fffffffffffffffffffffffffffff22222222222ffffffffffffffffffffffff777777777777ff7777777fffaaaaaaaaaaaaffaaaaaaaaafff
    fffffffffffffffff99999999999999fff999999999999ffffffffffffffffffffffffffffff222222222fffffffffffffffffffffffff777777777777ff7777777fffaaaaaaaaaaaaffaaaaaaaaafff
    fffffffffffffffff99999999999999fff999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777ff7777777fffaaaaaaaaaaaaffaaaaaaaaafff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777ff7777777fffffffffffffffffffffffffffff
    `, SpriteKind.cover)
play = 0
game.onUpdateInterval(3000, function () {
    if (play == 1) {
        if (Math.percentChance(100 / 5)) {
            mySprite = sprites.create(img`
                f f f f f f f f f f f f f f f f 
                f 2 2 2 2 2 2 2 f 2 2 2 2 2 2 f 
                f 2 2 2 2 2 2 2 f 2 2 2 2 2 2 f 
                f 2 2 2 2 2 2 2 f 2 2 2 2 2 2 f 
                f 2 2 2 2 2 2 2 f 2 2 2 2 2 2 f 
                f 2 2 2 2 2 2 2 f 2 2 2 2 2 2 f 
                f 2 2 2 2 2 2 2 f 2 2 2 2 2 2 f 
                f 2 2 2 2 2 2 2 f 2 2 2 2 2 2 f 
                f f f f f f f f f f f f f f f f 
                f 2 2 2 2 2 2 2 f 2 2 2 2 2 2 f 
                f 2 2 2 2 2 2 2 f 2 2 2 2 2 2 f 
                f 2 2 2 2 2 2 2 f 2 2 2 2 2 2 f 
                f 2 2 2 2 2 2 2 f 2 2 2 2 2 2 f 
                f 2 2 2 2 2 2 2 f 2 2 2 2 2 2 f 
                f 2 2 2 2 2 2 2 f 2 2 2 2 2 2 f 
                f f f f f f f f f f f f f f f f 
                `, SpriteKind.block)
        } else if (Math.percentChance(100 / 5)) {
            mySprite = sprites.create(img`
                f f f f f f f f f f f f f f f f 
                f 5 5 5 5 5 5 5 f 5 5 5 5 5 5 f 
                f 5 5 5 5 5 5 5 f 5 5 5 5 5 5 f 
                f 5 5 5 5 5 5 5 f 5 5 5 5 5 5 f 
                f 5 5 5 5 5 5 5 f 5 5 5 5 5 5 f 
                f 5 5 5 5 5 5 5 f 5 5 5 5 5 5 f 
                f 5 5 5 5 5 5 5 f 5 5 5 5 5 5 f 
                f 5 5 5 5 5 5 5 f 5 5 5 5 5 5 f 
                f f f f f f f f f f f f f f f f 
                f 5 5 5 5 5 5 5 f 5 5 5 5 5 5 f 
                f 5 5 5 5 5 5 5 f 5 5 5 5 5 5 f 
                f 5 5 5 5 5 5 5 f 5 5 5 5 5 5 f 
                f 5 5 5 5 5 5 5 f 5 5 5 5 5 5 f 
                f 5 5 5 5 5 5 5 f 5 5 5 5 5 5 f 
                f 5 5 5 5 5 5 5 f 5 5 5 5 5 5 f 
                f f f f f f f f f f f f f f f f 
                `, SpriteKind.block)
        } else if (Math.percentChance(100 / 5)) {
            mySprite = sprites.create(img`
                f f f f f f f f f f f f f f f f 
                f 7 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
                f 7 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
                f 7 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
                f 7 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
                f 7 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
                f 7 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
                f 7 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
                f f f f f f f f f f f f f f f f 
                f 7 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
                f 7 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
                f 7 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
                f 7 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
                f 7 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
                f 7 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
                f f f f f f f f f f f f f f f f 
                `, SpriteKind.block)
        } else if (Math.percentChance(100 / 5)) {
            mySprite = sprites.create(img`
                f f f f f f f f f f f f f f f f 
                f 9 9 9 9 9 9 9 f 9 9 9 9 9 9 f 
                f 9 9 9 9 9 9 9 f 9 9 9 9 9 9 f 
                f 9 9 9 9 9 9 9 f 9 9 9 9 9 9 f 
                f 9 9 9 9 9 9 9 f 9 9 9 9 9 9 f 
                f 9 9 9 9 9 9 9 f 9 9 9 9 9 9 f 
                f 9 9 9 9 9 9 9 f 9 9 9 9 9 9 f 
                f 9 9 9 9 9 9 9 f 9 9 9 9 9 9 f 
                f f f f f f f f f f f f f f f f 
                f 9 9 9 9 9 9 9 f 9 9 9 9 9 9 f 
                f 9 9 9 9 9 9 9 f 9 9 9 9 9 9 f 
                f 9 9 9 9 9 9 9 f 9 9 9 9 9 9 f 
                f 9 9 9 9 9 9 9 f 9 9 9 9 9 9 f 
                f 9 9 9 9 9 9 9 f 9 9 9 9 9 9 f 
                f 9 9 9 9 9 9 9 f 9 9 9 9 9 9 f 
                f f f f f f f f f f f f f f f f 
                `, SpriteKind.block)
        } else if (Math.percentChance(100 / 5)) {
            mySprite = sprites.create(img`
                f f f f f f f f f f f f f f f f 
                f a a a a a a a f a a a a a a f 
                f a a a a a a a f a a a a a a f 
                f a a a a a a a f a a a a a a f 
                f a a a a a a a f a a a a a a f 
                f a a a a a a a f a a a a a a f 
                f a a a a a a a f a a a a a a f 
                f a a a a a a a f a a a a a a f 
                f f f f f f f f f f f f f f f f 
                f a a a a a a a f a a a a a a f 
                f a a a a a a a f a a a a a a f 
                f a a a a a a a f a a a a a a f 
                f a a a a a a a f a a a a a a f 
                f a a a a a a a f a a a a a a f 
                f a a a a a a a f a a a a a a f 
                f f f f f f f f f f f f f f f f 
                `, SpriteKind.block)
        }
        mySprite.setStayInScreen(true)
        mySprite.setVelocity(0, 35)
        mySprite.setPosition(randint(30, 85), 22)
        controller.moveSprite(mySprite, 100, 0)
    }
})
