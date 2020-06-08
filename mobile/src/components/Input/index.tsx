import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';
import { InputProps, InputValuesReference } from './interface';

import { Container, TextInput, Icon } from './styles';
import colors from '../../styles/colors';

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  const inputElement = useRef<any>(null);

  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValuesReference>({ value: defaultValue });

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        inputElement.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElement.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Icon name={icon} size={20} color={colors.iconBg} />

      <TextInput
        keyboardAppearance="dark"
        placeholderTextColor={colors.inputPh}
        defaultValue={defaultValue}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
    </Container>
  );
};

export default Input;
