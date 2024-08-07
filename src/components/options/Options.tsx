import React, { ReactElement, useState } from "react";
import Slider from "../slider/Slider";
import { minRating, maxRating } from "../../services/data";
import RandomizeButton from "../randomize-button/RandomizeButton";
import styled from "styled-components";
import LogicalOperator from "../../models/LogicalOperator";
import OptionsButton from "../options-button";
import Row from "../common/Row";
import TextInput from "../TextInput/TextInput";

interface Props {
  onRandomize: (ratings: { min: number; max: number }, handle: string) => Promise<void>; // Updated to include handle
  onOperatorSelect: (operator: LogicalOperator) => void;
  operator: LogicalOperator;
  handle: string;
  setHandle: (handle: string) => void;
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
  const [handle, setHandle] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const randomizeProblem = async () => {
    setIsLoading(true);
    await props.onRandomize(rating, handle);
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

      <TextInput
        value={handle}
        onChange={setHandle}
      ></TextInput>

      <RandomizeButton
        isLoading={isLoading}
        onClick={randomizeProblem}
      ></RandomizeButton>
    </Container>
  );
};

export default Options;
