import { bgColors } from 'theme/colors';

export const getBgColor = (isRootPath: boolean) => {
  return isRootPath ? 'transparent' : bgColors.middle;
};
