radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == myID) {
        display = _2smiley
    }
})
input.onButtonPressed(Button.A, function () {
    display = _3dB
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(8)
})
let _3dB = 0
let display = 0
let _2smiley = 0
let myID = 0
radio.setGroup(1)
myID = 8
while (!(_2smiley)) {
    let _1X = 0
    led.plotBarGraph(
    Math.map(radio.receivedPacket(RadioPacketProperty.SignalStrength), -128, -28, 0, 9),
    9
    )
    if (display == _3dB) {
        basic.showNumber(radio.receivedPacket(RadioPacketProperty.SignalStrength))
    } else if (display == _1X) {
        basic.showIcon(IconNames.No)
    } else {
    	
    }
}
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
})
