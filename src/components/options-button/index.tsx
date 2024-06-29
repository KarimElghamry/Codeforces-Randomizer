import React from "react";
import styled from "styled-components";
import LogicalOperator from "../../models/LogicalOperator";

const Button = styled.div<{ isSelected: boolean }>`
  width: 50px;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
  color: white;
  background-color: ${(props) => (props.isSelected ? "#02b947" : "grey")};
`;

type OptionsButtonProps = {
  opertator: LogicalOperator;
  isSelected: boolean;
  onClick: (operator: LogicalOperator) => void;
};

const OptionsButton = ({
  opertator,
  isSelected,
  onClick,
}: OptionsButtonProps) => {
  return (
    <Button isSelected={isSelected} onClick={() => onClick(opertator)}>
      {opertator}
    </Button>
  );
};

export default OptionsButton;
