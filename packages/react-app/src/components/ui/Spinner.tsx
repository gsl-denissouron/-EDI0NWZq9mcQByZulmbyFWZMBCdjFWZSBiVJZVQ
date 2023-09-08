import { css, keyframes } from "@emotion/react";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export function Spinner() {
  return (
    <div
      css={css`
        display: inline-block;
        width: 80px;
        height: 80px;

        &:after {
          content: " ";
          display: block;
          width: 64px;
          height: 64px;
          margin: 8px;
          border-radius: 50%;
          border: 6px solid #009879;
          border-color: #009879 transparent #009879 transparent;
          animation: ${spin} 1.2s linear infinite;
        }
      `}
    />
  );
}
