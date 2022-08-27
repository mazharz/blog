import { FC } from "react";
import NextLink from "next/link";
import { ButtonAnchor, LinkAnchor } from "./styles";

type props = {
  href: string;
  isActive?: boolean;
  isExternal?: boolean;
  isButtonShaped?: boolean;
  hasUnderline?: boolean;
};

const Link: FC<props> = ({
  children,
  href,
  isActive = false,
  isExternal = false,
  isButtonShaped = false,
  hasUnderline = true,
  ...rest
}) => {
  return (
    <>
      {isButtonShaped ? (
        <NextLink href={href} {...rest}>
          <ButtonAnchor isActive={isActive}>{children}</ButtonAnchor>
        </NextLink>
      ) : isExternal ? (
        <LinkAnchor
          href={href}
          isActive={isActive}
          hasUnderline={hasUnderline}
          target="_blank"
          {...rest}
        >
          {children}
        </LinkAnchor>
      ) : (
        <NextLink href={href} {...rest}>
          <LinkAnchor isActive={isActive} hasUnderline={hasUnderline}>
            {children}
          </LinkAnchor>
        </NextLink>
      )}
    </>
  );
};

export { Link };
