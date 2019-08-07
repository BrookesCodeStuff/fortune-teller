
const answers = [
  "Absolutely yes.", 
  "Future unclear.",
  "Ask again later.",
  "Nope.",
  "Outlook not great.",
  "Yes!",
  "Very, very doubtful.",
  "Too soon to tell.",
  "You can bet on it!"]

  let btn = document.querySelector('#ball');
  let question = document.querySelector('#question');
  let answer = document.querySelector('#answer');

  question.addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      btn.click();
    }
  })

  let doClick = (event) => {
    if (question.value) {
      answer.innerHTML = '<div class="question"><strong>' + question.value + '</strong></div>' + '<div class="answer">' + answers[Math.floor(Math.random() * answers.length)] + '</div>';
      question.focus();
      question.value = ''
    } else {
      answer.innerHTML = '';
      question.focus();
    }
  }