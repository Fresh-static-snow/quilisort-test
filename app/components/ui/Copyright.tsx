import React, { FC } from 'react';
import { Text, View } from 'react-native';

export const Copyright:FC = () => {
  return (
    <View>
      <Text style={{ textAlign: 'center' }}>
        Copyright Artem Brovko © {new Date().getFullYear()}
      </Text>
    </View>
  );
};
