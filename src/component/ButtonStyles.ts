/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

// Add styles here
const Styles = {
  ButtonStyles: css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    border 1px solid transparent;
    cursor: pointer;
  `,

  ButtonAnimation: keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
`,
  Variants: {
    default: css`
      background-color: gray;
      color: white;
      border: 1px solid transparent;
    `,
    outlined: css`
      background-color: transparent;
      color: white;
      border: 1px solid black;
    `,

    primary: css`
      background-color: blue;
      color: white;
      border: 1px solid blue;
    `,

    secondary: css`
      background-color: green;
      color: white;
    `,

    tertiary: css`
      background-color: purple;
      color: white;
    `,

    icon: css`
      background-color: transparent;
      border: none;
      padding: 0;
      margin: 0;
    `,
    disabled: css`
      background-color: gray;
      color: white;
    `,
  },

  Size: {
    small: css`
      padding: 0.25rem 0.5rem;
      font-size: 0.75rem;
    `,
    medium: css`
      padding: 0.5rem 1rem;
      font-size: 1rem;
    `,
    large: css`
      padding: 1rem 2rem;
      font-size: 1.5rem;
    `,
  },

  HoverColor: css`
    &:hover {
      background-color: #f6f6f450;
      }
    `,
  

};

// Add more styles here

export default Styles;
