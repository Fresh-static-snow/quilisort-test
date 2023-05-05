import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type TypedRootStackParamList = {
  PhotosList: undefined;
  PhotoPage: undefined;
};
export type Props = NativeStackScreenProps<TypedRootStackParamList>;
export type ScreenNavigationProp = Props['navigation'];

export type ScreenRouteProp = Props['route'] &  {
  params: {
    id: string;
  };
};

