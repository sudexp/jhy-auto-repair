import { getHeightPx, getDirection, getAlignItems } from './utils';

describe('ImageContent getHeightPx', () => {
  it('returns calc(100% - 56px) when isSmDown is true', () => {
    const result = getHeightPx(true);

    expect(result).toBe('calc(100% - 56px)');
  });

  it('returns calc(100% - 100px) when isSmDown is false', () => {
    const result = getHeightPx(false);

    expect(result).toBe('calc(100% - 100px)');
  });
});

describe('ImageContent getDirection', () => {
  it('returns "column" when isSmDown is true', () => {
    const result = getDirection(true);

    expect(result).toBe('column');
  });

  it('returns "row" when isSmDown is false', () => {
    const result = getDirection(false);

    expect(result).toBe('row');
  });
});

describe('ImageContent getAlignItems', () => {
  it('returns "flex-start" when isSmDown is true', () => {
    const result = getAlignItems(true);

    expect(result).toBe('flex-start');
  });

  it('returns "center" when isSmDown is false', () => {
    const result = getAlignItems(false);

    expect(result).toBe('center');
  });
});
