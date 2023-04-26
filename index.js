function getAnchorValues() {
  const anchor = document.getElementById('anchor');
  const rect = anchor.getBoundingClientRect();

  const anchor_X = rect.left + rect.width / 2;
  const anchor_Y = rect.top + rect.height / 2;

  return {
    anchor_X,
    anchor_Y,
  };
}

document.addEventListener('mousemove', (e) => {
  const mouse_X = e.clientX;
  const mouse_Y = e.clientY;
  const { anchor_X, anchor_Y } = getAnchorValues();

  const degrees = getAngle(mouse_X, mouse_Y, anchor_X, anchor_Y);

  const eyes = document.querySelectorAll('.eyes');
  eyes.forEach((e) => {
    e.style.transform = `rotate(${degrees}deg)`;
    anchor.style.filter = `hue-rotate(${degrees}deg)`;
  });
});

function getAngle(cx, cy, ex, ey) {
  const dx = cx - ex;
  const dy = cy - ey;

  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;

  return deg;
}
