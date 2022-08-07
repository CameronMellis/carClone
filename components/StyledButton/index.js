import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const StyledButton = (props) => {

    const type = props.type;

  return (
    <View style={styles.container}>
      <Pressable 
      style={styles.button} 
      onPress={() => {
        console.warn('Hey there!');
        }}
      >
        <Text
        style={styles.text}>Book this car</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;