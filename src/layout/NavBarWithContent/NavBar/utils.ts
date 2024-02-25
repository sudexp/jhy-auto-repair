import { commonColors, greyColors, redColors } from 'theme/colors';

export const getBorderBottom = (isRootPath: boolean) => {
  return isRootPath ? 'none' : `1px solid ${greyColors.light}`;
};

export const getTextShadow = (isSelected: boolean) => {
  return isSelected ? `1px 0 0 ${redColors.dark}` : 'none';
};

export const getColor = (isRootPath: boolean) => {
  return isRootPath ? commonColors.white : redColors.dark;
};

export const getDrawerTextColor = (isRootPath: boolean) => {
  return isRootPath ? greyColors.text : redColors.dark;
};

export const getCursor = (isSelected: boolean) => {
  return isSelected ? 'default' : 'pointer';
};

export const getDisableRipple = (isSelected: boolean) => {
  return !!isSelected;
};
