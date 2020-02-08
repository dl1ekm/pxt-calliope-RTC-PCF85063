let Uhrzeit = ""
let Datum = ""
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_EVT_ANY, () => {
    PCF85063TP.setClock(
    2020,
    2,
    5,
    7,
    20,
    2,
    0
    )
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_EVT_ANY, () => {
    Datum = PCF85063TP.getDate()
    Uhrzeit = PCF85063TP.getTime()
    serial.writeLine("------------")
    serial.writeLine(Datum)
    serial.writeLine(Uhrzeit)
    basic.pause(100)
})
