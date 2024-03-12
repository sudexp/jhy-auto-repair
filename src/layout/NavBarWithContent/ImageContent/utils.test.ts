import { getSpacing, getHeightPx, getJustifyContent, getDirection, getAlignItems } from './utils';

describe('ImageContent getSpacing', () => {
  it('returns 1 when isSmDown is true', () => {
    const result = getSpacing(true);

    expect(result).toBe(1);
  });

  it('returns 2 when isSmDown is false', () => {
    const result = getSpacing(false);

    expect(result).toBe(2);
  });
});

describe('ImageContent getJustifyContent', () => {
  it('returns flex-start when isSmDown is true', () => {
    const result = getJustifyContent(true);

    expect(result).toBe('flex-start');
  });

  it('returns space-between when isSmDown is false', () => {
    const result = getJustifyContent(false);

    expect(result).toBe('space-between');
  });
});

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
