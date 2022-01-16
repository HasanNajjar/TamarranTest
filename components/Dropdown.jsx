import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export const Dropdown = () => {
    const options = [
      { id: 1, label: 'Nederlands', value: 'Nederlands' },
      { id: 2,label: 'English', value: 'English' },
      { id: 3,label: 'Deutsch', value: 'Deutsch' },
    ];
  
    const [value, setValue] = React.useState('fruit');
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    return (
      <View>
        <label >
          <select  value={value} onChange={handleChange} >
            {options.map((option) => (
              <option key = {option.id} value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
  
      </View>
    );
  };

  