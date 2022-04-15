import styled from "styled-components";
import { device, screenSize } from "@/Styles/globals";

export const Container = styled.div`
  max-width: 100%;
  width: 100%;
  padding: 0 1rem;
  min-height: 100%;
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    max-width: ${screenSize.laptop};
    margin: 0 auto;
    padding: 0;
  }
`;

export const BodyContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
