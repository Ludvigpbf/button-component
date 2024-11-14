/** @jsxImportSource @emotion/react */

import Styles from "./ButtonStyles"; // Import ComponentStyles from ComponentStyles.ts
import ComponentProps from "./ButtonProps"; // Import ComponentProps from ComponentProps.tsx

const ComponentName: React.FC<ComponentProps> = ({
  className,
  id,
  bgColor,
  imgPath,
  imgAlt,
  imgClassName,
  icon,
  iconPosition = icon ? "left" : undefined,
  variant = "default",
  size = "medium",
  margin,
  padding,
  onClick = () => alert("Button Clicked!"),
  disabled,
  ariaLabel,
  adaptiveText,
  buttonState = "normal",
  text = "Button",
  fullWidth,
  tabIndex,
  onFocus,
  onBlur,
  color,
  borderRadius,
  isRound,
  shadow,
  hoverStyles,
  focusStyles,
  activeStyles,
  type = "button",
  // ...dataAttributes, // Add data attributes
  borderStyle,
  children,
}) => {

  const renderAdaptiveText = () => {
    if (adaptiveText) {
      return adaptiveText[buttonState];
    }
    return text;
  };

  return (
    <button
      id={id}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
      onFocus={onFocus}
      onBlur={onBlur}
      css={[
        Styles.ButtonStyles, // Apply the default button style
        Styles.Variants[variant], // Dynamically apply the selected variant style
        Styles.Size[size], // Dynamically apply the selected size style
        Styles.HoverColor, // Apply the selected hover color style
        {
          backgroundColor: `${bgColor ? bgColor : ""}`, // Default background color is transparent
          margin: `${margin ? margin : ""}`, // Default margin is 0
          padding: `${padding ? padding : ""}`, // Default padding is 0
          width: `${fullWidth ? "100%" : ""}`,
          borderRadius: `${isRound ? "50%" : borderRadius ? borderRadius : ""}`,
          borderStyle: `${borderStyle ? borderStyle : ""}`,
          color: `${color ? color : ""}`,
          boxShadow: `${shadow ? (typeof shadow === "string" ? shadow : "2px 2px 4px rgba(0, 0, 0, 0.1)") : ""}`,
          "&:hover": {
            ...hoverStyles,
          },
          "&:focus": {
            ...focusStyles,
          },
          "&:active": {
            ...activeStyles,
          },
        },
      ]}
      className={className ? className : ""} // Add class name if provided
      onClick={onClick}
      disabled={disabled}
      type={type}
      //  {...dataAttributes}
    >
      {/* Render image if imgPath is provided */}
      {imgPath && (
        <img src={imgPath} alt={imgAlt ?? imgAlt} className={imgClassName} />
      )}
      {/* Render icon left if provided */}
      {iconPosition === "left" && icon && <span>{icon}</span>}{" "}
      {/* Render adaptive text if provided */}
      {renderAdaptiveText()}
      {/* Render children */}
      {children}
      {/* Render icon right if provided */}
      {iconPosition === "right" && icon && icon} {/* Render icon if provided */}
    </button>
  );
};

export default ComponentName;
