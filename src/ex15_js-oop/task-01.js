function Candy(name, weight, price) {
  this.name = name;
  this.weight = weight;
  this.price = price;
}

function Gift(...candys) {
  this.candys = candys;
}

Gift.prototype.find = function find(name) {
  if (name) {
    for (let i = 0; i < this.candys.length; i += 1) {
      if (this.candys[i].name === name) {
        return console.log(name);
      }
    }
  } else {
    console.log('Please enter a name for search');
  }

  return console.log('Sorry your candy is not found');
};
Gift.prototype.weightOfGift = function weightOfGift() {
  return this.candys.reduce((item, obj) => item + obj.weight, 0);
};
Gift.prototype.sorting = function sorting() {
  return this.candys.sort((candyOne, candyTwo) => (candyOne.name < candyTwo.name ? 1 : 0));
};
const maska = new Candy('maska', 10, 30);
const rachki = new Candy('rachki', 8, 25);
const krasnayaShapochka = new Candy('krasnaya shapochka', 15, 8);

const sweet = new Gift(maska, rachki, krasnayaShapochka);

module.exports = sweet;
