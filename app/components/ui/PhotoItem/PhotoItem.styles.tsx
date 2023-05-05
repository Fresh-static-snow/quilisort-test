import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  photoView: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomStyle: 'solid',
  },
  photoImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 12,
  },
  photoTitle: {
    fontSize: 17,
    fontWeight: '700',
  },
  photoDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  photoDate: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.4)',
    marginTop: 2,
  },
});
