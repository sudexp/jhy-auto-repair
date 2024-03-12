import { bgColors } from 'theme/colors';

export const getBgColor = (isRootPath: boolean): string => {
  return isRootPath ? 'transparent' : bgColors.middle;
};
