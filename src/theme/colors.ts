import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#aa2929",
  primaryBright: "#ef2727",
  primaryDark: "#761212",
  secondary: "#a53535",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#faf9f9",
  backgroundDisabled: "#ebe9e9",
  contrast: "#261313",
  invertedContrast: "#ffffff",
  input: "#f4eaea",
  tertiary: "#f5efef",
  text: "#7a2a2a",
  textDisabled: "#c4bdbd",
  textSubtle: "#b43737",
  borderColor: "#ebe9e9",
  card: "#ffffff",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #ffe6e6 0%, #ffefef 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#ff2020",
  background: "#000000",
  backgroundDisabled: "#1f1a1a",
  contrast: "#ffffff",
  invertedContrast: "#261313",
  input: "#5a3f3f",
  primaryDark: "#a10000",
  tertiary: "#473535",
  text: "#ff3e3e",
  textDisabled: "#7f4242",
  textSubtle: "#d4c4c4",
  borderColor: "#634b4b",
  card: "#161616",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #5c3131 0%, #542a2a 100%)",
  },
};
