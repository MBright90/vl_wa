import './styles.css';
import bg from './images/bg.jpg';
import catBg from './images/catBg.jpeg';
import imageArr from './images/imageIndex';

// Set background images

document.querySelector('body').style.backgroundImage = `url(${bg})`;

const watchFace = document.querySelector('.an-watch-face');
const digitalFace = document.querySelector('.di-watch-face');

const getRandomBg = () => {
  const randomIndex = Math.floor(Math.random() * imageArr.length);
  return imageArr[randomIndex];
};

let backgroundIsActive = false;
const toggleBackground = () => {
  if (backgroundIsActive) {
    watchFace.style.backgroundImage = 'none';
    digitalFace.style.backgroundImage = 'none';
    backgroundIsActive = false;
  } else {
    const bgImage = getRandomBg();
    watchFace.style.backgroundImage = `url(${bgImage})`;
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
  dcMinutes.textContent = `${timeInMinutes < 10 ? `0${timeInMinutes}` : timeInMinutes}`;
};

setTime();

const colon = document.querySelector('.colon');
let colonVisible = true;
const flickerColon = () => {
  colon.style.color = `${colonVisible ? '#fff' : 'rgba(0, 0, 0, 0)'}`;
  colonVisible = !colonVisible;
};

setInterval(setTime, 1000);
setInterval(flickerColon, 600);
