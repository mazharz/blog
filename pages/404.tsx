import { CenteredFullHeightContainer } from "@/Styles/globals";
import { FC } from "react";

const NotFound: FC = () => {
  return (
    <CenteredFullHeightContainer>
      <p>
        404! Either I messed up my routes or you&apos;re exploring uncharted
        urls!
      </p>
    </CenteredFullHeightContainer>
  );
};

export default NotFound;
