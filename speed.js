const testText = `The quick Brown fox jump over the lazy dogs!`;
const typewriter = document.getElementById('typewriter');
const input = document.getElementById('input');
const stats = document.getElementById('stats');
const wpmDisplay = document.getElementById('wpm');
const accuracyDisplay = document.getElementById('accuracy');
const errorDisplay = document.getElementById('errors');
const progressBar = document.getElementById('progress');
let startTime, interval;
let errors = 0;
typewriter.textContent = testText;

input.addEventListener('input', () => {
  const typed = input.value;
  if (typed.length === 1 && !startTime) {
    startTime = new Date();
    interval = setInterval(updateStats, 1000);
  }

  checkTyping(typed);
  updateProgress(typed);
  
  if (typed === testText) {
    clearInterval(interval);
    finishTest();
  }
});

function checkTyping(typed) {
  const currentText = testText.substring(0, typed.length);

  if (typed !== currentText) {
    input.classList.add('error');
    errors++;
  } else {
    input.classList.remove('error');
  }
}

function updateStats() {
  const timeElapsed = (new Date() - startTime) / 1000 / 60; 
  const wordsTyped = input.value.trim().split(/\s+/).length;
  const wpm = Math.round(wordsTyped / timeElapsed);
  
  const correctChars = countCorrectCharacters(input.value, testText);
  const accuracy = Math.round((correctChars / testText.length) * 100);

  wpmDisplay.textContent = isNaN(wpm) ? 0 : wpm;
  accuracyDisplay.textContent = isNaN(accuracy) ? '0%' : `${accuracy}%`;
  errorDisplay.textContent = errors;
}

function countCorrectCharacters(typed, original) {
  let correct = 0;
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === original[i]) correct++;
  }
  return correct;
}

function updateProgress(typed) {
  const percent = Math.min((typed.length / testText.length) * 100, 100);
  progressBar.style.width = `${percent}%`;
}

function finishTest() {
  input.disabled = true;
  stats.classList.remove('hidden');
  updateStats();
}

function restart() {
  input.value = '';
  input.disabled = false;
  input.classList.remove('error');
  stats.classList.add('hidden');
  progressBar.style.width = '0%';
  errors = 0;
  startTime = null;
  clearInterval(interval);
}



