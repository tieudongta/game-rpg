export const scenePresets = {
  forest: {
    image: "assets/scenes/forest.png",
    text: "You're in a dense forest. Birds chirp above. Paths lead in all directions.",
    options: [
      { label: "Go to the River", nextScene: "river", energyCost: 10 },
      { label: "Enter the Cave", nextScene: "cave", energyCost: 10  },
      { label: "Walk to the Village", nextScene: "village", energyCost: 10  },
      { label: "Head to the Farms", nextScene: "farm", energyCost: 10  },
    ],
  },

  river: {
    image: "assets/scenes/river.png",
    text: "The river flows gently. You see reflections of trees and sky.",
    options: [
      { label: "Go to the Forest", nextScene: "forest", energyCost: 10  },
      { label: "Walk to the Village", nextScene: "village", energyCost: 10  },
    ],
  },

  cave: {
    image: "assets/scenes/cave.png",
    text: "Inside the cave, it's cool and damp. Echoes bounce off the walls.",
    options: [
      { label: "Return to the Forest", nextScene: "forest", energyCost: 10  },
      { label: "Crawl to the River", nextScene: "river", energyCost: 10  },
    ],
  },

  village: {
    image: "assets/scenes/village.png",
    text: "The village is calm. Smoke rises from chimneys, and people pass by.",
    options: [
      { label: "Go to the Forest", nextScene: "forest", energyCost: 10  },
      { label: "Visit the Farms", nextScene: "farm", energyCost: 10  },
      { label: "Walk to the River", nextScene: "river", energyCost: 10  },
    ],
  },

  farm: {
    image: "assets/scenes/farm.png",
    text: "The farms stretch wide. Fields of crops sway in the breeze.",
    options: [
      { label: "Go to the Village", nextScene: "village", energyCost: 10  },
      { label: "Return to the Forest", nextScene: "forest", energyCost: 10  },
    ],
  },
};
