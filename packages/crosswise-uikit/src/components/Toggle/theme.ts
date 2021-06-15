import { darkColors, lightColors } from "../../theme/colors";
import { ToggleTheme } from "./types";

export const light: ToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleBackgroundImage: lightColors.backgroundImage,
};

export const dark: ToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleBackgroundImage: darkColors.backgroundImage,
};
