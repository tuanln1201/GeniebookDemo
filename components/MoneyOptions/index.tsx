import React, { useState } from "react";
import Wrapper from "@/shared/Wrapper";
import { useTheme } from "styled-components";
import { useBank } from "@/services/hooks";
import ButtonComponent from "@/shared/Button";
import PopupModal from "@/components/PopupModal";
import {
  Title,
  OptionWrapper,
  OptionsWrapper,
  MoneyUnit,
  ButtonWrapper,
  FormWrapper,
} from "./style";

const MONEY_OPTIONS = [
  { id: 1, value: 100000 },
  { id: 2, value: 200000 },
  { id: 3, value: 300000 },
  { id: 4, value: 500000 },
  { id: 5, value: 800000 },
  { id: 6, value: 1000000 },
];
const MoneyOptions = () => {
  const theme = useTheme();
  const [selectedOption, setSelectedOption] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const handleSelectedOption = (id: number) => {
    if (id !== selectedOption) {
      setSelectedOption(id);
    } else {
      setSelectedOption(0);
    }
  };
  const formatCurrency = (val: number) => {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  const { createDonate, isDonateLoading, isDonateSuccess } = useBank();

  const handleCreateDonate = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setShowPopup(true);
    await createDonate({
      amount: MONEY_OPTIONS[selectedOption-1]?.value,
    }).unwrap();
    setSelectedOption(0);
  };
  return (
    <Wrapper bgColor={theme.colors.grey}>
      <Title>Chọn số tiền quyên góp</Title>
      <FormWrapper onSubmit={handleCreateDonate}>
        <OptionsWrapper>
          {MONEY_OPTIONS.map((el) => (
            <OptionWrapper
              key={el.id}
              active={el.id === selectedOption}
              onClick={() => handleSelectedOption(el.id)}
            >
              {formatCurrency(el.value)}
              <MoneyUnit>đ</MoneyUnit>
            </OptionWrapper>
          ))}
        </OptionsWrapper>
        <ButtonWrapper>
          <ButtonComponent
            disabled={selectedOption > 0 ? false : true}
            text={"Tiến hành thanh toán"}
          />
        </ButtonWrapper>
      </FormWrapper>
      {showPopup && (
        <PopupModal
          loading={isDonateLoading}
          status={isDonateSuccess}
          showPopup={showPopup}
          handlePopup={setShowPopup}
        />
      )}
    </Wrapper>
  );
};

export default MoneyOptions;
