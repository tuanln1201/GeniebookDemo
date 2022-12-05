import React, { useState } from "react";
import Tabs from "@/components/Tabs";
import BankInformation from "@/components/BankInformation";
import MoneyOptions from "@/components/MoneyOptions";
import Header from "@/components/Header";

export default function Home() {
  const [active, setActive] = useState(1);
  return (
    <React.Fragment>
      <Header />
      <Tabs active={active} setActive={setActive} />
      {active === 1 ? <BankInformation /> : <MoneyOptions />}
    </React.Fragment>
  );
}
