import { FC } from "react";
import styled from "styled-components";
import { device, size } from "@/Styles/globals";
import { Header } from "./header";

const Container = styled.div`
  max-width: 100%;
  width: 100%;
  padding: 0.5rem;

  @media ${device.laptop} {
    max-width: ${size.laptop};
    margin: 0 auto;
    padding: 0;
  }
`;

const Layout: FC = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      {/* TODO */}
      <footer>footer here</footer>
    </Container>
  );
};

export { Layout };
