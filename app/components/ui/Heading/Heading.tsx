import { styles } from './Heading.styles';
import React, { FC } from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import { View } from 'react-native';
import { switchFontSize } from './Heading.support';

export interface IHeading {
  title: string;
  isCenter?: boolean;
  size?: 'small' | 'medium' | 'large';
  style?: TextStyle;
}

export const Heading: FC<IHeading> = ({
  title,
  isCenter = false,
  size = 'large',
  style,
}) => {
  return (
    <View>
      <Text
        style={[
          styles.textStyle,
          { textAlign: isCenter ? 'center' : 'left', fontSize: switchFontSize({ size }) },
          style,
        ]}
      >
        {title}
      </Text>
    </View>
  );
};
