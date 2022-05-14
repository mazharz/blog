import { CenteredFullHeightContainer } from "@/Styles/globals";
import { FC } from "react";

const ErrorPage: FC = () => {
  return (
    <CenteredFullHeightContainer>
      <p>500! Something is seriously wrong here!</p>
    </CenteredFullHeightContainer>
  );
};

export default ErrorPage;
