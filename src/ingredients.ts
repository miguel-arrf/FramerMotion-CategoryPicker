export interface Ingredient {
  icon: string;
  label: string;
}

export const allIngredients = [
  {
    icon: "Natural Language Processing",
    label: "Tomato",
    color: "#ff0055",
    colorOpacity: "#ff005520"
  },
  {
    icon: "Complex Science Networks",
    label: "Lettuce",
    color: "#0099ff",
    colorOpacity: "#0099ff20"
  },
  {
    icon: "Information Processing",
    label: "Cheese",
    color: "#22cc88",
    colorOpacity: "#22cc8820"
  },
  {
    icon: "Finance Mathematics",
    label: "Cheewwse",
    color: "#9b59b6",
    colorOpacity: "#9b59b620"
  },
  {
    icon: "Information 12",
    label: "Cheawese1",
    color: "#74b9ff",
    colorOpacity: "#74b9ff20"
  },
  {
    icon: "Information 123",
    label: "Cheawese2",
    color: "#fd79a8",
    colorOpacity: "#fd79a820"
  },
  {
    icon: "Information 1234",
    label: "Cheawese3",
    color: "#b2bec3",
    colorOpacity: "#b2bec320"
  }
];

const [tomato, lettuce, cheese, t1, t2, t3, t4] = allIngredients;
export const initialTabs = [tomato, lettuce, cheese, t1, t2, t3, t4];

export function getNextIngredient(
  ingredients: Ingredient[]
): Ingredient | undefined {
  const existing = new Set(ingredients);
  return allIngredients.find((ingredient) => !existing.has(ingredient));
}
