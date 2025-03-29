const btnEuroLotto = document.getElementById('btnEuroLotto');
const btnLotto = document.getElementById('btnLotto');
let euroLottoNumbers = [];
let euroNumbers = [];
let lottoNumbers = [];


function displayEuroNumbers() {
  euroLottoNumbers.sort((a, b) => a - b).forEach((num, index) => {
    const element = document.getElementById(`number${index + 1}`);
    if (element) {
      element.innerText = num;
    }
  });

  euroNumbers.sort((a, b) => a - b).forEach((num, index) => {
    const element = document.getElementById(`euro${index + 1}`);
    if (element) {
      element.innerText = num;
    }
  });
}

function displayLottoNumbers() {
  lottoNumbers.sort((a, b) => a - b).forEach((num, index) => {
    const element = document.getElementById(`lotto-number${index + 1}`);
    if (element) {
      element.innerText = num;
    }
  });

}

function generateEuroNumbers() {
  euroLottoNumbers = [];
  euroNumbers = [];
  while (euroLottoNumbers.length < 5) {
    const number = Math.floor(Math.random() * 50) + 1;
    if (!euroLottoNumbers.includes(number)) {
      euroLottoNumbers.push(number);
    }
  }

  while (euroNumbers.length < 2) {
    const number = Math.floor(Math.random() * 12) + 1;
    if (!euroNumbers.includes(number)) {
      euroNumbers.push(number);
    }
  }

  displayEuroNumbers();
}

function generateLottoNumbers() {
  lottoNumbers = [];

  while (lottoNumbers.length < 6) {
    const number = Math.floor(Math.random() * 49) + 1;
    if (!lottoNumbers.includes(number)) {
      lottoNumbers.push(number);
    }
  }

  displayLottoNumbers();
}

btnEuroLotto.addEventListener('click', generateEuroNumbers);
btnLotto.addEventListener('click', generateLottoNumbers);