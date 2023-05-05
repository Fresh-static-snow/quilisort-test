import { FlatList, RefreshControl, TouchableOpacity } from 'react-native';
import { Layout } from '../../layout';
import { Padding } from '../../ui';
import React, { FC, useMemo } from 'react';
import { PhotoItem } from '../../ui/PhotoItem/PhotoItem';
import { useQuery } from '@tanstack/react-query';
import { unsplashQuery } from '../../../queries/unsplash';
import { useLoadingIndicator } from '../../../hooks/useLoadingIndicator';
import { ScreenNavigationProp } from '../../../navigation';
import { useActions } from '../../../redux';
import { Copyright } from '../../ui';

export const PhotoList: FC<{ navigation: ScreenNavigationProp }> = ({ navigation }) => {
  const { key, fn } = unsplashQuery.get();
  const { data, isLoading, isError, refetch } = useQuery(key, fn);
  const { setPhoto } = useActions();

  const component = useMemo(
    () => (
      <Padding>
        <Copyright/>
        <FlatList
          refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refetch} />}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setPhoto({ photo: item });
                navigation.navigate(
                  'PhotoPage' as never,
                  {
                    id: item.id,
                  } as never,
                );
              }}
            >
              <PhotoItem {...item} />
            </TouchableOpacity>
          )}
        />
      </Padding>
    ),
    [data, isLoading, navigation, refetch, setPhoto],
  );

  return (
    <Layout isScrollView={false}>
      {useLoadingIndicator({ isLoading, isError, component })}
    </Layout>
  );
};
