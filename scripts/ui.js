export function showImage(src) {
  const panel = document.querySelector("#info-panel");
  panel.style.backgroundImage = `url('${src}')`;
}

export function showMessage(text) {
  document.querySelector("#game-message").textContent = text;
}

export function showPlayerStatus(text) {
  document.querySelector("#player-status").textContent = text;
}

export function renderScene({ image, text, options }, onOptionSelected) {
  showImage(image);
  showMessage(text);
  renderOptions(options, onOptionSelected);
}

function renderOptions(options, onOptionSelected) {
  const container = document.getElementById("action-buttons");
  container.innerHTML = '';
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt.label;
    btn.onclick = () => onOptionSelected(opt.nextScene, opt.energyCost || 0);
    container.appendChild(btn);
  });
}
export function showRestartButton() {
    const btn = document.getElementById("restart-button");
    btn.classList.remove("hidden");
    btn.onclick = () => {
        location.reload();
    }
}
export function disableActions() {
    const container = document.getElementById("action-buttons");
    container.innerHTML = '';
}
export function updatePhaseLighting(phase) {
    const panel = document.getElementById("info-panel");
    panel.classList.remove("phase-morning", "phase-afternoon", "phase-evening", "phase-night");
    panel.classList.add(`phase-${phase.toLowerCase()}`);
}