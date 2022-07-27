hummingbird.startHummingbird()
basic.forever(function () {
    hummingbird.setLED(ThreePort.One, hummingbird.getSensor(SensorType.Light, ThreePort.One))
})
