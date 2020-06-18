import React, {ReactElement} from 'react';
import {Range} from 'react-range';

const Slider: React.FC<{}> = (): ReactElement => {
  return (
    <div>
      <Range
        step={1}
        min={0}
        max={100}
        values={[1, 2]}
        onChange={(values) => console.log('changed')}
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
    </div>
  );
};

export default Slider;
