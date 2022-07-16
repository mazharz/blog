import styled from "styled-components";

export const pageTransitionDuration = 300;
const transitionName = "page-transition";

export const AnimationClassWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  &.${transitionName}-enter {
    opacity: 0;
  }
  &.${transitionName}-exit {
    opacity: 1;
  }
  &.${transitionName}-enter-active {
    opacity: 1;
  }
  &.${transitionName}-exit-active {
    opacity: 0;
  }
  &.${transitionName}-enter-active, &.${transitionName}-exit-active {
    transition: opacity ${pageTransitionDuration}ms ease-in-out;
  }
`;
