import { darkColors, lightColors } from "../../theme/colors";
import { NavTheme } from "./types";

export const light: NavTheme = {
  background: lightColors.backgroundAlt,
  gradient: lightColors.gradients.gradsecondary,
  hover: "#EEEAF4",
};

export const dark: NavTheme = {
  background: darkColors.backgroundAlt,
  gradient: lightColors.gradients.gradsecondary,
  hover: "#473d5d",
};
