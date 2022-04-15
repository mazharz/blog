import { FC } from "react";
import NextLink from "next/link";
import { ButtonAnchor, LinkAnchor } from "./styles";

type props = {
  href: string;
  isActive?: boolean;
  isExternal?: boolean;
  isButtonShaped?: boolean;
};

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
