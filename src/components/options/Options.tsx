import React, { ReactElement, useState } from "react";
import Slider from "../slider/Slider";
import { minRating, maxRating } from "../../services/data";
import RandomizeButton from "../randomize-button/RandomizeButton";
import styled from "styled-components";
import LogicalOperator from "../../models/LogicalOperator";
import OptionsButton from "../options-button";
import Row from "../common/Row";

interface Props {
  onRandomize: Function;
  onOperatorSelect: (operator: LogicalOperator) => void;
  operator: LogicalOperator;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const operators: LogicalOperator[] = ["AND", "OR"];

const Options: React.FC<Props> = (props: Props): ReactElement => {
  const [rating, setRating] = useState<{ min: number; max: number }>({
    min: minRating,
    max: maxRating,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const randomizeProblem = async () => {
    setIsLoading(true);
    await props.onRandomize(rating);
    setIsLoading(false);
  };
  return (
    <Container>
      <Row>
        {operators.map((value) => (
          <OptionsButton
            opertator={value}
            onClick={props.onOperatorSelect}
            isSelected={props.operator === value}
          />
        ))}
      </Row>
      <Slider
        minRating={rating.min}
        maxRating={rating.max}
        onChange={setRating}
      ></Slider>
      <RandomizeButton
        isLoading={isLoading}
        onClick={randomizeProblem}
      ></RandomizeButton>
    </Container>
  );
};

export default Options;
