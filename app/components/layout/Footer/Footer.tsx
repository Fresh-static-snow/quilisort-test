import { FooterItem } from './Footer.types';
import { NavItem } from './NavItem';
import React, { FC } from 'react';
import { View } from 'react-native';

export const menu: FooterItem[] = [
  { iconname: 'picture', title: 'Photo', route: 'PhotoPage' },
  { iconname: 'home', title: 'Photos List', route: 'PhotosList' },
];

interface IFooterProps {
  currentRoute: string;
}

export const Footer: FC<IFooterProps> = ({ currentRoute }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}
    >
      {menu.map((item, index) => (
        <NavItem key={index} currentRoute={currentRoute} item={item} />
      ))}
    </View>
  );
};
