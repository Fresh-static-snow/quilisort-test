import { TextStyle } from 'react-native/types';
import { IHeading } from './Heading';

export const switchFontSize = ({
  size,
}: Pick<IHeading, 'size'>): TextStyle['fontSize'] => {
  switch (size) {
    case 'large':
      return 26;
    case 'medium':
      return 20;
    case 'small':
      return 14;
  }
};
