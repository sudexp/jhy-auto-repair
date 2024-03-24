import { getHeightPx } from './utils';

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
