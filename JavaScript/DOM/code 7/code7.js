const box = document.getElementById('box');
const coords = document.getElementById('coords');
const logEl = document.getElementById('log');
const clearDotsBtn = document.getElementById('clearDots');
const clearPathBtn = document.getElementById('clearPath');

let positions = [];

box.addEventListener('mousemove', (e) => {
  const rect = box.getBoundingClientRect();
  const clientX = e.clientX;
  const clientY = e.clientY;
  const relX = Math.round(clientX - rect.left);
  const relY = Math.round(clientY - rect.top);

  coords.textContent = `clientX: ${clientX} clientY: ${clientY}  | relativeX: ${relX} relativeY: ${relY}`;

  positions.push({ clientX, clientY, relX, relY });
  if (positions.length > 10) positions.shift();

  updateLog();

  const dot = document.createElement('div');
  dot.className = 'path-dot';
  dot.style.left = `${relX}px`;
  dot.style.top = `${relY}px`;
  box.appendChild(dot);

  requestAnimationFrame(() => {
    dot.style.opacity = '0';
    dot.style.transform = 'translate(-50%, -50%) scale(1.6)';
  });

  setTimeout(() => {
    if (dot.parentNode) dot.parentNode.removeChild(dot);
  }, 700);
});

box.addEventListener('dblclick', (e) => {
  const rect = box.getBoundingClientRect();
  const relX = Math.round(e.clientX - rect.left);
  const relY = Math.round(e.clientY - rect.top);

  const red = document.createElement('div');
  red.className = 'red-dot';
  red.style.left = `${relX}px`;
  red.style.top = `${relY}px`;
  box.appendChild(red);
});

function updateLog() {
  logEl.innerHTML = '';
  for (let i = positions.length - 1; i >= 0; i--) {
    const p = positions[i];
    const li = document.createElement('li');
    li.textContent = `rel(${p.relX},${p.relY}) client(${p.clientX},${p.clientY})`;
    logEl.appendChild(li);
  }
}

clearDotsBtn.addEventListener('click', () => {
  const reds = box.querySelectorAll('.red-dot');
  reds.forEach(r => r.remove());
});

clearPathBtn.addEventListener('click', () => {
  const paths = box.querySelectorAll('.path-dot');
  paths.forEach(p => p.remove());
});
