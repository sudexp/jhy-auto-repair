import { commmonColors, greyColors, redColors } from 'theme/colors';

export const getBorderBottom = (isRootPath: boolean) => (isRootPath ? 'none' : `1px solid ${greyColors.light}`);

export const getTextShadow = (isSelected: boolean) => {
  return isSelected ? `1px 0 0 ${redColors.dark}` : 'none';
};

export const getColor = (isRootPath: boolean) => {
  return isRootPath ? commmonColors.white : redColors.dark;
};

export const getCursor = (isSelected: boolean) => {
  return isSelected ? 'default' : 'pointer';
};

export const getDisableRipple = (isSelected: boolean) => {
  return !!isSelected;
};
