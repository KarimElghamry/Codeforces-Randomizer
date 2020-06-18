import React, {ReactElement, useState} from 'react';
import {Range, getTrackBackground} from 'react-range';
import styled from 'styled-components';

interface TrackProps {
  values: Array<number>;
  min: number;
  max: number;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 250px;
  margin: 20px;
`;

const Track = styled.div<TrackProps>`
  background: ${(props) =>
    getTrackBackground({
      values: props.values,
      colors: ['#ccc', '#198FCE', '#ccc'],
      min: props.min,
      max: props.max,
    })};
  width: 100%;
  height: 2px;
  margin-bottom: 10px;
`;

const Thumb = styled.div<{index: number}>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.index === 0 ? '#F8CC52' : '#BA1D25')};
  height: 16px;
  width: 16px;
  border-radius: 16px;
`;

const Indicator = styled.div<{isDragged: boolean}>`
  height: 8px;
  width: 8px;
  border-radius: 6px;
  background-color: ${(props) => (props.isDragged ? '#198FCE' : 'white')};
`;

const min = 800;
const max = 3500;

const Slider: React.FC<{}> = (): ReactElement => {
  const [values, setValues] = useState<Array<number>>([800, 3500]);
  return (
    <Container>
      <Range
        step={100}
        min={min}
        max={max}
        values={values}
        onChange={(values) => setValues(values)}
        renderTrack={({props, children}) => (
          <Track min={min} max={max} values={values} {...props}>
            {children}
          </Track>
        )}
        renderThumb={({props, isDragged, index}) => {
          return (
            <Thumb {...props} index={index}>
              <Indicator isDragged={isDragged}></Indicator>
            </Thumb>
          );
        }}
      />
      <div>{`Rating: ${values[0]} - ${values[1]}`}</div>
    </Container>
  );
};

export default Slider;
