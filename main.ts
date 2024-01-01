input.onButtonPressed(Button.A, function () {
    ignition = 1
    basic.showIcon(IconNames.Happy)
    radio.sendValue("ignition", ignition)
})
input.onButtonPressed(Button.B, function () {
    ignition = 0
    basic.showIcon(IconNames.Surprised)
    radio.sendValue("ignition", ignition)
    basic.showIcon(IconNames.Asleep)
})
let roll = 0
let pitch = 0
let ignition = 0
radio.setGroup(1)
ignition = 0
radio.sendValue("ignition", 0)
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
    if (ignition == 1) {
        pitch = Math.round(pins.map(
        input.rotation(Rotation.Pitch),
        -35,
        35,
        -2,
        2
        ))
        roll = Math.round(pins.map(
        input.rotation(Rotation.Roll),
        -35,
        35,
        -2,
        2
        ))
        led.toggle(roll + 2, pitch + 2)
        radio.sendValue("pitch", pitch)
        radio.sendValue("roll", roll)
    }
})
