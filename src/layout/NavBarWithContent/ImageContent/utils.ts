export const getHeightPx = (isSmDown: boolean): string => {
  return isSmDown ? 'calc(100% - 56px)' : 'calc(100% - 100px)'; // 56px (mobile)/ 88px(desktop) is the height of the navbar
};
