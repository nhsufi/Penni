import React from "react";
import { styled } from "@material-ui/core/styles";

const StyledWrapper = styled("div")({
  height: 50,
  backgroundColor: "red",
});

const TopBar = () => {
  return <StyledWrapper>Hello from the top bar component!</StyledWrapper>;
};

export default TopBar;
