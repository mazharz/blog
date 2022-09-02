import { remByPx, theme } from "@/Styles/globals";
import styled from "styled-components";

export const InputElement = styled.input<{ hasTextRightAligned: boolean }>`
  min-width: 0;
  border: ${remByPx[1]} solid ${theme.color7};
  border-radius: ${remByPx[8]};
  padding: ${remByPx[8]};
  outline: none;
  transition: color 0.3s ease-in-out, border 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
  color: ${theme.color4};
  font-weight: 600;
  background: transparent;
  text-align: ${({ hasTextRightAligned }) =>
    hasTextRightAligned ? "right" : "unset"};

  &:active,
  &:focus {
    color: ${theme.color4};
    border: ${remByPx[1]} solid ${theme.color5};
    box-shadow: 0 0 ${remByPx[8]} ${remByPx[4]} ${theme.color7};
    &::placeholder {
      color: ${theme.color7};
    }
  }

  &::placeholder {
    transition: color 0.3s ease-in-out;
    color: ${theme.color6};
  }
`;
