import React from "react";

type ComponentProps = {
  className?: string; // Class name for the button
  id?: string; // Id for the button
  bgColor?: string; // Background color for the button
  imgPath?: string; // Image path for the button
  imgAlt?: string; // Image alt text for the button
  imgClassName?: string; // Class name for the image
  icon?: React.ReactNode; // Icon for the button
  iconPosition?: "left" | "center" | "right"; // Icon position
  variant?: "default" | "primary" | "secondary" | "tertiary" | "icon" | "outlined"; // Button variants
  size?: "small" | "medium" | "large"; // Button size
  margin?: string; // Margin for the button
  padding?: string; // Padding for the button
  onClick?: () => void; // OnClick event for the button
  disabled?: boolean; // Disable the button
  ariaLabel?: string; // Aria label for the button
  adaptiveText?: {
    normal: string;
    loading: string;
    success: string;
    error: string;
  }; // Adaptive text for the button
  buttonState?: "normal" | "loading" | "success" | "error" ,
  text?: string; // Button text
  fullWidth?: boolean; // Full width button
  tabIndex?: number; // Tab index for the button
  onFocus?: () => void; // OnFocus event for the button
  onBlur?: () => void; // OnBlur event for the button
  color?: string; // Button text color
  borderRadius?: string | number; // Button border radius
  isRound?: boolean; // Round button
  shadow?: boolean | string; // Button shadow
  hoverStyles?: React.CSSProperties; // Button hover styles
  focusStyles?: React.CSSProperties; // Button focus color
  activeStyles?: React.CSSProperties; // Button active color
  type?: "button" | "submit" | "reset"; // Button type
  [dataAttribute: `data-${string}`]: string | undefined; // Data attributes
  borderStyle?: "solid" | "dotted" | "dashed"; // Border style
  children?: React.ReactNode; // Button children
};

export default ComponentProps;
