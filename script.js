document.getElementById('yes-btn').addEventListener('click', function() {
  // Flip effect
  document.querySelector('.container').style.display = 'none';
  document.querySelector('.flip-container').style.display = 'flex';
  document.querySelector('.flip-box').style.transform = 'rotateY(180deg)';
  
  // Heart falling after 2 seconds
  setTimeout(function() {
      startHeartFall();
      setTimeout(function() {
          document.querySelector('.flip-content').style.display = 'block';
      }, 2000); // Page shows after 2 seconds
  }, 2000);
});

function startHeartFall() {
  const heartFallContainer = document.createElement('div');
  heartFallContainer.className = 'heart-fall';
  document.body.appendChild(heartFallContainer);

  for (let i = 0; i < 30; i++) {
      let heart = document.createElement('div');
      heart.className = '❤❤❤❤❤❤❤❤❤❤❤❤❤❤';
      heart.style.setProperty('--pos', Math.random());
      heartFallContainer.appendChild(heart);
  }
}