const icons = document.querySelectorAll('.icon');
const timeLeft = document.getElementById('timeleft');

icons.forEach(icon => {
  icon.addEventListener('click', (event) => {
    event.preventDefault();
    timeLeft.style.display = "block";
    let time = 4;
    const interval = setInterval(() => {
      time--;
      timeLeft.innerText = `${time} saniye içinde yönlendirileceksiniz.`;
      if (time === 0) {
        clearInterval(interval);
        window.location = icon.href;
      }
    }, 1000);
  });
});
