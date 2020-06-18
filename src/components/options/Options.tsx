import React, {ReactElement, useState} from 'react';
import Slider from '../slider/Slider';
import {minRating, maxRating} from '../../services/data';
import RandomizeButton from '../randomize-button/RandomizeButton';
import styled from 'styled-components';

interface Props {
  onRandomize: Function;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Options: React.FC<Props> = (props: Props): ReactElement => {
  const [rating, setRating] = useState<{min: number; max: number}>({
    min: minRating,
    max: maxRating,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const randomizeProblem = async () => {
    setIsLoading(true);
    await props.onRandomize();
    setIsLoading(false);
  };
  return (
    <Container>
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
