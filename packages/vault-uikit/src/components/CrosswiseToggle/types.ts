import { InputHTMLAttributes } from "react";

export type CrosswiseToggleTheme = {
  handleBackground: string;
  handleShadow: string;
};

export const scales = {
  SM: "sm",
  MD: "md",
} as const;

export type Scales = typeof scales[keyof typeof scales];

export interface CrosswiseToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  scale?: Scales;
  checked?: boolean;
}

export interface HandleProps {
  scale: Scales;
}

export interface InputProps {
  scale: Scales;
}

export const scaleKeys = {
  crosswiseSize: "crosswiseSize",
  travelDistance: "travelDistance",
  toggleHeight: "toggleHeight",
  toggleWidth: "toggleWidth",
  crosswiseThickness: "crosswiseThickness",
  crosswiseTwoOffset: "crosswiseTwoOffset",
  crosswiseThreeOffset: "crosswiseThreeOffset",
  butterTop: "butterTop",
  butterLeft: "butterLeft",
  butterWidth: "butterWidth",
  butterHeight: "butterHeight",
  butterThickness: "butterThickness",
  butterRadius: "butterRadius",
  butterSmearOneTop: "butterSmearOneTop",
  butterSmearOneLeft: "butterSmearOneLeft",
  butterSmearTwoTop: "butterSmearTwoTop",
  butterSmearTwoRight: "butterSmearTwoRight",
} as const;

export type ScaleKeys = typeof scaleKeys[keyof typeof scaleKeys];
