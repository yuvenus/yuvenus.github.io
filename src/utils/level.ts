export const Level: Record<number, string> = {
  1: "learning",
  2: "familiar",
  3: "proficient",
  4: "advanced",
  5: "expert",
};

export const maxLevel = 5;

// percentage out of 100% -> level 1 to 5
export const getLevel = (percentage: number) =>
  Math.min(maxLevel, Math.max(1, Math.round(percentage / 20)));
