/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

// Add styles here
export const ComponentStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  
`;

export const ComponentAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
`;

// Add more styles here
