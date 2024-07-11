class Calculator {
    constructor() {
      this.menu = {
        "Red set": 50,
        "Green set": 40,
        "Blue set": 30,
        "Yellow set": 50,
        "Pink set": 80,
        "Purple set": 90,
        "Orange set": 120,
      };
    }
    calculatePrice(order, hasMemberCard){
    let tot = 0;
    for (const [name, volume] of Object.entries(order)) {
        let price = this.menu[name]
        if (name == "Orange set" || name == "Pink set" || name == "Green set") {

            tot += Math.floor(volume / 2) * 2 * price * 0.95 + (volume%2) * price
            console.log(tot)
        }else {
            tot += volume * price
        }
      }
      if (hasMemberCard) tot *= 0.90
        return (Math.round(tot * 100) / 100)
    }
}

module.exports = Calculator