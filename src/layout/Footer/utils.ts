import { greyColors } from 'theme/colors';

export const getBgColor = (isRootPath: boolean) => {
  return isRootPath ? 'transparent' : greyColors.dark;
};
