export const getDirection = (isSmDown: boolean): 'column' | 'row' => {
  return isSmDown ? 'column' : 'row';
};

export const getAlignItems = (isSmDown: boolean): 'flex-start' | 'center' => {
  return isSmDown ? 'flex-start' : 'center';
};
