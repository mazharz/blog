import { FC } from "react";
import NextLink from "next/link";
import styled from "styled-components";

type props = {
  href: string;
  isActive: boolean;
};

const LinkAnchor = styled.a<{ isActive: boolean }>`
  color: ${({ theme, isActive }) => (isActive ? theme.color4 : theme.color5)};
  :hover {
    color: ${({ theme }) => theme.color3};
  }
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
`;

const Link: FC<props> = ({ children, href, isActive }) => {
  return (
    <NextLink href={href}>
      <LinkAnchor isActive={isActive}>{children}</LinkAnchor>
    </NextLink>
  );
};

export { Link };
