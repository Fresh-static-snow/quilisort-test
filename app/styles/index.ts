import { Platform, StyleSheet, ViewStyle } from 'react-native';

export const css = StyleSheet.create({
  commonContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    paddingTop: 24,
  },
  appContainer: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 44 : 0,
  },
});

export const BOX_SHADOW: ViewStyle = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.15,
  shadowRadius: 10,
};
