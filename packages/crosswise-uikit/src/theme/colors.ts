import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#00b8b9",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#141029",
  textDisabled: "#BDC2C4",
  textSubtle: "#141029",
  cardBorder: "#E9EAEB",
  gradients: {
    gradprimary: "linear-gradient(to bottom right, #00ffaa , #4579f5 53%, #9c42f5)",
    gradsecondary:
      "linear-gradient(110deg, rgba(245, 247, 250, 0.12), rgba(245, 247, 250, 0.06) 52%, rgba(245, 247, 250, 0) 100%)",
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#212429",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#27262c",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  invertedContrast: "#191326",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#0098A1",
  tertiary: "rgba(0, 184, 185, 0.03)",
  text: "#FFFFFF",
  textDisabled: "#666171",
  textSubtle: "#e0e0ff",
  cardBorder: "#524B63",
  gradients: {
    gradprimary: "linear-gradient(to bottom right, #00ffaa , #4579f5 53%, #9c42f5)",
    gradsecondary:
      "linear-gradient(101deg, rgba(245, 247, 250, 0.12), rgba(245, 247, 250, 0.06) 52%, rgba(245, 247, 250, 0) 100%)",
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
  },
};
