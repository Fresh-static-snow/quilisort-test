import React, { FC, Fragment } from 'react';
import { Text, Image } from 'react-native';
import { Padding } from '../../ui';
import { Layout } from '../../layout';
import { useTypedSelector } from '../../../redux';
import { styles } from './PhotoPage.styles';
import { ScreenNavigationProp, ScreenRouteProp } from '../../../navigation';
import { checkString } from '../../../utils/stringUtils';

export interface PhotoPageProps {
  route: ScreenRouteProp;
  navigation: ScreenNavigationProp;
}

export const PhotoPage: FC<PhotoPageProps> = ({ route, navigation }) => {
  const params = route.params;
  const { photo: data } = useTypedSelector(s => s.photo);

  const component = (
    <Fragment>
      <Text style={{ textAlign: 'center' }}>
        Copyright Artem Brovko © {new Date().getFullYear()}
      </Text>
      {!data && <Text style={{ textAlign: 'center' }}>Select Photo to Display</Text>}
      {data && (
        <Fragment>
          <Image style={styles.image} source={{ uri: data?.urls.regular }} />
          <Text style={styles.text}>{checkString(data?.description)}</Text>
          <Text>
            height: {data?.height}, width: {data?.width}
          </Text>
        </Fragment>
      )}
    </Fragment>
  );

  return (
    <Layout isScrollView={false}>
      <Padding>{data ? component : <Text>Select photo to display</Text>}</Padding>
    </Layout>
  );
};
