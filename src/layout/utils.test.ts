import { getSpacing } from './utils';

describe('getSpacing', () => {
  it('returns 0 if isRootPath is true', () => {
    const result = getSpacing(true);

    expect(result).toBe(0);
  });

  it('returns 3 if isRootPath is false', () => {
    const result = getSpacing(false);

    expect(result).toBe(3);
  });
});
