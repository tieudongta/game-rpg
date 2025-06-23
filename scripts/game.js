import { scenePresets } from "../data/scenes.js";
import { Player } from "./player.js";
import { disableActions, renderScene, showImage, showMessage, showPlayerStatus, showRestartButton, updatePhaseLighting } from "./ui.js";

export class Game {
  constructor(playerName) {
    this.player = new Player(playerName);
  }

  start() {
    this.changeScene(this.player.currentLocation);
  }

  changeScene(sceneId, energyCost = 0) {
    const scene = scenePresets[sceneId];
    if (!scene) return;

    this.player.moveTo(sceneId, energyCost);
    updatePhaseLighting(this.player.timeSystem.phase);
    if (this.player.energy <= 0) {
        showMessage("You collapse from exhaustion... Game Over.");
        disableActions();
        showRestartButton();
        return;
    }
    showPlayerStatus(`${this.player.timeSystem.fullTime} - ${this.player.timeSystem.phase}  Energy: ${this.player.energy}`);

    renderScene(scene, this.changeScene.bind(this));
  }
}
