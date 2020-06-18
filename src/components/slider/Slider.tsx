import React, {ReactElement, useState} from 'react';
import {Range} from 'react-range';
import styled from 'styled-components';

const Container = styled.div`
  width: 200px;
  margin: 20px;
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
          <div
            {...props}
            style={{
              ...props.style,
              height: '6px',
              width: '100%',
              backgroundColor: '#ccc',
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({props}) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '42px',
              width: '42px',
              backgroundColor: '#999',
            }}
          />
        )}
      />
    </Container>
  );
};

export default Slider;
