let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('⛔️ No number!');

  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});



























































// function openSenior(data) {
//   return data.reduce((prev, current) => current[0] >= 55 && current [1] > 7 ? [...prev, "Senior"] : [...prev, "Open"], [])
// }
// console.log(openSenior([
//   [45, 12],
//   [55, 21],
//   [19, -2],
//   [104, 20]
// ]))

// const openSenior = (data) => data.reduce((prev, [age, handicap]) => age >= 55 && handicap > 7 ? [...prev, "Senior"] : [...prev, "Open"], [])
// console.log(openSenior([
//   [45, 12],
//   [55, 21],
//   [19, -2],
//   [104, 20]
// ]))

// function openSenior(data){
//   const hasil = [];
//   for(let i = 0; i< data.length; i++){
//     if(data[i][0] >= 55 && data[i][1] > 7){
//       hasil.push("Senior")
//     } else {
//       hasil.push("Open")
//     }
//   }
//   return hasil;
// }
// console.log(openSenior([
//   [45, 12],
//   [55, 21],
//   [19, -2],
//   [104, 20]
// ]))

// function openSenior (data) {
//   return data.map(([age, handicap]) => {
//     return age >= 55 && handicap > 7 ? "Senior" : "Open"
//   })
// }
// console.log(openSenior([
//   [45, 12],
//   [55, 21],
//   [19, -2],
//   [104, 20]
// ])) 

// function friends(friends){
  // Cara Sepuh
  // return friends.reduce((newFriend, friend) => (friend.length === 4 ? [...newFriend, friend] : newFriend), [])

  // const newFreinds = []
  // for(let i = 0; i < friends.length; i++){
  //   if(friends[i].length === 4){
  //     newFreinds.push(friends[i])
  //   }
  // }
  // return newFreinds
// }
// console.log(friends(['Irfan', 'Aldo', 'Imron', 'Hafizhul']))