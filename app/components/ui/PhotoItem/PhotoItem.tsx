import { FC } from 'react';
import { UnsplashPhotoResponse } from '../../../models/unsplash';
import { View, Image, Text } from 'react-native';
import { styles } from './PhotoItem.styles';
import { checkString } from '../../../utils/stringUtils';

export const PhotoItem: FC<UnsplashPhotoResponse> = props => {
  const { description, urls, created_at } = props;
  return (
    <View style={styles.photoView}>
      <Image style={styles.photoImage} source={{ uri: urls.small }} />
      <View style={styles.photoDetails}>
        <Text style={styles.photoTitle}>{checkString(description)}</Text>
        <Text style={styles.photoDate}>{new Date(created_at).toLocaleDateString()}</Text>
      </View>
    </View>
  );
};
