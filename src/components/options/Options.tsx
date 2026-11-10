import React, { ReactElement, useState } from "react";
import Slider from "../slider/Slider";
import RandomizeButton from "../randomize-button/RandomizeButton";
import styled from "styled-components";
import LogicalOperator from "../../models/LogicalOperator";
import OptionsButton from "../options-button";
import Row from "../common/Row";
import Ratings from "../../models/Ratings";
import {
  getRatingsFromStorage,
  setRatingsToStorage,
} from "../../services/storage";

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
  const [ratings, setRatings] = useState<Ratings>(getRatingsFromStorage());
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const randomizeProblem = async () => {
    setIsLoading(true);
    await props.onRandomize(ratings);
    setIsLoading(false);
  };

  const handleRatingsChange = (ratings: Ratings) => {
    setRatingsToStorage(ratings);
    setRatings(ratings);
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
        minRating={ratings.min}
        maxRating={ratings.max}
        onChange={handleRatingsChange}
      ></Slider>
      <RandomizeButton
        isLoading={isLoading}
        onClick={randomizeProblem}
      ></RandomizeButton>
    </Container>
  );
};

export default Options;
