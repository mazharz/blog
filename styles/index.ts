import { device, remByPx } from "@/Styles/globals";
import styled from "styled-components";

export const HeadingTitle = styled.h1`
  font-size: ${remByPx[30]};
  color: ${props => props.theme.color4};
`;

export const BigParagraph = styled.p`
  font-size: ${remByPx[30]};
  color: ${props => props.theme.color4};
`;

export const RegularParagraphContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const RegularParagraph = styled.p`
  font-size: ${remByPx[16]};
  line-height: ${remByPx[24]};
  color: ${props => props.theme.color4};
  margin: ${remByPx[8]} 0;
`;
