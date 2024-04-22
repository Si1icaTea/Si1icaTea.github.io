document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('keyboardCanvas');
  const ctx = canvas.getContext('2d');
  const logDiv = document.getElementById('log');

  // Update keys object to use exact strings from event.key
  const keys = {
      'q': { x: 50, y: 100, w: 30, h: 30 },
      'w': { x: 90, y: 100, w: 30, h: 30 },
      'e': { x: 130, y: 100, w: 30, h: 30 },
      'r': { x: 170, y: 100, w: 30, h: 30 },
      'a': { x: 55, y: 140, w: 30, h: 30 },
      's': { x: 95, y: 140, w: 30, h: 30 },
      'd': { x: 135, y: 140, w: 30, h: 30 },
      'f': { x: 175, y: 140, w: 30, h: 30 },
      'z': { x: 60, y: 180, w: 30, h: 30 },
      'x': { x: 100, y: 180, w: 30, h: 30 },
      'c': { x: 140, y: 180, w: 30, h: 30 },
      'v': { x: 180, y: 180, w: 30, h: 30 },
      '1': { x: 20, y: 60, w: 30, h: 30 },
      '2': { x: 60, y: 60, w: 30, h: 30 },
      '3': { x: 100, y: 60, w: 30, h: 30 },
      '4': { x: 140, y: 60, w: 30, h: 30 },
      't': { x: 210, y: 100, w: 30, h: 30 },
      'Tab': { x: 10, y: 100, w: 40, h: 30 },
      'CapsLock': { x: 10, y: 140, w: 45, h: 30 },
      'Shift': { x: 10, y: 180, w: 50, h: 30 },
      'Control': { x: 10, y: 220, w: 50, h: 30 },
      'Alt': { x: 70, y: 220, w: 30, h: 30 },
      'ArrowUp': { x: 700, y: 100, w: 30, h: 30 },
      'ArrowDown': { x: 700, y: 140, w: 30, h: 30 },
      'ArrowLeft': { x: 670, y: 140, w: 30, h: 30 },
      'ArrowRight': { x: 730, y: 140, w: 30, h: 30 },
      ' ': { x: 55, y: 220, w: 155, h: 30 }, // Spacebar
  };

  function drawKey(key, pressed = false) {
      const k = keys[key];
      ctx.fillStyle = pressed ? '#0f0' : '#fff';
      ctx.fillRect(k.x, k.y, k.w, k.h);
      ctx.strokeRect(k.x, k.y, k.w, k.h);
      ctx.fillStyle = '#000';
      ctx.fillText(key, k.x + 5, k.y + 20);
  }

  function drawKeyboard() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      Object.keys(keys).forEach(key => {
          drawKey(key);
      });
  }

  function logInput(input) {
      let img = document.createElement('img');
      img.src = canvas.toDataURL();
      img.style.width = '100px';
      img.style.height = '50px';
      logDiv.prepend(img);
      if (logDiv.childElementCount > 10) {
          logDiv.removeChild(logDiv.lastChild);
      }
  }

  document.addEventListener('keydown', function(event) {
      let key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
      if (key in keys) {
          drawKey(key, true);
          logInput(key);
      }
  });

  document.addEventListener('keyup', function(event) {
      let key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
      if (key in keys) {
          drawKey(key, false);
      }
  });

  drawKeyboard();
});
