class ElectricalAppliances {
  constructor(name, power, switching) {
    this.name = name;
    this.power = power;
    this.switching = switching;
  }

  turnOn() {
    this.switching = true;
  }

  turnOff() {
    this.switching = false;
  }
}

class Phone extends ElectricalAppliances {}
class Teapot extends ElectricalAppliances {}
class Notebook extends ElectricalAppliances {}

class Room {
  constructor(...appliances) {
    this.appliances = appliances;
  }

  getAllPowerful() {
    return this.appliances.reduce((i, device) => (device.switching ? i + device.power : i), 0);
  }

  findDevice(name) {
    let deviceName = null;
    this.appliances.forEach((item) => { if (item.name === name) deviceName = item.name; });

    return deviceName;
  }
}

const phone = new Phone('iphone', 150, true);
const teapot = new Teapot('Xiaomi', 600, false);
const notebook = new Notebook('Lenovo', 1300, true);

const room = new Room(phone, teapot, notebook);

module.exports = room;
