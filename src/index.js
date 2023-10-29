import './styles.css';
import bg from './images/bg.jpg';
import clockBg from './images/clockBg.jpeg';
import catBg from './images/catBg.jpeg';

// Set background images

document.querySelector('body').style.backgroundImage = `url(${bg})`;

const watchFace = document.querySelector('.an-watch-face');
const digitalFace = document.querySelector('.di-watch-face');

let backgroundIsActive = false;
const toggleBackground = () => {
  if (backgroundIsActive) {
    watchFace.style.backgroundImage = 'none';
    digitalFace.style.backgroundImage = 'none';
    backgroundIsActive = false;
  } else {
    watchFace.style.backgroundImage = `url(${clockBg})`;
    digitalFace.style.backgroundImage = `url(${catBg})`;
    backgroundIsActive = true;
  }
};

const button = document.querySelector('.mike-button');
button.addEventListener('click', toggleBackground);

// Clock functionality

const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');

const dcHours = document.querySelector('.hours-di');
const dcMinutes = document.querySelector('.minutes-di');
const colon = document.querySelector('.colon');

const setTime = () => {
  // Get time
  const date = new Date();
  const timeInSeconds = date.getSeconds();
  const timeInMinutes = date.getMinutes();
  const timeInHours = date.getHours();

  secondHand.style.transform = `rotate(${6 * timeInSeconds - 90}deg)`;
  minuteHand.style.transform = `rotate(${6 * timeInMinutes - 90}deg)`;
  hourHand.style.transform = `rotate(${(30 * timeInHours + timeInMinutes / 2) - 90}deg)`;

  dcHours.textContent = `${timeInHours < 10 ? `0${timeInHours}` : timeInHours}`;
  dcMinutes.textContent = `${timeInMinutes < 10 ? `0${timeInMinutes}` : timeInHours}`;
  colon.style.color = `${timeInSeconds % 2 === 0 ? 'rgba(0, 0, 0, 0)' : '#fff'}`;
};

setTime();

setInterval(setTime, 1000);
