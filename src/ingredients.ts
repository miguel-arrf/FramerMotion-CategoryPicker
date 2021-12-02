import { MyComponent, LNComponent, CRCComponent } from "./myTests.js";

export interface Ingredient {
  icon: string;
  label: string;
}

export const allIngredients = [
  {
    icon: "Natural Language Processing",
    label: "Tomato",
    color: "#ff0055",
    shadowColor: "#ff0055A0",
    colorOpacity: "#ff005520",
    textColor: "rgb(248,113,133)",
    component: LNComponent
  },
  {
    icon: "Complex Science Networks",
    label: "Lettuce",
    color: "#0099ff",
    shadowColor: "#0099ffA0",
    colorOpacity: "#0099ff20",
    textColor: "rgb(96, 165, 250)",
    component: CRCComponent
  },
  {
    icon: "Information Processing",
    label: "Cheese",
    color: "#22cc88",
    shadowColor: "#22cc88A0",
    colorOpacity: "#22cc8820",
    textColor: "rgb(52, 211, 153)",
    component: MyComponent
  }
];

const [tomato, lettuce, cheese] = allIngredients;
export const initialTabs = [tomato, lettuce, cheese];

export function getNextIngredient(
  ingredients: Ingredient[]
): Ingredient | undefined {
  const existing = new Set(ingredients);
  return allIngredients.find((ingredient) => !existing.has(ingredient));
}
