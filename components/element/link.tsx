import { FC } from "react";
import NextLink from "next/link";
import styled from "styled-components";

type props = {
  href: string;
  isActive?: boolean;
  isExternal?: boolean;
};

const LinkAnchor = styled.a<{ isActive: boolean }>`
  color: ${({ theme, isActive }) => (isActive ? theme.color4 : theme.color5)};
  :hover {
    color: ${({ theme }) => theme.color4};
  }
  cursor: ${({ isActive }) => (isActive ? "default" : "pointer")};
  text-decoration: ${({ isActive }) => (isActive ? "none" : "underline")};
  transition: color 0.3s ease-in-out;
`;

const Link: FC<props> = ({
  children,
  href,
  isActive = false,
  isExternal = false,
}) => {
  return isExternal ? (
    <LinkAnchor href={href} isActive={isActive} target="_blank">
      {children}
    </LinkAnchor>
  ) : (
    <NextLink href={href}>
      <LinkAnchor isActive={isActive}>{children}</LinkAnchor>
    </NextLink>
  );
};

export { Link };
