import { bgColors, redColors, typographyColors } from 'theme/colors';

import { getBorderBottom, getColor, getCursor, getDisableRipple, getTextShadow } from './utils';

describe('Navbar getBorderBottom', () => {
  it('returns "none" if isRootPath is true', () => {
    const result = getBorderBottom(true);

    expect(result).toBe('none');
  });

  it('returns the correct border string if isRootPath is false', () => {
    const expectedResult = `1px solid ${bgColors.light}`;
    const result = getBorderBottom(false);

    expect(result).toBe(expectedResult);
  });
});

describe('Navbar getTextShadow', () => {
  it('returns "none" if isSelected is false && isOpen false', () => {
    const result = getTextShadow(false, false);

    expect(result).toBe('none');
  });

  it('returns "none" if isSelected is false && isOpen true', () => {
    const result = getTextShadow(false, true);

    expect(result).toBe('none');
  });

  it('returns the correct shadow string if isSelected is true && isOpen false', () => {
    const expectedResult = `1px 0 0 ${redColors.dark}`;
    const result = getTextShadow(true, false);

    expect(result).toBe(expectedResult);
  });

  it('returns the correct shadow string if isSelected is true && isOpen true', () => {
    const expectedResult = `1px 0 0 ${typographyColors.dark}`;
    const result = getTextShadow(true, true);

    expect(result).toBe(expectedResult);
  });
});

describe('Navbar getColor', () => {
  it('returns bgcolors.light if isRootPath is true', () => {
    const result = getColor(true);

    expect(result).toBe(bgColors.light);
  });

  it('returns redColors.dark if isRootPath is false', () => {
    const result = getColor(false);

    expect(result).toBe(redColors.dark);
  });
});

describe('getCursor', () => {
  it('returns "default" if isSelected is true', () => {
    const result = getCursor(true);

    expect(result).toBe('default');
  });

  it('returns "pointer" if isSelected is false', () => {
    const result = getCursor(false);

    expect(result).toBe('pointer');
  });
});

describe('getDisableRipple', () => {
  it('returns false if isSelected is false', () => {
    const result = getDisableRipple(false);

    expect(result).toBe(false);
  });

  it('returns true if isSelected is true', () => {
    const result = getDisableRipple(true);

    expect(result).toBe(true);
  });
});
