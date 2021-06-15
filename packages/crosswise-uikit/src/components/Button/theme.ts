import { scales, variants } from "./types";

export const scaleVariants = {
  [scales.MD]: {
    height: "48px",
    padding: "0 24px",
  },
  [scales.SM]: {
    height: "32px",
    padding: "0 16px",
  },
  [scales.XS]: {
    height: "20px",
    fontSize: "12px",
    padding: "0 8px",
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundColor: "primary",
    color: "white",
  },
  [variants.SECONDARY]: {
    backgroundColor: "transparent",
    border: "2px solid",
    borderColor: "primary",
    boxShadow: "none",
    color: "primary",
    ":disabled": {
      backgroundColor: "transparent",
    },
  },
  [variants.PRIMARYGRADIENT]: {
    backgroundImage: "linear-gradient(to right, #00ffaa , #4579f5 53%, #9c42f5)",
    color: "white",
    boxShadow:
      "0 8px 8px -4px rgba(69, 121, 245, 0.12), 0 16px 24px 0 rgba(69, 121, 245, 0.24), 0 2px 4px -1px rgba(27, 10, 82, 0.12), 0 0 1px 0 rgba(69, 121, 245, 0.24)",
  },
  [variants.SECONDARYGRADIENT]: {
    backgroundImage:
      "linear-gradient(110deg, rgba(245, 247, 250, 0.12), var(--pale-grey-6) 52%, rgba(245, 247, 250, 0) 100%)",
    color: "white",
    backdropFilter: "blur(40px)",
    border: "solid 1px rgba(245, 247, 250, 0.06)",
    boxShadow:
      "0 8px 8px -4px rgba(69, 121, 245, 0.12), 0 16px 24px 0 rgba(69, 121, 245, 0.24), 0 2px 4px -1px rgba(27, 10, 82, 0.12), 0 0 1px 0 rgba(69, 121, 245, 0.24)",
  },
  [variants.TERTIARY]: {
    backgroundColor: "tertiary",
    boxShadow: "none",
    color: "primary",
  },
  [variants.SUBTLE]: {
    backgroundColor: "textSubtle",
    color: "white",
  },
  [variants.DANGER]: {
    backgroundColor: "failure",
    color: "white",
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "primary",
    boxShadow: "none",
  },
};
