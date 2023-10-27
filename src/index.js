import './styles.css';
import bg from './images/bg.jpg';
import clockBg from './images/clockBg.jpeg';

// Set background images

document.querySelector('body').style.backgroundImage = `url(${bg})`;

const watchFace = document.querySelector('.an-watch-face');
let backgroundIsActive = false;
const toggleBackground = () => {
  if (backgroundIsActive) {
    watchFace.style.backgroundImage = 'none';
    backgroundIsActive = false;
  } else {
    watchFace.style.backgroundImage = `url(${clockBg})`;
    backgroundIsActive = true;
  }
};

const button = document.querySelector('.mike-button');
button.addEventListener('click', toggleBackground);

// Clock functionality

const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');

const digitalClock = document.querySelector('.digital-watch');

const setTime = () => {
  // Get time
  const date = new Date();
  const timeInSeconds = date.getSeconds();
  const timeInMinutes = date.getMinutes();
  const timeInHours = date.getHours();

  secondHand.style.transform = `rotate(${6 * timeInSeconds - 90}deg)`;
  minuteHand.style.transform = `rotate(${6 * timeInMinutes - 90}deg)`;
  hourHand.style.transform = `rotate(${(30 * timeInHours + timeInMinutes / 2) - 90}deg)`;

  digitalClock.textContent = `${timeInHours < 10 ? `0${timeInHours}` : timeInHours}:${timeInMinutes < 10 ? `0${timeInMinutes}` : timeInMinutes}`;
};

setTime();

setInterval(setTime, 1000);
