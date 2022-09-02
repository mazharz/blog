import { device, remByPx, theme } from "@/Styles/globals";
import styled from "styled-components";

export const PostListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: ${remByPx[14]} 0;
`;

export const Separator = styled.hr`
  height: ${remByPx[1]};
  width: 100%;
  background: ${theme.color8};
  border: none;
  margin: ${remByPx[16]} 0;

  @media ${device.tablet} {
    margin: ${remByPx[2]} 0;
  }
`;
