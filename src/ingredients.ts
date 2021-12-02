import {
  MyComponent,
  MyComponentNovo,
  LNComponent,
  CRCComponent
} from "./myTests.js";

export interface Ingredient {
  icon: string;
  label: string;
}

export const allIngredients = [
  {
    icon: "Natural Language Processing",
    label: "Tomato",
    color: "#ff0055",
    colorOpacity: "#ff005520",
    textColor: "red-400",
    component: LNComponent
  },
  {
    icon: "Complex Science Networks",
    label: "Lettuce",
    color: "#0099ff",
    colorOpacity: "#0099ff20",
    textColor: "blue-400",
    component: CRCComponent
  },
  {
    icon: "Information Processing",
    label: "Cheese",
    color: "#22cc88",
    colorOpacity: "#22cc8820",
    textColor: "green-400",
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
