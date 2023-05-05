import { Footer, PhotoList, PhotoPage } from '../components';
import { TypedRootStackParamList } from './Navigation.types';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC, useEffect, useState } from 'react';

const { Navigator, Screen } = createNativeStackNavigator<TypedRootStackParamList>();

export const Navigation: FC = () => {
  const ref = useNavigationContainerRef();
  const [name, setName] = useState<string | undefined>(undefined);

  useEffect(() => {
    const timeout = setTimeout(() => setName(ref.getCurrentRoute()?.name), 100);

    return () => clearTimeout(timeout);
  }, [ref]);

  useEffect(() => {
    const listener = ref.addListener('state', () => setName(ref.getCurrentRoute()?.name));

    return () => ref.removeListener('state', listener);
  }, [ref]);

  return (
    <>
      <NavigationContainer ref={ref}>
        <Navigator initialRouteName={'PhotosList'} screenOptions={{ headerShown: false }}>
          <Screen name={'PhotosList'} component={PhotoList} />
          <Screen name={'PhotoPage'} component={PhotoPage as never} />
        </Navigator>
        <Footer currentRoute={name!} />
      </NavigationContainer>
    </>
  );
};
