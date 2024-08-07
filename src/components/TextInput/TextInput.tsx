import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface TextInputProps {
  value: string;
  onChange: Function;
}



const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 5px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
`;


const TextInput: React.FC<TextInputProps> = ({ value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder='Handle'
        value={value}
        onChange={handleChange}
      />
    </Container>
  );
};

export default TextInput;
