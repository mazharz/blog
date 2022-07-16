import { device, remByPx } from "@/Styles/globals";
import styled from "styled-components";

export const HeadingTitle = styled.h1`
  font-size: ${remByPx[50]};
  color: ${props => props.theme.color4};
`;

export const BigParagraph = styled.p`
  font-size: ${remByPx[30]};
  color: ${props => props.theme.color4};
`;

export const RegularParagraphContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 0;
  margin: ${remByPx[30]} 0;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    row-gap: ${remByPx[6]};
    column-gap: ${remByPx[30]};
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
    row-gap: ${remByPx[10]};
    column-gap: ${remByPx[50]};
  }
`;

export const RegularParagraph = styled.p`
  font-size: ${remByPx[16]};
  line-height: ${remByPx[24]};
  color: ${props => props.theme.color4};
`;
