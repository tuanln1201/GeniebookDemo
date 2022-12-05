import React from "react";
import TabItem from "./TabItem";
import { Title } from "./style";
import { TabsList } from "@/types/Tabs";
import Wrapper from "@/shared/Wrapper";

const tabItems = [
  {
    id: 1,
    icon: "visa",
    width: 24,
    height: 14,
    content: "Visa ...2725",
  },
  {
    id: 2,
    icon: "bank",
    width: 22,
    height: 20,
    content: "Chuyển khoản ngân hàng",
  },
];

const Tabs = ({active,setActive}: TabsList) => {
  return (
    <Wrapper>
      <Title>Chọn hình thức quyên góp</Title>

      {tabItems.map(({ id, icon, content, width, height }) => (
        <TabItem
          key={id}
          icon={icon}
          widthIcon={width}
          heightIcon={height}
          content={content}
          onItemClicked={()=>setActive(id)}
          active={active === id}
        />
      ))}
    </Wrapper>
  );
};

export default Tabs;
