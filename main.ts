radio.onReceivedNumber(function (receivedNumber) {
    if ((0 as any) == (8 as any)) {
        while (true) {
            basic.showIcon(IconNames.Happy)
        }
    }
})
radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(8)
    basic.pause(500)
    basic.showIcon(IconNames.No)
    led.plotBarGraph(
    Math.map(radio.receivedPacket(RadioPacketProperty.SignalStrength), -128, -28, 0, 9),
    9
    )
})
