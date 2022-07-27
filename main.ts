function is_it_not_dark (bool: boolean, bool2: boolean) {
	
}
hummingbird.startHummingbird()
basic.forever(function () {
    let is_it_dark = 0
    if (is_it_dark) {
        hummingbird.setLED(ThreePort.One, hummingbird.getSensor(SensorType.Light, ThreePort.One))
    } else {
        hummingbird.setLED(ThreePort.One, 0)
    }
})
