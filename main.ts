radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == myID) {
        found = true
        drawScreen()
    } else {
        counter = 0
    }
})
input.onButtonPressed(Button.A, function () {
    if (display == _0graph) {
        display = _3dB
        drawScreen()
    } else if (display == _3dB) {
        display = _0graph
        drawScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(myID)
})
function drawScreen () {
    if (display == _2smiley) {
        basic.showIcon(IconNames.Happy)
    } else {
        if (display == _1X) {
            basic.showIcon(IconNames.No)
        } else if (display == _3dB) {
            basic.showNumber(radio.receivedPacket(RadioPacketProperty.SignalStrength))
        } else if (display == _0graph) {
            led.plotBarGraph(
            Math.map(radio.receivedPacket(RadioPacketProperty.SignalStrength), -128, -28, 0, 9),
            9
            )
        }
        display = _0graph
    }
}
let counter = 0
let found = false
let _0graph = 0
let display = 0
let myID = 0
let _2smiley = 0
let _3dB = 0
let _1X = 0
_1X = 1
_3dB = 3
_2smiley = 2
radio.setGroup(1)
myID = 8
display = _0graph
found = false
loops.everyInterval(500, function () {
    if (found == true) {
        display = _2smiley
        drawScreen()
    } else {
        display = _0graph
        drawScreen()
        counter += 1
        if (counter >= 2) {
            display = _1X
            drawScreen()
        }
    }
})
