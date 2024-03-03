export const getDirection = (isSmDown: boolean) => {
  return isSmDown ? 'column' : 'row';
};

export const getAlignItems = (isSmDown: boolean) => {
  return isSmDown ? 'flex-start' : 'center';
};
