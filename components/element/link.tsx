import { FC } from "react";
import NextLink from "next/link";
import styled from "styled-components";
import { remByPx } from "@/Styles/globals";

type props = {
  href: string;
  isActive?: boolean;
  isExternal?: boolean;
  isButtonShaped?: boolean;
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

const ButtonAnchor = styled.a<{ isActive: boolean }>`
  display: inline-block;
  color: ${({ theme, isActive }) => (isActive ? theme.color4 : theme.color5)};
  :hover {
    color: ${({ theme }) => theme.color4};
    border: ${({ theme }) => `${remByPx[2]} solid ${theme.color5}`};
  }
  cursor: ${({ isActive }) => (isActive ? "default" : "pointer")};
  border: ${({ theme, isActive }) =>
    isActive ? "none" : `${remByPx[2]} solid ${theme.color7}`};
  border-radius: ${remByPx[50]};
  text-decoration: "none";
  transition: color 0.3s ease-in-out, border 0.3s ease-in-out;
  padding: ${remByPx[8]} ${remByPx[20]};
`;

const Link: FC<props> = ({
  children,
  href,
  isActive = false,
  isExternal = false,
  isButtonShaped = false,
  ...rest
}) => {
  return (
    <>
      {isButtonShaped ? (
        <NextLink href={href} {...rest}>
          <ButtonAnchor isActive={isActive}>{children}</ButtonAnchor>
        </NextLink>
      ) : isExternal ? (
        <LinkAnchor href={href} isActive={isActive} target="_blank" {...rest}>
          {children}
        </LinkAnchor>
      ) : (
        <NextLink href={href} {...rest}>
          <LinkAnchor isActive={isActive}>{children}</LinkAnchor>
        </NextLink>
      )}
    </>
  );
};

export { Link };
