import React, {ReactElement, useState} from 'react';
import {Range} from 'react-range';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 200px;
  margin: 20px;
`;

const Track = styled.div`
  background-color: #d5d5d5;
  width: 100%;
  height: 2px;
  margin-bottom: 10px;
`;

const Thumb = styled.div`
  background-color: #c8cac5;
  height: 20px;
  width: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
`;

const Slider: React.FC<{}> = (): ReactElement => {
  const [values, setValues] = useState<Array<number>>([800, 3500]);
  return (
    <Container>
      <Range
        step={100}
        min={800}
        max={3500}
        values={values}
        onChange={(values) => setValues(values)}
        renderTrack={({props, children}) => (
          <Track {...props}>{children}</Track>
        )}
        renderThumb={({props}) => <Thumb {...props} />}
      />
      <div>{`Rating: ${values[0]} - ${values[1]}`}</div>
    </Container>
  );
};

export default Slider;
