export const getJustifyContent = (isSmDown: boolean): 'flex-start' | 'space-between' => {
  return isSmDown ? 'flex-start' : 'space-between';
};

export const getHeightPx = (isSmDown: boolean): string => {
  return isSmDown ? 'calc(100% - 56px)' : 'calc(100% - 100px)'; // 56px (mobile)/ 88px(desktop) is the height of the navbar
};

export const getDirection = (isSmDown: boolean): 'column' | 'row' => {
  return isSmDown ? 'column' : 'row';
};

export const getAlignItems = (isSmDown: boolean): 'flex-start' | 'center' => {
  return isSmDown ? 'flex-start' : 'center';
};
