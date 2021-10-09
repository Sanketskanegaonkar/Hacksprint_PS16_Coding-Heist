const countdownArea = document.querySelector('.countdown');
const numbersArea = document.querySelector('.numbers');
const resetBtn = document.querySelector('.reset');
let interval;
let count = 0;
const height = countdownArea.getBoundingClientRect().height;

// start the timer when page loads
createTimer();

// recreate the timer when reset is clicked
resetBtn.addEventListener('click', createTimer);

// create the interval that creates the timer
function createTimer() {
  clearInterval(interval);
  count = 0;
  numbersArea.style.transform = 'translateY(0)'
  
  interval = setInterval(() => {
    count++;
    
    // calculate the offset and apply it
    const offset = height * count;
    numbersArea.style.transform = `translateY(-${offset}px)`

    // what happens when countdown is done
    if (count >= 10) {
      // go to the next episode
      clearInterval(interval);
    }
  }, 1000);
}
