function Hangman(word) {
  this.word = word;
  this.visibleWord = [];

  for (let i = 0; i < word.length; i += 1) {
    this.visibleWord.push('_');
  }

  this.errorsLeft = 6;
  this.wrongSymbols = [];
}

Hangman.prototype = {
  guess(letter) {
    function check() {
      for (let i = 0; i < this.visibleWord.length; i += 1) {
        if (this.visibleWord[i] === '_') {
          return false;
        }
      }

      return true;
    }

    let err = true;

    for (let i = 0; i < this.word.length; i += 1) {
      if (letter.toLowerCase() === this.word[i].toLowerCase()) {
        this.visibleWord[i] = this.word[i];
        err = false;
      }
    }

    if (err) {
      this.errorsLeft -= 1;
      this.wrongSymbols.push(letter);

      console.log(`wrong letter, errors left ${this.errorsLeft} | ${this.wrongSymbols}`);

      if (this.errorsLeft <= 0) {
        console.log('You lose!');
      }
    } else {
      console.log(this.visibleWord.join(''));

      if (check.call(this)) {
        console.log('You won!');
      }
    }
  },
  getGuessedString() {
    return this.visibleWord.join('');
  },
  getErrorsLeft() {
    return this.errorsLeft;
  },
  getWrongSymbols() {
    return this.wrongSymbols;
  },
  getStatus() {
    return `${this.visibleWord.join('')} | errors left ${this.errorsLeft}`;
  },
  startAgain(word) {
    this.word = word;
    this.visibleWord = [];

    for (let i = 0; i < word.length; i += 1) {
      this.visibleWord.push('_');
    }

    this.errorsLeft = 6;
    this.wrongSymbols = [];
  },
};

const hangman = new Hangman('webpurple');

module.exports = hangman;
