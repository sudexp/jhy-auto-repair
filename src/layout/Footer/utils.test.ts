import { bgColors } from 'theme/colors';

import { getBgColor } from './utils';

describe('Footer getBgColor', () => {
  it('should return "transparent" if isRootPath is true', () => {
    expect(getBgColor(true)).toBe('transparent');
  });

  it('should return dark grey color if isRootPath is false', () => {
    expect(getBgColor(false)).toBe(bgColors.middle);
  });
});
