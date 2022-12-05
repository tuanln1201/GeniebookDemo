import React from "react";
import { Title } from "./style";
import { useTheme } from "styled-components";
import Wrapper from "@/shared/Wrapper";

const Header = () => {
    const theme = useTheme();
  return (
    <Wrapper bgColor={theme.colors.white}>
      <Title>Ủng hộ chống dịch Covid-19</Title>
    </Wrapper>
  );
};

export default Header;
