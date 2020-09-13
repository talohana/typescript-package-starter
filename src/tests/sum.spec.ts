import { sum } from '@utils';

describe('sum', () => {
  it('should add two numbers', () => {
    const result = sum(1, 2);

    expect(result).toBe(3);
  });
});
