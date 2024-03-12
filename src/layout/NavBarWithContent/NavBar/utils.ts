import { bgColors, redColors, typographyColors } from 'theme/colors';

export const getBorderBottom = (isRootPath: boolean): string => {
  return isRootPath ? 'none' : `1px solid ${bgColors.light}`;
};

export const getMarginBottom = (isSmDown: boolean): number => {
  return isSmDown ? 0 : 3;
};

export const getTextShadow = (isSelected: boolean, isOpen: boolean): string => {
  if (isSelected && isOpen) {
    return `1px 0 0 ${typographyColors.dark}`;
  }

  if (isSelected && !isOpen) {
    return `1px 0 0 ${redColors.dark}`;
  }

  return 'none';
};

export const getColor = (isRootPath: boolean): string => {
  return isRootPath ? bgColors.light : redColors.dark;
};

export const getCursor = (isSelected: boolean): 'default' | 'pointer' => {
  return isSelected ? 'default' : 'pointer';
};

export const getDisableRipple = (isSelected: boolean): boolean => {
  return !!isSelected;
};
