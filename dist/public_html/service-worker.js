importScripts("/precache-manifest.738ad0ba74b1c23baa4903257cb68d89.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

const dataCacheName = 'egameData';
const cacheName = 'egameCache';
const filesToCache = [
  '/',
  '/index.html',

  '/js/app.js',
  '/js/app.js.map',
  '/js/about.js',
  '/js/about.js.map',
  '/js/chunk-vendors.js',
  '/js/chunk-vendors.js.map',

  '/css/app.css',

  // '/scripts/app.js',
  // '/styles/inline.css',

  // '/images/clear.png',
  // '/images/cloudy-scattered-showers.png',
  // '/images/cloudy.png',
  // '/images/fog.png',
  // '/images/ic_add_white_24px.svg',
  // '/images/ic_refresh_white_24px.svg',
  // '/images/partly-cloudy.png',
  // '/images/rain.png',
  // '/images/scattered-showers.png',
  // '/images/sleet.png',
  // '/images/snow.png',
  // '/images/thunderstorm.png',
  // '/images/wind.png',
];


let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  console.log('beforeinstallprompt');
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can add to home screen
  btnAdd.style.display = 'block';
});

btnAdd.addEventListener('click', (e) => {
  // hide our user interface that shows our A2HS button
  btnAdd.style.display = 'none';
  // Show the prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice
    .then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
});

