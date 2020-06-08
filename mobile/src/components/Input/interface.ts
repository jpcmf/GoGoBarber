import { TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

export interface InputValuesReference {
  value: string;
}
