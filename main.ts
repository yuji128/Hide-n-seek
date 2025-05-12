radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 8) {
        basic.showIcon(IconNames.Happy)
    } else {
    	
    }
    counter = 0
})
input.onButtonPressed(Button.A, function () {
    display = _3dB
    drawScreen()
})
input.onButtonPressed(Button.B, function () {
    display = _2smiley
    drawScreen()
})
function drawScreen () {
    let _1X = 0
    let _0graph = 0
    if (display == _0graph) {
        led.plotBarGraph(
        Math.map(radio.receivedPacket(RadioPacketProperty.SignalStrength), -128, -28, 0, 9),
        9
        )
    } else if (display == _1X) {
        basic.showIcon(IconNames.No)
    } else if (display == _2smiley) {
        radio.sendNumber(8)
        basic.pause(500)
    } else if (display == _3dB) {
        basic.showNumber(radio.receivedPacket(RadioPacketProperty.SignalStrength))
    } else {
    	
    }
}
let _3dB = 0
let display = 0
let counter = 0
let _2smiley = 0
radio.setGroup(1)
let myID = 8
while (!(_2smiley)) {
	
}
loops.everyInterval(500, function () {
    counter += 1
    if (counter) {
    	
    }
})
basic.forever(function () {
	
})
