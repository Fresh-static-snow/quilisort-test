import React, { FC, PropsWithChildren } from 'react';
import { View } from 'react-native';

export const Padding: FC<PropsWithChildren> = ({ children }) => {
  return (
    <View
      style={{
        paddingHorizontal: 14,
        height: '100%'
      }}
    >
      {children}
    </View>
  );
};
