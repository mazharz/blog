import { device, remByPx, theme } from "@/Styles/globals";
import styled from "styled-components";

export const PostLinkContainer = styled.div`
  display: grid;
  gap: ${remByPx[8]};
  grid-template-columns: 5fr 4fr;
  padding: ${remByPx[4]} 0;
  margin: ${remByPx[2]} 0;

  @media ${device.tablet} {
    grid-template-columns: 1.2fr 4fr 2fr;
  }
`;

export const Date = styled.div`
  order: 2;
  text-align: right;

  @media ${device.tablet} {
    order: 1;
    text-align: left;
    padding: 0 ${remByPx[8]};
  }
`;

export const Title = styled.div`
  color: ${theme.color4};
  font-weight: 600;
  order: 1;

  @media ${device.tablet} {
    order: 2;
    padding: 0 ${remByPx[8]};
  }
`;

export const Tags = styled.div`
  margin-top: ${remByPx[4]};
  order: 3;

  @media ${device.tablet} {
    margin-top: 0;
    text-align: right;
    padding: 0 ${remByPx[8]};
  }
`;
