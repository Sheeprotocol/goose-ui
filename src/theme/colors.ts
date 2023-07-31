import { Colors } from "./types";

export const baseColors = {
  failure: "#F72B50",
  primary: "#46557d",
  primaryBright: "#00c0ff",
  primaryDark: "#d95b00",
  secondary: "#31572C",
  success: "#68CF29",
  warning: "#ff00e9",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#f3e8c0",
  backgroundDisabled: "#E9EAEB",
  contrast: "#261324",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#46557d",
  textDisabled: "#BDC2C4",
  textSubtle: "#46557d",
  borderColor: "#E9EAEB",
  card: "#838663",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#46557d",
  background: "#6d3568",
  backgroundDisabled: "#220522",
  contrast: "#ffffff",
  invertedContrast: "#0a0e17",
  input: "#2c222b",
  primaryDark: "#d95b00",
  tertiary: "#2c222b",
  text: "#FFFFFF",
  textDisabled: "#8b627f",
  textSubtle: "#46557d",
  borderColor: "#524B63",
  card: "#54194f",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #1f606f 0%, #164865 100%)",
  },
};
