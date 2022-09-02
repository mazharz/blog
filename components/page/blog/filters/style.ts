import { device, remByPx } from "@/Styles/globals";
import styled from "styled-components";

export const FiltersContainer = styled.div`
  margin: ${remByPx[14]} 0 0 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${remByPx[8]};
  align-items: center;
  padding: ${remByPx[4]} 0;

  @media ${device.tablet} {
    grid-template-columns: 1.2fr 4fr 2fr;
  }
`;
