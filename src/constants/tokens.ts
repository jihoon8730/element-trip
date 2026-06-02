export const colors = {
  bg: "#F9F9FA",
  typoPrimary: "#2C302E",
  typoSub: "#747876",
  white: "#FFFFFF",

  elements: {
    wood: { main: "#E2F0D9", grad: "#C5E1A5" },
    fire: { main: "#FCE4D6", grad: "#F8BBD0" },
    earth: { main: "#FFF2CC", grad: "#FFE0B2" },
    metal: { main: "#E1D5E7", grad: "#D1C4E9" },
    water: { main: "#DAE8FC", grad: "#B3E5FC" },
  },
} as const;

export const radius = {
  card: 24,
  badge: 12,
} as const;

export const shadow = {
  card: {
    shadowColor: "#2C302E",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.04,
    shadowRadius: 24,
    elevation: 2,
  },
} as const;

export type ElementKey = keyof typeof colors.elements;
