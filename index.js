const Image = document.getElementById('image');
function getAnchorValues(eye) {
  const anchor = document.querySelector(eye);
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
  const anchor1 = getAnchorValues('#eye1');
  const anchor2 = getAnchorValues('#eye2');
  const anchor3 = getAnchorValues('#eye3');
  const anchor4 = getAnchorValues('#eye4');

  const degrees1 = getAngle(
    mouse_X,
    mouse_Y,
    anchor1.anchor_X,
    anchor1.anchor_Y
  );
  const degrees2 = getAngle(
    mouse_X,
    mouse_Y,
    anchor2.anchor_X,
    anchor2.anchor_Y
  );
  const degrees3 = getAngle(
    mouse_X,
    mouse_Y,
    anchor3.anchor_X,
    anchor3.anchor_Y
  );
  const degrees4 = getAngle(
    mouse_X,
    mouse_Y,
    anchor4.anchor_X,
    anchor4.anchor_Y
  );

  const eye1 = document.getElementById('eye1');
  eye1.style.transform = `rotate(${degrees1}deg)`;
  const eye2 = document.getElementById('eye2');
  eye2.style.transform = `rotate(${degrees2}deg)`;
  const eye3 = document.getElementById('eye3');
  eye3.style.transform = `rotate(${degrees3}deg)`;
  const eye4 = document.getElementById('eye4');
  eye4.style.transform = `rotate(${degrees4}deg)`;

  Image.style.filter = `hue-rotate(${degrees1}deg)`;
});

function getAngle(cx, cy, ex, ey) {
  const dx = cx - ex;
  const dy = cy - ey;

  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;

  return deg;
}
