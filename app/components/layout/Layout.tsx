import React, { FC, Fragment, PropsWithChildren } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { css } from '../../styles';

interface ILayout {
  isScrollView?: boolean;
}

export const Layout: FC<PropsWithChildren<ILayout>> = ({
  children,
  isScrollView = true,
}) => {
  return (
    <Fragment>
      {!isScrollView && <View style={css.commonContainer}>{children}</View>}
      {isScrollView && <ScrollView style={css.commonContainer}>{children}</ScrollView>}
    </Fragment>
  );
};
