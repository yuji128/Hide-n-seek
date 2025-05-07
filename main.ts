radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 8) {
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
    } else {
        basic.showIcon(IconNames.No)
    }
})
basic.forever(function () {
    radio.setGroup(1)
    radio.sendNumber(8)
    basic.pause(500)
    led.plotBarGraph(
    Math.map(radio.receivedPacket(RadioPacketProperty.SignalStrength), -128, -28, 0, 9),
    9
    )
})
