/** 
Title: 
Creator:
Description:

 */
//  Begin adding your game below.
info.setLife(1)
scene.setBackgroundImage(img`
    3333bb444.......................................................................................................................................................
    3334b444411111..................................................................................................................................................
    33bbb4444111111111..............................................................................................................................................
    3b44444441111111111111..........................................................................................................................................
    bb444444411111111111111.........................................................................................................................................
    b444444441111111111111..........................................................................................................................................
    4444444431111111111111..........................................................................................................................................
    444444443111111111111...........................................................................................................................................
    444444433b111111111.............................................................................................................................................
    444444433b11111111..............................................................................................................................................
    4444444331111111................................................................................................................................................
    444444bb111111111...............................................................................................................................................
    4444444b11111111111.............................................................................................................................................
    444444441111111111111...........................................................................................................................................
    444444444411111111111111........................................................................................................................................
    44444444441111111111111111......................................................................................................................................
    44444444441111111111111111......................................................................................................................................
    4444444444111111111111111.......................................................................................................................................
    44444444441111111111111.........................................................................................................................................
    44444444441111111111............................................................................................................................................
    444444444111111111..............................................................................................................................................
    4444444411111111................................................................................................................................................
    44444444111111..................................................................................................................................................
    444444441111111111..............................................................................................................................................
    4444444444111111111111..........................................................................................................................................
    4444444444111111111111111.......................................................................................................................................
    44444444441111111111111111......................................................................................................................................
    4444444444111111111111111.......................................................................................................................................
    444444444411111111111111........................................................................................................................................
    4444444441111111111.............................................................................................................................................
    4444444411111111................................................................................................................................................
    4444444411111111111.............................................................................................................................................
    4444444b1311111111111...........................................................................................................................................
    4444444b3311111111111111........................................................................................................................................
    4444444b33111111111111111.......................................................................................................................................
    44444444b311111111111111........................................................................................................................................
    444444444411111111111111........................................................................................................................................
    44444444441111111111111.........................................................................................................................................
    444444444411111111111...........................................................................................................................................
    4444444444111111111.............................................................................................................................................
    444444444411111111..............................................................................................................................................
    44444441111111111...............................................................................................................................................
    444444411111111111111...........................................................................................................................................
    444444411111111111111111........................................................................................................................................
    44444441111111111111111111......................................................................................................................................
    444444444411111111111111111.....................................................................................................................................
    44444444441111111111111111111...................................................................................................................................
    444444444411111111111111111.....................................................................................................................................
    44444444441111111111111111......................................................................................................................................
    444444444411111111111111........................................................................................................................................
    4444444444111111111111..........................................................................................................................................
    444444444111111111111...........................................................................................................................................
    444444444111111111..............................................................................................................................................
    4444444441111111................................................................................................................................................
    44444441111111111...............................................................................................................................................
    44444441111111111111............................................................................................................................................
    44444441111111111111111111......................................................................................................................................
    44444444411111111111111111......................................................................................................................................
    444444444111111111111111111.....................................................................................................................................
    44444444411111111111111111......................................................................................................................................
    44444444411111111111111.........................................................................................................................................
    4444444441111111111.............................................................................................................................................
    44444444411111111...............................................................................................................................................
    4444444444111111111.............................................................................................................................................
    444444443311111111111...........................................................................................................................................
    444444433331111111111111........................................................................................................................................
    444444b333311111111111111.......................................................................................................................................
    444444b3331111111111111111......................................................................................................................................
    444444bb3311111111111111111.....................................................................................................................................
    4444444b331111111111111111......................................................................................................................................
    4444444bb3111111111111..........................................................................................................................................
    444444444b1111111111............................................................................................................................................
    444444444111111111..............................................................................................................................................
    444444444111111111111...........................................................................................................................................
    444444444111111111111111........................................................................................................................................
    444444444411111111111111........................................................................................................................................
    4444444444111111111111111.......................................................................................................................................
    444444444411111111111111........................................................................................................................................
    4444444444111111111111..........................................................................................................................................
    44444444441111111111............................................................................................................................................
    4444444444111111111.............................................................................................................................................
    444444444411111111..............................................................................................................................................
    44444444111111111...............................................................................................................................................
    4444444411111111111111..........................................................................................................................................
    4444444411111111111111111.......................................................................................................................................
    44444444111111111111111111......................................................................................................................................
    4444444444111111111111111111....................................................................................................................................
    44444444441111111111111111......................................................................................................................................
    444444444411111111111111........................................................................................................................................
    4444444444111111111111..........................................................................................................................................
    4444444444111111111.............................................................................................................................................
    444444444411111111..............................................................................................................................................
    44444444111111111...............................................................................................................................................
    444444441111111111..............................................................................................................................................
    4444444411111111111111..........................................................................................................................................
    44444444111111111111111.........................................................................................................................................
    44444444441111111111111.........................................................................................................................................
    444444444411111111111111........................................................................................................................................
    44444444441111111111111.........................................................................................................................................
    44444444411111111111............................................................................................................................................
    4444444411111111111111..........................................................................................................................................
    4444444411111111111111111.......................................................................................................................................
    44444444111111111111111111......................................................................................................................................
    4444444411111111111111111.......................................................................................................................................
    4444444441111111111111111.......................................................................................................................................
    444444444111111111111111........................................................................................................................................
    444444444111111111111...........................................................................................................................................
    44444444411111111111............................................................................................................................................
    444444444111111111..............................................................................................................................................
    44444444411111111...............................................................................................................................................
    44444444111111111...............................................................................................................................................
    b4444411111111111111............................................................................................................................................
    3b4444111111111111111...........................................................................................................................................
    3bb4441111111111111111..........................................................................................................................................
    3bb444444111111111111...........................................................................................................................................
    3bb444444111111111111...........................................................................................................................................
    343b44411111111111111111111.....................................................................................................................................
    3333b44111111111111111111.......................................................................................................................................
    33333bb111111111111111111.......................................................................................................................................
    33333341111111111111111.........................................................................................................................................
`)
let Player = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . e e e e e . . . . .
    . . . . . e e e e e e e . . . .
    . . . . . d d d d d d e e . . .
    . . . . . d d d d d d e e . . .
    . . . . . d d d d d d . . . . .
    . . . . . d d d d d d . . . . .
    . . . . . d d d d d d . . . . .
    . . . . . d d d d d d . . . . .
    . . . . . . b b a a . . . . . .
    . . . . . d a a a a d . . . . .
    . . . . . . a a a a . . . . . .
    . . . . . . a a b c . . . . . .
    . . . . . . a . . a . . . . . .
    . . . . . . . . . . . . . . . .
`)
Player.x = 40
Player.ay = 150
