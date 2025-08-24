window.onload = function() {
  let counter = 1;
  setInterval(function() {
    const radio = document.getElementById('radio' + counter);
    if (radio) {
      radio.checked = true;
    }
    counter++;
    if (counter > 4) {
      counter = 1;
    }
  }, 2500);
};


