/** @jsxImportSource @emotion/react */

import { ComponentStyles } from "./ComponentStyles"; // Import ComponentStyles from ComponentStyles.ts
import ComponentProps from "./ComponentProps"; // Import ComponentProps from ComponentProps.tsx

const ComponentName: React.FC<ComponentProps> = ({
  componentClassName,
  bgColor = "gray",
}) => {
  return (
    <div
      css={[
        ComponentStyles,
        {
          backgroundColor: `${bgColor ? bgColor : ""}`, // Default background color is gray
        },
      ]}
      className={componentClassName ? componentClassName : ""} // Add class name if provided
    >
      <p>Hello World</p>
    </div>
  );
};

export default ComponentName;
