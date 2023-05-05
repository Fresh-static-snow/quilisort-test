import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

export const useLoadingIndicator = ({
  isLoading,
  isError,
  component,
  condition,
}: {
  isLoading: boolean;
  isError: boolean;
  component: React.ReactNode;
  condition?: boolean;
}) => {
  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ marginTop: 16 }}>Ошибка...</Text>
      </View>
    );
  } else if (isError) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 16 }}>Загрузка...</Text>
      </View>
    );
  } else if (condition === null){
    return null;
  } else {
    return component;
  }
};
