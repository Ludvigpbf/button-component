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
  iconPosition = "left",
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
  noText,
  fontSize,
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
  borderStyle,
  borderColor,
  children,
  ...dataAttributes // Add data attributes
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
          width: `${isRound ? "auto" : fullWidth ? "100%" : ""}`,
          height: `${isRound ? "auto" : ""}`,
          borderRadius: `${isRound ? "50%" : borderRadius ? borderRadius : ""}`,
          borderStyle: `${borderStyle ? borderStyle : ""}`,
          borderColor: `${borderColor ? borderColor : ""}`,
          color: `${color ? color : ""}`,
          aspectRatio: isRound ? "1" : "auto",
          fontSize: `${fontSize ? fontSize : ""}`,
          boxShadow: `${
            shadow
              ? typeof shadow === "string"
                ? shadow
                : "0px 3px 2px 1px rgba(255, 255, 255, .2)"
              : ""
          }`,
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
      {...dataAttributes}
    >
      {/* Render image if imgPath is provided */}
      {imgPath && (
        <img src={imgPath} alt={imgAlt ?? imgAlt} className={imgClassName} />
      )}
      {/* Render icon left if provided */}
      {(iconPosition === "left" || iconPosition === "center") && icon && (
        <span
          css={[
            Styles.IconPosition[iconPosition], // Dynamically apply the selected icon position style
          ]}
        >
          {icon}
        </span>
      )}{" "}
      {/* Render adaptive text if provided */}
      {!noText && !children && renderAdaptiveText()}
      {/* Render children */}
      {children}
      {/* Render icon right if provided */}
      {iconPosition === "right" && icon && (
        <span
          css={[
            Styles.IconPosition[iconPosition], // Dynamically apply the selected icon position style
          ]}
        >
          {icon}
        </span>
      )}{" "}
    </button>
  );
};

export default ComponentName;
