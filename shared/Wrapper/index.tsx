import React from "react";
import { WrapperType } from "@/types/Wrapper";
import { WrapperComponent } from "./style";

const Wrapper = ({ bgColor, children }: WrapperType) => {
  return <WrapperComponent bgColor={bgColor}>{children}</WrapperComponent>;
};

export default Wrapper;
